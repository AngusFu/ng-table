export default `config:
  base: /api
  listPath: /server/list
  exportPath: /server/export
  method: POST
  rowKey: null
  maxHeight: 500px
  showToolbar: true
  showSelection: true
  pageSizeStrategy: global
actions:
  - key: '1'
    label: '1'
  - key: '2'
    label: '2'
  - key: '3'
    label: '3'
columns:
  - key: uuid
    title: uuid
    visibleByDefault: true
    alwaysVisible: true
    sortable: custom
    useColumnCopy: true
    useCellCopy: true
    width: 260
  - key: idc
    title: 机房
    alwaysVisible: false
    visibleByDefault: false
    sortable: custom
    useColumnCopy: true
    useCellCopy: true
    width: 120
  - key: region
    title: 集群
    width: 120
    sortable: custom
  - key: hostname
    title: 主机名
    width: 180
    sortable: custom
  - key: instance_name
    title: 名称
    width: 190
    sortable: custom
  - key: state
    title: 状态
    width: 120
    sortable: custom
  - key: hypervisor_hostname
    title: 宿主机
    width: 230
    sortable: custom
  - key: inip
    title: 内网IP
    width: 230
    sortable: custom
  - key: outip
    title: 外网IP
    width: 180
    sortable: custom
  - key: cpu
    title: CPU
    width: 120
    sortable: custom
  - key: memory
    title: 内存
    width: 120
    sortable: custom
  - key: disk
    title: 系统盘
    width: 110
    sortable: custom
  - key: disk_type
    title: 系统盘类型
    width: 140
    sortable: custom
  - key: volume
    title: 数据盘
    width: 110
    sortable: custom
  - key: config
    title: 配置
    width: 250
    sortable: custom
  - key: ag_name
    title: aggregate
    width: 160
    sortable: custom
  - key: pool
    title: ceph pool
    width: 130
    sortable: custom
  - key: download_bandwidth
    title: 下载带宽
    width: 110
    sortable: custom
  - key: upload_bandwidth
    title: 上传带宽
    width: 130
    sortable: custom
  - key: image
    title: 镜像
    width: 160
    sortable: custom
  - key: flavor
    title: 套餐
    width: 300
    sortable: custom
  - key: network
    title: 网络
    width: 320
    sortable: custom
  - key: overratio
    title: CPU超配比
    width: 230
    sortable: custom
  - key: backup_enable
    title: 异地备份
    width: 150
    sortable: custom
  - key: network_billing_type
    title: 带宽计费方式
    width: 130
  - key: server_billing_type
    title: 虚机计费方式
    width: 170
  - key: operator_type
    title: 运营商路线
    width: 160
  - key: user_qid
    title: 账号QID
    width: 230
    sortable: custom
  - key: user_id
    title: 账号ID
    width: 300
    sortable: custom
  - key: user_name
    title: 账号名称
    width: 120
    sortable: custom
  - key: user_type
    title: 账号类型
    width: 130
    sortable: custom
  - key: tenant_id
    title: 项目ID
    width: 250
    sortable: custom
  - key: tenant_name
    title: 项目名称
    width: 160
    sortable: custom
  - key: created_at
    title: 创建时间
    width: 170
    sortable: custom
  - key: deleted_at
    title: 删除时间
    width: 170
    sortable: custom
  - key: recover_at
    title: 恢复时间
    width: 180
    sortable: custom
`;
