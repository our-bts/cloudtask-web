# Cloudtask Website

![Logo](http://task.newegg.org/static/images/logo.png)

<h1>Environment</h1>
Environment选择框主要用于切换接入环境，默认环境为GDEV，可供切换的环境有三个，分别是：
- `GDEV`环境
- `GQC`环境
- `PRD`环境

<h1>Dashboard</h1>

![Dashboard](http://neg-app-img/MISInternal/DocumentTool/upload_image_1504946021174_.jpg)

Dashboard页面主要用于展示接入`Cloudtask`平台的概要信息，主要包含
- 接入平台的`Group`数量
- 所有的`Server`数量
- 所有的`Job`数量
- 未禁止运行的`Job`数量
- 使用摘要

<h1>Task<h1>

Tips: 如果页面没有任何`Task`信息，有可能是你没有任何对应`Group`的`Owner`权限

> Job List Page

![Job List](http://neg-app-img/MISInternal/DocumentTool/upload_image_1504944262742_.jpg)

此页面左上角标题部分的括号内显示当前选中的`Group`和`Runtime`。

此页面可以查看当前选中`Group`下的所有`Job`信息，包含
- Status: Job当前的状态
- Job Name: Job名称
- Next Run Time: Job下一次运行的时间
- Last Run Time: Job上一次运行的时间
- Last Result：Job上一次运行的结果

点击某一行的`Job name`可以进入对应Job的`Job Detail`页面，后面会详细介绍。
点击列表后面的`设置`图标，可以对`Job`进行`Start`, `Stop`, `Enabled`, `Disabled`等操作，根据`Job`状态的不同所显示的按钮会相应的改变
- Start: 立即运行Job
- Stop: 立即停止正在运行的Job（与`Start`为互斥操作）
- Enabled: Job进入运行周期
- Disabled: 禁止Job运行（与`Disabled`为互斥操作）

右边顶部有`Refresh`，`Add New Job`，`Import`和`Batch Update File`四个按钮
- Refresh: 获取当前选中Group下所有Job的最新状态
- Add New Job: 跳转到创建Job的页面，后面会详细介绍。
- Import: 选择Job，确定后跳转到创建Job的页面，并导入对应的Job数据
- Batch Update File: 批量更新Job文件

> Add New Job

![Add New Job](http://neg-app-img/MISInternal/DocumentTool/upload_image_1504944521316_.jpg)

按照页面表单所示填写表单信息

- Runtime: Job运行环境
 - Example: `GDEV-WIN` 表示在GDEV环境下面的Windows机器上运行Job
- Group: Job所属的Group信息，用于将Job分类，Group信息可以在Group模块下创建
- Target Server: 运行Job的服务器，支持下拉选择和手动输入，若为空，则表示将在整个`Runtime`下随机分配`Server`运行Job
- Command: Job的运行命令（如 node index.js）
- File name: 展示Job的当前执行程序名，点击后面的删除按钮，可删除当前的Job执行程序
- Update file: 可选配置。选择Job的执行程序（必须是可执行程序并且按照 .tar.gz 格式进行压缩），或者在`Backup List`中选择Job的历史执行程序，选中后点击后面的Download按钮可以下载该执行程序。
- Enable Timeout(s): 可选配置。设置Job的过期时间，单位为秒(s)，过期时间必须在`1s`到`172800s`(2天)的范围内
- Send Notification: 可选配置。用于Job执行`成功`或者`失败`时的邮件通知

> Job Detail  

![Job Detail](http://neg-app-img/MISInternal/DocumentTool/upload_image_1504944664483_.jpg)

在此页面可以查看Job的详细信息，页面上方的按钮可以对`Job`进行相应操作：
- Operate: 可以对`Job`进行`Start`, `Stop`, `Enabled`, `Disabled`等操作，根据`Job`状态的不同所显示的按钮会相应的改变
- Edit: 跳转到编辑Job的页面（运行中的Job不可编辑）
- Clone: 跳转到Clone Job的页面，导入Job的除`Job name`的所有数据
- Logs: 跳转到对应Job的log页面，后面会详细介绍

> Logs 

![Logs](http://neg-app-img/MISInternal/DocumentTool/upload_image_1504944799104_.jpg)

`Type`表示Job的执行结果，默认查询所有类型的Log，From、To表示查询Job log的时间范围
下方的表格中可以查看Job的开始执行时间`StartTime`、 运行时长`Duration`以及在哪台`Server`上运行的等信息，单击某一行展开可以查看Job的输出内容（异常信息、程序输出等）

<h1>Runtime<h1>

![Runtime](http://neg-app-img/MISInternal/DocumentTool/upload_image_1504945327176_.jpg)

此页面展示当前`Runtime`下的所有`Server`信息
点击信息按钮，出现弹出框，显示分配在各`Server`下的所有`Job`信息

![Runtime Job](http://neg-app-img/MISInternal/DocumentTool/upload_image_1504945379726_.jpg)

<h1>Activity<h1>

![Activity](http://neg-app-img/MISInternal/DocumentTool/upload_image_1504945482672_.jpg)

按`Runtime`、`Group`以及`Type`分类查看操作日志

<h1>Manage<h1>

Runtime
---

![Manage Runtime](http://neg-app-img/MISInternal/DocumentTool/upload_image_1504945902021_.jpg)

展示`Runtime`下的`group`

![Add Group](http://neg-app-img/MISInternal/DocumentTool/upload_image_1504945736438_.jpg)

管理Group, Group的`owners`可编辑、删除对应group，管理员可编辑、删除所有group。其余用户只能查看group相关信息，无法创建、删除和编辑，只有管理员能新建group，如需创建Group请联系 BTS Team



# Runtime List

![Runtime Manage](_media/manage_runtime.png)

> Description

- To add a runtime, click the `Add Group` button at the top of the page
- The two icons in the last column of the table are `edit runtime information`, `delete runtime '
PS: Only admin users can add runtime
Only the owners of the runtime can `edit runtime` and `delete runtime`, and delete the runtime only if the current runtime does not include any groups

中：运行时列表

![Runtime Manage](_media/manage_runtime.png)

> 描述

- 点击页面上方`Add Group`按钮来新建runtime
- 列表最后两个图标可以`编辑运行时`和`删除运行时`
PS：只有管理员能新建运行时
只有运行时的所有者能`编辑运行时`和`删除运行时`，并且只有当当前运行时下不包括任何组时才能`删除运行时`

# Add Runtime

![Add Group](_media/add_group.png)

> Description

- `Runtime`: Runtime name
- `Description`: The description of runtime
- `Owners`: Owners of the runtime.If an user is owner of the runtime, this user can edit or delete the runtime, And can also operate all the groups blong to the runtime.
- `Servers`: The servers addresses of runtime.

中：# 新建运行时

![Add Group](_media/add_group.png)

> 描述

- `Runtime`: 运行时名称
- `Description`: 运行时的描述
- `Owners`: 运行时的所有者。如果一个用户是运行时的所有者，那么这个用户就能编辑或者删除这个运行时，并且也能操作属于这个运行时的所有组
- `Servers`: 运行时的服务器地址

# Edit Runtime

![Edit Runtime](_media/edit_runtime.png)

> Description

- Runtime information is consistent with [`adding runtime`](add_runtime.md)

中：# 编辑运行时

![Edit Runtime](_media/edit_runtime.png)

> 描述

各属性与[`添加运行时`](add_runtime.md)一致

# Group List

![Group Manage](_media/manage_group.png)

> Description

- To add a group, click the `Add Group` button at the top of the page
- The two icons in the last column of the table are `edit group information`, `delete group '
PS: Only admin users can add group
Only the owners of the group or the owners of the runtime which the current group blongs to can `edit group` and `delete group`, and `delete group` will delete all tasks in the current group

中：# 组列表

![管理组](_media/manage_group.png)

> 描述

- 点击页面上方`Add Group`按钮来添加组
- 列表最后两个图标可以`编辑组`和`删除组`

PS:只有管理员能添加组
只有组的所有者或者当前组所在运行时的所有者能`编辑组`和`删除组`，并且`删除组`时会删除在当前组里的所有任务

# Add Group

![Add Group](_media/add_group.png)

> Description

- `Runtime`: Runtime that the group belongs to
- `Group`: Group name of the group
- `Owners`: Owners of the group.If an user is owner of the group, this user can edit or delete the group

中：新建组
![新建组](_media/add_group.png)

> 描述

- `Runtime`: 组所在的运行时
- `Group`: 组名
- `Owners`: 组的所有者。如果一个用户是组的所有者，那么这个用户就能编辑或者删除这个组

# Edit Group

![Edit Group](_media/edit_group.png)
> Description

- Group information is consistent with [`adding group`](add_group.md)

中：# 编辑组

![编辑组](_media/edit_group.png)
> 描述

- 各属性与[`添加组`](add_group.md)一致

# User List

*only **Administrator** can use this function*

![User Manage](_media/manage_user.png)

> Description

- To add a user, click the `Add User` button at the top of the page
- The two icons in the last column of the table are `edit user information`, `delete user '

中：# 用户列表

*只有 **管理员** 能看到用户的侧边栏选项*

![管理用户](_media/manage_user.png)

> 描述

- 点击页面顶部的`Add User`按钮来新建用户
- 列表最后两个图标可以`编辑用户`和`删除用户`


# Add User

![Add User](_media/add_user.png)

> Description

- `UserID`: 4-6-bit string for user login, such as zs18
- `FullName`: Full name of the user.
- `Department`: Optional
- `Email`: Optional, contact email
- `Own administrator privileges`: `administrator 'permissions

中：# 新建用户

![新建用户](_media/add_user.png)

> 描述

- `UserID`: 4-6位字符串, 如 zs18
- `FullName`: 用户的全名
- `Department`: 可选，部门
- `Email`: 可选, 邮箱地址
- `Own administrator privileges`: `管理员 '权限

# Edit User

![Edit User](_media/edit_user.png)

中：# 编辑用户

![编辑用户](_media/edit_user.png)

# System Config

![System Config](_media/system_config.png)

> Description

There are three configuration items, `DB Address`, `Center Address` and `Website Address`.
- `Database`: The name of db
- `Host`: The link address of db
- `Auth`: The infomation of auth
- `Options`: The options of moogodb 

- `Center Address`: The IP address of cloudtask center

- `Website Address`: The address of cloudtask website

中：# 系统配置

![系统配置](_media/system_config.png)

> 描述

有 `DB Address`, `Center Address` 和 `Website Address`三个配置项
- `Database`: db的名字
- `Host`: db的地址
- `Auth`: 作者的相关信息
- `Options`: mongodb其他配置项

- `Center Address`: cloudtask center的IP地址

- `Website Address`: cloudtask的站点地址
