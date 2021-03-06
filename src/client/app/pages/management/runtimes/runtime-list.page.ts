import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService, LocationService, AuthService } from './../../../services';


declare let messager: any;
declare let Config: any;

@Component({
  selector: 'hb-runtime-list',
  templateUrl: './runtime-list.html',
})

export class RuntimeListPage {

  private userInfo: any;

  private locationNames: Array<any> = [];
  private runtimeForm: FormGroup;
  private runtimeValue: any = 'All';
  private currentRuntimes: Array<any> = [];
  private filterRuntimes: Array<any> = [];
  private filterCondition: string;
  private groups: Array<any> = [];
  private runtimes: Array<any> = [];
  private locationGroup: Array<any> = [];
  private locationServer: Array<any> = [];
  private runtimeInfoModal: any = {};
  private deleteLocationModalOptions: any = {};
  private runtimeSelected: any = {
    location: '',
  };
  private pageOptions: any;
  private pageSize: number = 14;
  private pageIndex: any;
  private currentIndex: any = 1;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _locationService: LocationService,
    private _groupService: GroupService,
    private _authService: AuthService,
    private _fb: FormBuilder) {
  }

  ngOnInit() {
    this.userInfo = this._authService.getUserInfoFromCache();

    this.groups = this._route.snapshot.data['groups'];
    this.getLocations()
    this.runtimeInfoModal = {
      show: false,
      title: "Runtime",
      hideCloseBtn: true,
      hideFooter: true
    };
    this.deleteLocationModalOptions = {
      show: false,
      title: "Warn",
      hideCloseBtn: true,
      hideFooter: true
    };
    this.pageOptions = {
      "boundaryLinks": false,
      "directionLinks": true,
      "hidenLabel": true,
    };
    this.buildForm();
  }

  private getLocations() {
    this.runtimes = this.groups;
    this.search();
  }

  private buildForm() {
    let data = this.runtimeSelected || {};
    this.runtimeForm = this._fb.group({
      runtimeLocation: [{ value: (data.location || ''), disabled: (false) }],
    });
  }

  private selectRuntime(value: any) {
    this.groups = this.runtimes;
    this.runtimeValue = value;
    if (value == 'All') {
      // this.groups = this.runtimes;
    } else {
      this.groups = this.groups.filter(group => group.location == value)
    }
    this.currentIndex = 1;
    this.search();
  }

  private setPage(pageIndex: number) {
    this.pageIndex = pageIndex;
    if (!this.filterRuntimes) return;
    let start = (pageIndex - 1) * this.pageSize;
    let end = start + this.pageSize;
    this.currentRuntimes = this.filterRuntimes.slice(start, end);
  }

  private searchTimeout: any;

  private search(value?: any) {
    this.filterCondition = value || '';
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      let keyWord = this.filterCondition;
      if (!keyWord) {
        this.filterRuntimes = this.groups;
      } else {
        let regex = new RegExp(keyWord, 'i');
        this.filterRuntimes = this.groups.filter(item => {
          return regex.test(item.location);
        });
      }
      this.setPage(this.currentIndex);
    }, 100);
  }

  private addNewRuntime(e: any) {
    e.stopPropagation();
    e.preventDefault();
    this.runtimeInfoModal.show = true;
    // this.isNewGroup = true;
    setTimeout(() => {
      this.runtimeSelected = {
        location: '',
      }
      this.buildForm();
    });
  }

  private deleteRuntime(index: any) {
    this.deleteLocationModalOptions.show = true;
    this._locationService.getLocationGroup(this.groups[index].location)
    .then(data => {
      this.runtimeSelected = {
        location: this.groups[index].location || '',
        groups: data || [],
      }
    })
  }

  private confirmDelete(location: any) {
    this._locationService.remove(location)
      .then(data => {
        messager.success('Delete Succeed.');
        this.deleteLocationModalOptions.show = false;
        return this._groupService.get(true);
      })
      .then(data => {
        this.groups = data;
        this.getLocations();
      })
      .catch((err) => {
        messager.error(err || 'Delete failed');
      })
  }

  private save() {
    let form = this.runtimeForm;
    let postData = {
      location: form.controls.runtimeLocation.value,
      group: this.locationGroup,
      server: this.locationServer
    }
    this._locationService.add(postData)
      .then((data) => {
        messager.success('Add Succeed.');
        this.runtimeInfoModal.show = false;
        return this._groupService.get(true);
      })
      .then(data => {
        this.groups = data;
        this.getLocations();
      })
      .catch((err) => {
        messager.error(err || 'Add failed');
      })
  }
}
