import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

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
            setters: ['StringSetter', 'FunctionSetter', 'FunctionSetter']
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
            'en-US': 'capture',
            'zh-CN': 'capture'
          }
        },
        name: 'capture',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'BoolSetter']
          }
        }
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
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'ObjectSetter',
                condition: () => false,
                props: {
                  config: {
                    extraSetter: {
                      componentName: 'ObjectSetter',
                      condition: () => false,
                      props: {
                        config: {
                          extraSetter: {
                            componentName: 'MixedSetter',
                            props: {}
                          }
                        }
                      }
                    }
                  }
                }
              },
              'FunctionSetter'
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'defaultFileList',
            'zh-CN': 'defaultFileList'
          }
        },
        name: 'defaultFileList',
        setter: {
          componentName: 'ArraySetter',
          condition: () => false,
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              condition: () => false,
              props: {
                config: {
                  items: [
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'T',
                          'zh-CN': 'T'
                        }
                      },
                      name: 'T',
                      setter: {
                        componentName: 'MixedSetter',
                        props: {}
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'uid',
                          'zh-CN': 'uid'
                        }
                      },
                      name: 'uid',
                      setter: 'StringSetter'
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'size',
                          'zh-CN': 'size'
                        }
                      },
                      name: 'size',
                      setter: 'NumberSetter'
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
                          'en-US': 'fileName',
                          'zh-CN': 'fileName'
                        }
                      },
                      name: 'fileName',
                      setter: 'StringSetter'
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'lastModified',
                          'zh-CN': 'lastModified'
                        }
                      },
                      name: 'lastModified',
                      setter: 'NumberSetter'
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'lastModifiedDate',
                          'zh-CN': 'lastModifiedDate'
                        }
                      },
                      name: 'lastModifiedDate',
                      setter: {
                        componentName: 'ObjectSetter',
                        condition: () => false,
                        props: {
                          config: {
                            extraSetter: {
                              componentName: 'MixedSetter',
                              props: {}
                            }
                          }
                        }
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'url',
                          'zh-CN': 'url'
                        }
                      },
                      name: 'url',
                      setter: 'StringSetter'
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'status',
                          'zh-CN': 'status'
                        }
                      },
                      name: 'status',
                      setter: {
                        componentName: 'SelectSetter',
                        props: {
                          dataSource: [
                            {
                              label: 'error',
                              value: 'error'
                            },
                            {
                              label: 'done',
                              value: 'done'
                            },
                            {
                              label: 'uploading',
                              value: 'uploading'
                            },
                            {
                              label: 'removed',
                              value: 'removed'
                            }
                          ],
                          options: [
                            {
                              label: 'error',
                              value: 'error'
                            },
                            {
                              label: 'done',
                              value: 'done'
                            },
                            {
                              label: 'uploading',
                              value: 'uploading'
                            },
                            {
                              label: 'removed',
                              value: 'removed'
                            }
                          ]
                        }
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'percent',
                          'zh-CN': 'percent'
                        }
                      },
                      name: 'percent',
                      setter: 'NumberSetter'
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'thumbUrl',
                          'zh-CN': 'thumbUrl'
                        }
                      },
                      name: 'thumbUrl',
                      setter: 'StringSetter'
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'crossOrigin',
                          'zh-CN': 'crossOrigin'
                        }
                      },
                      name: 'crossOrigin',
                      setter: {
                        componentName: 'RadioGroupSetter',
                        condition: () => false,
                        props: {
                          dataSource: [
                            {
                              label: '',
                              value: ''
                            },
                            {
                              label: 'anonymous',
                              value: 'anonymous'
                            },
                            {
                              label: 'use-credentials',
                              value: 'use-credentials'
                            }
                          ],
                          options: [
                            {
                              label: '',
                              value: ''
                            },
                            {
                              label: 'anonymous',
                              value: 'anonymous'
                            },
                            {
                              label: 'use-credentials',
                              value: 'use-credentials'
                            }
                          ]
                        }
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'originFileObj',
                          'zh-CN': 'originFileObj'
                        }
                      },
                      name: 'originFileObj',
                      setter: {
                        componentName: 'ObjectSetter',
                        condition: () => false,
                        props: {
                          config: {
                            items: [
                              {
                                title: {
                                  label: {
                                    type: 'i18n',
                                    'en-US': 'lastModifiedDate',
                                    'zh-CN': 'lastModifiedDate'
                                  }
                                },
                                name: 'lastModifiedDate',
                                setter: {
                                  componentName: 'ObjectSetter',
                                  condition: () => false,
                                  props: {
                                    config: {
                                      extraSetter: {
                                        componentName: 'MixedSetter',
                                        props: {}
                                      }
                                    }
                                  }
                                }
                              }
                            ]
                          }
                        }
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'response',
                          'zh-CN': 'response'
                        }
                      },
                      name: 'response',
                      setter: {
                        componentName: 'ObjectSetter',
                        condition: () => false,
                        props: {
                          config: {
                            extraSetter: {
                              componentName: 'MixedSetter',
                              props: {}
                            }
                          }
                        }
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'error',
                          'zh-CN': 'error'
                        }
                      },
                      name: 'error',
                      setter: {
                        componentName: 'MixedSetter',
                        props: {}
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'linkProps',
                          'zh-CN': 'linkProps'
                        }
                      },
                      name: 'linkProps',
                      setter: {
                        componentName: 'MixedSetter',
                        props: {}
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'type',
                          'zh-CN': 'type'
                        }
                      },
                      name: 'type',
                      setter: 'StringSetter'
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'xhr',
                          'zh-CN': 'xhr'
                        }
                      },
                      name: 'xhr',
                      setter: {
                        componentName: 'ObjectSetter',
                        condition: () => false,
                        props: {
                          config: {
                            extraSetter: {
                              componentName: 'MixedSetter',
                              props: {}
                            }
                          }
                        }
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'preview',
                          'zh-CN': 'preview'
                        }
                      },
                      name: 'preview',
                      setter: 'StringSetter'
                    }
                  ]
                }
              }
            }
          }
        }
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
        name: 'fileList',
        setter: {
          componentName: 'ArraySetter',
          condition: () => false,
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              condition: () => false,
              props: {
                config: {
                  items: [
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'T',
                          'zh-CN': 'T'
                        }
                      },
                      name: 'T',
                      setter: {
                        componentName: 'MixedSetter',
                        props: {}
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'uid',
                          'zh-CN': 'uid'
                        }
                      },
                      name: 'uid',
                      setter: 'StringSetter'
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'size',
                          'zh-CN': 'size'
                        }
                      },
                      name: 'size',
                      setter: 'NumberSetter'
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
                          'en-US': 'fileName',
                          'zh-CN': 'fileName'
                        }
                      },
                      name: 'fileName',
                      setter: 'StringSetter'
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'lastModified',
                          'zh-CN': 'lastModified'
                        }
                      },
                      name: 'lastModified',
                      setter: 'NumberSetter'
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'lastModifiedDate',
                          'zh-CN': 'lastModifiedDate'
                        }
                      },
                      name: 'lastModifiedDate',
                      setter: {
                        componentName: 'ObjectSetter',
                        condition: () => false,
                        props: {
                          config: {
                            extraSetter: {
                              componentName: 'MixedSetter',
                              props: {}
                            }
                          }
                        }
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'url',
                          'zh-CN': 'url'
                        }
                      },
                      name: 'url',
                      setter: 'StringSetter'
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'status',
                          'zh-CN': 'status'
                        }
                      },
                      name: 'status',
                      setter: {
                        componentName: 'SelectSetter',
                        props: {
                          dataSource: [
                            {
                              label: 'error',
                              value: 'error'
                            },
                            {
                              label: 'done',
                              value: 'done'
                            },
                            {
                              label: 'uploading',
                              value: 'uploading'
                            },
                            {
                              label: 'removed',
                              value: 'removed'
                            }
                          ],
                          options: [
                            {
                              label: 'error',
                              value: 'error'
                            },
                            {
                              label: 'done',
                              value: 'done'
                            },
                            {
                              label: 'uploading',
                              value: 'uploading'
                            },
                            {
                              label: 'removed',
                              value: 'removed'
                            }
                          ]
                        }
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'percent',
                          'zh-CN': 'percent'
                        }
                      },
                      name: 'percent',
                      setter: 'NumberSetter'
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'thumbUrl',
                          'zh-CN': 'thumbUrl'
                        }
                      },
                      name: 'thumbUrl',
                      setter: 'StringSetter'
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'crossOrigin',
                          'zh-CN': 'crossOrigin'
                        }
                      },
                      name: 'crossOrigin',
                      setter: {
                        componentName: 'RadioGroupSetter',
                        condition: () => false,
                        props: {
                          dataSource: [
                            {
                              label: '',
                              value: ''
                            },
                            {
                              label: 'anonymous',
                              value: 'anonymous'
                            },
                            {
                              label: 'use-credentials',
                              value: 'use-credentials'
                            }
                          ],
                          options: [
                            {
                              label: '',
                              value: ''
                            },
                            {
                              label: 'anonymous',
                              value: 'anonymous'
                            },
                            {
                              label: 'use-credentials',
                              value: 'use-credentials'
                            }
                          ]
                        }
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'originFileObj',
                          'zh-CN': 'originFileObj'
                        }
                      },
                      name: 'originFileObj',
                      setter: {
                        componentName: 'ObjectSetter',
                        condition: () => false,
                        props: {
                          config: {
                            items: [
                              {
                                title: {
                                  label: {
                                    type: 'i18n',
                                    'en-US': 'lastModifiedDate',
                                    'zh-CN': 'lastModifiedDate'
                                  }
                                },
                                name: 'lastModifiedDate',
                                setter: {
                                  componentName: 'ObjectSetter',
                                  condition: () => false,
                                  props: {
                                    config: {
                                      extraSetter: {
                                        componentName: 'MixedSetter',
                                        props: {}
                                      }
                                    }
                                  }
                                }
                              }
                            ]
                          }
                        }
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'response',
                          'zh-CN': 'response'
                        }
                      },
                      name: 'response',
                      setter: {
                        componentName: 'ObjectSetter',
                        condition: () => false,
                        props: {
                          config: {
                            extraSetter: {
                              componentName: 'MixedSetter',
                              props: {}
                            }
                          }
                        }
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'error',
                          'zh-CN': 'error'
                        }
                      },
                      name: 'error',
                      setter: {
                        componentName: 'MixedSetter',
                        props: {}
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'linkProps',
                          'zh-CN': 'linkProps'
                        }
                      },
                      name: 'linkProps',
                      setter: {
                        componentName: 'MixedSetter',
                        props: {}
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'type',
                          'zh-CN': 'type'
                        }
                      },
                      name: 'type',
                      setter: 'StringSetter'
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'xhr',
                          'zh-CN': 'xhr'
                        }
                      },
                      name: 'xhr',
                      setter: {
                        componentName: 'ObjectSetter',
                        condition: () => false,
                        props: {
                          config: {
                            extraSetter: {
                              componentName: 'MixedSetter',
                              props: {}
                            }
                          }
                        }
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'preview',
                          'zh-CN': 'preview'
                        }
                      },
                      name: 'preview',
                      setter: 'StringSetter'
                    }
                  ]
                }
              }
            }
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'headers',
            'zh-CN': 'headers'
          }
        },
        name: 'headers',
        setter: {
          componentName: 'ObjectSetter',
          condition: () => false,
          props: {
            config: {
              extraSetter: 'StringSetter'
            }
          }
        }
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
        setter: 'FunctionSetter'
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
        setter: 'FunctionSetter'
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
            'en-US': 'locale',
            'zh-CN': 'locale'
          }
        },
        name: 'locale',
        setter: {
          componentName: 'ObjectSetter',
          condition: () => false,
          props: {
            config: {
              items: [
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'uploading',
                      'zh-CN': 'uploading'
                    }
                  },
                  name: 'uploading',
                  setter: 'StringSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'removeFile',
                      'zh-CN': 'removeFile'
                    }
                  },
                  name: 'removeFile',
                  setter: 'StringSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'downloadFile',
                      'zh-CN': 'downloadFile'
                    }
                  },
                  name: 'downloadFile',
                  setter: 'StringSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'uploadError',
                      'zh-CN': 'uploadError'
                    }
                  },
                  name: 'uploadError',
                  setter: 'StringSetter'
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
                  setter: 'StringSetter'
                }
              ]
            }
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
              },
              {
                label: 'post',
                value: 'post'
              },
              {
                label: 'put',
                value: 'put'
              },
              {
                label: 'patch',
                value: 'patch'
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
              },
              {
                label: 'post',
                value: 'post'
              },
              {
                label: 'put',
                value: 'put'
              },
              {
                label: 'patch',
                value: 'patch'
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
              extraSetter: {
                componentName: 'MixedSetter',
                props: {}
              }
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
                            'en-US': 'T',
                            'zh-CN': 'T'
                          }
                        },
                        name: 'T',
                        setter: {
                          componentName: 'MixedSetter',
                          props: {}
                        }
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
                            'en-US': 'removeIcon',
                            'zh-CN': 'removeIcon'
                          }
                        },
                        name: 'removeIcon',
                        setter: {
                          componentName: 'MixedSetter',
                          props: {
                            setters: [
                              'StringSetter',
                              'NumberSetter',
                              'BoolSetter',
                              {
                                componentName: 'ObjectSetter',
                                condition: () => false,
                                props: {
                                  config: {
                                    extraSetter: {
                                      componentName: 'MixedSetter',
                                      props: {}
                                    }
                                  }
                                }
                              },
                              'FunctionSetter'
                            ]
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
                          componentName: 'MixedSetter',
                          props: {
                            setters: [
                              'StringSetter',
                              'NumberSetter',
                              'BoolSetter',
                              {
                                componentName: 'ObjectSetter',
                                condition: () => false,
                                props: {
                                  config: {
                                    extraSetter: {
                                      componentName: 'MixedSetter',
                                      props: {}
                                    }
                                  }
                                }
                              },
                              'FunctionSetter'
                            ]
                          }
                        }
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
                          componentName: 'MixedSetter',
                          props: {
                            setters: [
                              'StringSetter',
                              'NumberSetter',
                              'BoolSetter',
                              {
                                componentName: 'ObjectSetter',
                                condition: () => false,
                                props: {
                                  config: {
                                    extraSetter: {
                                      componentName: 'MixedSetter',
                                      props: {}
                                    }
                                  }
                                }
                              },
                              'FunctionSetter'
                            ]
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
            'en-US': 'supportServerRender',
            'zh-CN': 'supportServerRender'
          }
        },
        name: 'supportServerRender',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'type',
            'zh-CN': 'type'
          }
        },
        name: 'type',
        setter: {
          componentName: 'RadioGroupSetter',
          condition: () => false,
          props: {
            dataSource: [
              {
                label: 'drag',
                value: 'drag'
              },
              {
                label: 'select',
                value: 'select'
              }
            ],
            options: [
              {
                label: 'drag',
                value: 'drag'
              },
              {
                label: 'select',
                value: 'select'
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
      style: true,
      events: [
        {
          name: 'onChange'
        },
        {
          name: 'onPreview'
        },
        {
          name: 'onDownload'
        },
        {
          name: 'onRemove'
        }
      ]
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
