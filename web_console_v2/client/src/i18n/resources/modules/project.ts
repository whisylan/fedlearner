import { separateLng } from 'i18n/helpers';

const project = {
  no_result: { zh: '暂无项目', en: 'No project yet' },
  create: { zh: '创建项目', en: 'Create project' },
  describe: {
    zh:
      '提供项目的新增和管理功能，支持对项目进行新增、编辑、查询、删除功能，可查看一个项目下的联邦工作流任务列表、模型列表、API列表，一个项目下可创建多个联邦工作流任务。',
    en:
      'Provide project addition and management functions, support adding, editing, querying, and deleting projects. You can view the federal workflow task list, model list, and API list under a project. Multiple federal tasks can be created under a project Stream tasks.',
  },
  search_placeholder: {
    zh: '输入项目名称关键词搜索',
    en: 'Enter the project name or keyword to search',
  },
  display_card: { zh: '卡片视图', en: 'Card view' },
  display_list: { zh: '表格视图', en: 'Table view' },
  connection_status_success: { zh: '成功', en: 'Success' },
  connection_status_waiting: { zh: '待检查', en: 'To be checked' },
  connection_status_checking: { zh: '检查中', en: 'Checking' },
  connection_status_failed: { zh: '失败', en: 'Failed' },
  connection_status_check_failed: { zh: '请重新检查' },
  action_edit: { zh: '编辑', en: 'Edit' },
  action_detail: { zh: '详情', en: 'Detail' },
  check_connection: { zh: '检查连接', en: 'Check connection' },
  create_work_flow: { zh: '创建工作流', en: 'Create a workflow' },
  connection_status: { zh: '连接状态', en: 'Connection status' },
  workflow_number: { zh: '工作流任务数量', en: 'Total workflows' },
  name: { zh: '项目名称', en: 'Project name' },
  participant_name: { zh: '合作伙伴名称', en: 'Participant name' },
  participant_url: { zh: '合作伙伴节点地址', en: 'Participant node address' },
  participant_domain: { zh: '合作伙伴泛域名', en: "Participant participant's domain" },
  selft_domain: { zh: '本侧泛域名', en: 'Self domain name' },
  remarks: { zh: '说明备注', en: 'Remarks' },
  name_placeholder: { zh: '请填写项目名称（两侧必须相同）', en: 'Please enter name' },
  participant_name_placeholder: { zh: '请填写合作伙伴名称', en: 'Please enter participant name' },

  participant_domain_placeholder: { zh: '请填写泛域名', en: 'Please enter domain' },
  remarks_placeholder: { zh: '请填写说明备注', en: 'Please enter remarks' },
  name_message: { zh: '请填写项目名称', en: 'Please enter name' },
  participant_name_message: { zh: '请填写合作伙伴名称', en: 'Please enter participant name' },
  participant_url_message: {
    zh: '请填写合作伙伴节点地址',
    en: 'Please enter participant node address',
  },
  edit: { zh: '编辑项目', en: 'Edit project' },
  workflow: { zh: '工作流任务', en: 'Workflow task' },
  mix_dataset: { zh: '融合数据集', en: 'Fusion data set' },
  model: { zh: '模型', en: 'Model' },
  creator: { zh: '创建者', en: 'Creator' },
  creat_time: { zh: '创建时间', en: 'Creation time' },
  add_parameters: { zh: '添加参数', en: 'Add parameters' },
  env_path_config: { zh: '展开环境变量配置', en: 'Environment variable configuration' },
  show_env_path_config: { zh: '环境变量参数配置', en: 'Expand environment variable configuration' },
  hide_env_path_config: {
    zh: '收起环境变量配置',
    en: 'Collapse environment variable configuration',
  },
  basic_information: { zh: '基本信息', en: 'Basic Information' },
  participant_information: { zh: '合作伙伴信息', en: 'Participant information' },
  upload_certificate: { zh: '上传证书', en: 'Upload certificate' },
  backend_config_certificate: { zh: '后台手动配置', en: 'Manually configure' },
  upload_certificate_placeholder: {
    zh: '请上传gz格式文件，大小不超过20MB',
    en: 'Please upload a file in gz format, no more than 20MB in size',
  },
  upload_certificate_message: { zh: '请上传证书', en: 'Please upload the certificate' },
  drag_to_upload: { zh: '拖拽到这里进行上传', en: 'Drag and drop here to upload' },
  create_success: { zh: '创建项目成功', en: 'Create project succeed!' },
  edit_success: { zh: '编辑项目成功', en: 'Edit project succeed!' },
  msg_var_name: { zh: '请输入变量名' },
  msg_var_value: { zh: '请输入变量值' },
  msg_sure_2_cancel: { zh: '确认取消？' },
  msg_effect_of_cancel: { zh: '取消后，已填写内容将不再保留' },
  msg_domian_required: { zh: '请补全泛域名' },
  msg_domian_invalid: { zh: '只允许小写英文字母/中划线/数字，请检查' },
  msg_ip_addr_invalid: { zh: 'IP 地址不合法，请检查' },
  msg_no_var_yet: { zh: '当前没有环境变量参数，请添加' },

  placeholder_domain_name: { zh: '泛域名间值' },
  placeholder_participant_url: {
    zh: '合作伙伴 IPv4/v6 地址（包含端口）',
    en: 'IP(v4 or v6) address with Port',
  },
};

export default separateLng(project);
