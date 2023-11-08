import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import ProgressMeta from '../progress/meta';

const UploadMeta: IPublicTypeComponentMetadata = {
  componentName: 'Upload',
  title: '上传',
  group: '原子组件',
  category: '数据录入 Data Entry',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Upload',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'accept',
            'zh-CN': 'accept'
          }
        },
        name: 'accept',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'action',
            'zh-CN': 'action'
          }
        },
        name: 'action',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'FunctionSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'beforeUpload',
            'zh-CN': 'beforeUpload'
          }
        },
        name: 'beforeUpload',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'customRequest',
            'zh-CN': 'customRequest'
          }
        },
        name: 'customRequest',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'data',
            'zh-CN': 'data'
          }
        },
        name: 'data',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'defaultFileList',
            'zh-CN': 'defaultFileList'
          }
        },
        name: 'defaultFileList'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'directory',
            'zh-CN': 'directory'
          }
        },
        name: 'directory',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'disabled',
            'zh-CN': 'disabled'
          }
        },
        name: 'disabled',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'fileList',
            'zh-CN': 'fileList'
          }
        },
        name: 'fileList'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'headers',
            'zh-CN': 'headers'
          }
        },
        name: 'headers'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'iconRender',
            'zh-CN': 'iconRender'
          }
        },
        name: 'iconRender',
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            params: ['file', 'listType']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'isImageUrl',
            'zh-CN': 'isImageUrl'
          }
        },
        name: 'isImageUrl',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'itemRender',
            'zh-CN': 'itemRender'
          }
        },
        name: 'itemRender',
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            params: ['originNode', 'file', 'fileList', 'actions']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'listType',
            'zh-CN': 'listType'
          }
        },
        name: 'listType',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: 'text',
                value: 'text'
              },
              {
                label: 'picture',
                value: 'picture'
              },
              {
                label: 'picture-card',
                value: 'picture-card'
              },
              {
                label: 'picture-circle',
                value: 'picture-circle'
              }
            ],
            options: [
              {
                label: 'text',
                value: 'text'
              },
              {
                label: 'picture',
                value: 'picture'
              },
              {
                label: 'picture-card',
                value: 'picture-card'
              },
              {
                label: 'picture-circle',
                value: 'picture-circle'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'maxCount',
            'zh-CN': 'maxCount'
          }
        },
        name: 'maxCount',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'method',
            'zh-CN': 'method'
          }
        },
        name: 'method',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: 'POST',
                value: 'POST'
              },
              {
                label: 'PUT',
                value: 'PUT'
              },
              {
                label: 'PATCH',
                value: 'PATCH'
              }
            ],
            options: [
              {
                label: 'POST',
                value: 'POST'
              },
              {
                label: 'PUT',
                value: 'PUT'
              },
              {
                label: 'PATCH',
                value: 'PATCH'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'multiple',
            'zh-CN': 'multiple'
          }
        },
        name: 'multiple',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'name',
            'zh-CN': 'name'
          }
        },
        name: 'name',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onChange',
            'zh-CN': 'onChange'
          }
        },
        name: 'onChange',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onDownload',
            'zh-CN': 'onDownload'
          }
        },
        name: 'onDownload',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onDrop',
            'zh-CN': 'onDrop'
          }
        },
        name: 'onDrop',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onPreview',
            'zh-CN': 'onPreview'
          }
        },
        name: 'onPreview',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onRemove',
            'zh-CN': 'onRemove'
          }
        },
        name: 'onRemove',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'openFileDialogOnClick',
            'zh-CN': 'openFileDialogOnClick'
          }
        },
        name: 'openFileDialogOnClick',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'previewFile',
            'zh-CN': 'previewFile'
          }
        },
        name: 'previewFile',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'progress',
            'zh-CN': 'progress'
          }
        },
        name: 'progress',
        setter: {
          componentName: 'ObjectSetter',
          condition: () => false,
          props: {
            config: {
              items: ProgressMeta.configure!['props']
            }
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showUploadList',
            'zh-CN': 'showUploadList'
          }
        },
        name: 'showUploadList',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              'BoolSetter',
              {
                componentName: 'ObjectSetter',
                condition: () => false,
                props: {
                  config: {
                    items: [
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'showPreviewIcon',
                            'zh-CN': 'showPreviewIcon'
                          }
                        },
                        name: 'showPreviewIcon',
                        setter: 'BoolSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'showDownloadIcon',
                            'zh-CN': 'showDownloadIcon'
                          }
                        },
                        name: 'showDownloadIcon',
                        setter: 'BoolSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'showRemoveIcon',
                            'zh-CN': 'showRemoveIcon'
                          }
                        },
                        name: 'showRemoveIcon',
                        setter: 'BoolSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'previewIcon',
                            'zh-CN': 'previewIcon'
                          }
                        },
                        name: 'previewIcon',
                        setter: {
                          componentName: 'SlotSetter',
                          initialValue: {
                            type: 'JSSlot',
                            params: ['file']
                          }
                        }
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'downloadIcon',
                            'zh-CN': 'downloadIcon'
                          }
                        },
                        name: 'downloadIcon',
                        setter: {
                          componentName: 'SlotSetter',
                          initialValue: {
                            type: 'JSSlot',
                            params: ['file']
                          }
                        }
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'removeIcon',
                            'zh-CN': 'removeIcon'
                          }
                        },
                        name: 'removeIcon',
                        setter: {
                          componentName: 'SlotSetter',
                          initialValue: {
                            type: 'JSSlot',
                            params: ['file']
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'withCredentials',
            'zh-CN': 'withCredentials'
          }
        },
        name: 'withCredentials',
        setter: 'BoolSetter'
      }
    ],
    supports: {
      className: true,
      style: true
    },
    component: {
      isContainer: true
    }
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '上传',
    screenshot: '',
    schema: {
      componentName: 'Upload',
      props: {}
    }
  }
];

export default {
  ...UploadMeta,
  snippets
};
