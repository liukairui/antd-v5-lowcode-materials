import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const UploadMeta: IPublicTypeComponentMetadata = {
  componentName: 'Upload',
  title: 'Upload',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Upload',
    main: 'src/index.tsx',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
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
          },
          initialValue: undefined
        }
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
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
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
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
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
                      setter: {
                        componentName: 'StringSetter',
                        initialValue: undefined
                      }
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
                      setter: {
                        componentName: 'NumberSetter',
                        initialValue: undefined
                      }
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
                      setter: {
                        componentName: 'StringSetter',
                        initialValue: undefined
                      }
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
                      setter: {
                        componentName: 'StringSetter',
                        initialValue: undefined
                      }
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
                      setter: {
                        componentName: 'NumberSetter',
                        initialValue: undefined
                      }
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
                        props: {
                          config: {
                            extraSetter: {
                              componentName: 'MixedSetter',
                              props: {}
                            }
                          }
                        },
                        initialValue: undefined
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
                      setter: {
                        componentName: 'StringSetter',
                        initialValue: undefined
                      }
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
                        },
                        initialValue: undefined
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
                      setter: {
                        componentName: 'NumberSetter',
                        initialValue: undefined
                      }
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
                      setter: {
                        componentName: 'StringSetter',
                        initialValue: undefined
                      }
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
                        },
                        initialValue: undefined
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
                                  props: {
                                    config: {
                                      extraSetter: {
                                        componentName: 'MixedSetter',
                                        props: {}
                                      }
                                    }
                                  },
                                  initialValue: undefined
                                }
                              }
                            ],
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
                          'en-US': 'response',
                          'zh-CN': 'response'
                        }
                      },
                      name: 'response',
                      setter: {
                        componentName: 'ObjectSetter',
                        props: {
                          config: {
                            extraSetter: {
                              componentName: 'MixedSetter',
                              props: {}
                            }
                          }
                        },
                        initialValue: undefined
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
                      setter: {
                        componentName: 'StringSetter',
                        initialValue: undefined
                      }
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
                        props: {
                          config: {
                            extraSetter: {
                              componentName: 'MixedSetter',
                              props: {}
                            }
                          }
                        },
                        initialValue: undefined
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
                      setter: {
                        componentName: 'StringSetter',
                        initialValue: undefined
                      }
                    }
                  ],
                  extraSetter: {
                    componentName: 'MixedSetter',
                    props: {}
                  }
                }
              }
            }
          },
          initialValue: undefined
        }
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
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
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
                      setter: {
                        componentName: 'StringSetter',
                        initialValue: undefined
                      }
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
                      setter: {
                        componentName: 'NumberSetter',
                        initialValue: undefined
                      }
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
                      setter: {
                        componentName: 'StringSetter',
                        initialValue: undefined
                      }
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
                      setter: {
                        componentName: 'StringSetter',
                        initialValue: undefined
                      }
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
                      setter: {
                        componentName: 'NumberSetter',
                        initialValue: undefined
                      }
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
                        props: {
                          config: {
                            extraSetter: {
                              componentName: 'MixedSetter',
                              props: {}
                            }
                          }
                        },
                        initialValue: undefined
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
                      setter: {
                        componentName: 'StringSetter',
                        initialValue: undefined
                      }
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
                        },
                        initialValue: undefined
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
                      setter: {
                        componentName: 'NumberSetter',
                        initialValue: undefined
                      }
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
                      setter: {
                        componentName: 'StringSetter',
                        initialValue: undefined
                      }
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
                        },
                        initialValue: undefined
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
                                  props: {
                                    config: {
                                      extraSetter: {
                                        componentName: 'MixedSetter',
                                        props: {}
                                      }
                                    }
                                  },
                                  initialValue: undefined
                                }
                              }
                            ],
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
                          'en-US': 'response',
                          'zh-CN': 'response'
                        }
                      },
                      name: 'response',
                      setter: {
                        componentName: 'ObjectSetter',
                        props: {
                          config: {
                            extraSetter: {
                              componentName: 'MixedSetter',
                              props: {}
                            }
                          }
                        },
                        initialValue: undefined
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
                      setter: {
                        componentName: 'StringSetter',
                        initialValue: undefined
                      }
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
                        props: {
                          config: {
                            extraSetter: {
                              componentName: 'MixedSetter',
                              props: {}
                            }
                          }
                        },
                        initialValue: undefined
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
                      setter: {
                        componentName: 'StringSetter',
                        initialValue: undefined
                      }
                    }
                  ],
                  extraSetter: {
                    componentName: 'MixedSetter',
                    props: {}
                  }
                }
              }
            }
          },
          initialValue: undefined
        }
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
            setters: [
              {
                componentName: 'StringSetter',
                initialValue: undefined
              },
              {
                componentName: 'FunctionSetter'
              },
              {
                componentName: 'FunctionSetter'
              }
            ]
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
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
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
                props: {
                  config: {
                    extraSetter: {
                      componentName: 'ObjectSetter',
                      props: {
                        config: {
                          extraSetter: {
                            componentName: 'MixedSetter',
                            props: {}
                          }
                        }
                      },
                      initialValue: undefined
                    }
                  }
                },
                initialValue: undefined
              },
              {
                componentName: 'FunctionSetter'
              }
            ]
          }
        }
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
          },
          initialValue: undefined
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
          props: {
            config: {
              extraSetter: {
                componentName: 'StringSetter',
                initialValue: undefined
              }
            }
          },
          initialValue: undefined
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
              {
                componentName: 'BoolSetter',
                initialValue: undefined
              },
              {
                componentName: 'ObjectSetter',
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
                        setter: {
                          componentName: 'BoolSetter',
                          initialValue: undefined
                        }
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
                        setter: {
                          componentName: 'BoolSetter',
                          initialValue: undefined
                        }
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
                        setter: {
                          componentName: 'BoolSetter',
                          initialValue: undefined
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
                          componentName: 'MixedSetter',
                          props: {
                            setters: [
                              {
                                componentName: 'StringSetter',
                                initialValue: undefined
                              },
                              {
                                componentName: 'NumberSetter',
                                initialValue: undefined
                              },
                              {
                                componentName: 'BoolSetter',
                                initialValue: undefined
                              },
                              {
                                componentName: 'ObjectSetter',
                                props: {
                                  config: {
                                    extraSetter: {
                                      componentName: 'MixedSetter',
                                      props: {}
                                    }
                                  }
                                },
                                initialValue: undefined
                              },
                              {
                                componentName: 'FunctionSetter'
                              }
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
                              {
                                componentName: 'StringSetter',
                                initialValue: undefined
                              },
                              {
                                componentName: 'NumberSetter',
                                initialValue: undefined
                              },
                              {
                                componentName: 'BoolSetter',
                                initialValue: undefined
                              },
                              {
                                componentName: 'ObjectSetter',
                                props: {
                                  config: {
                                    extraSetter: {
                                      componentName: 'MixedSetter',
                                      props: {}
                                    }
                                  }
                                },
                                initialValue: undefined
                              },
                              {
                                componentName: 'FunctionSetter'
                              }
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
                              {
                                componentName: 'StringSetter',
                                initialValue: undefined
                              },
                              {
                                componentName: 'NumberSetter',
                                initialValue: undefined
                              },
                              {
                                componentName: 'BoolSetter',
                                initialValue: undefined
                              },
                              {
                                componentName: 'ObjectSetter',
                                props: {
                                  config: {
                                    extraSetter: {
                                      componentName: 'MixedSetter',
                                      props: {}
                                    }
                                  }
                                },
                                initialValue: undefined
                              },
                              {
                                componentName: 'FunctionSetter'
                              }
                            ]
                          }
                        }
                      }
                    ],
                    extraSetter: {
                      componentName: 'MixedSetter',
                      props: {}
                    }
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
            'en-US': 'multiple',
            'zh-CN': 'multiple'
          }
        },
        name: 'multiple',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'accept',
            'zh-CN': 'accept'
          }
        },
        name: 'accept',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
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
        setter: {
          componentName: 'FunctionSetter'
        }
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
        setter: {
          componentName: 'FunctionSetter'
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
          },
          initialValue: undefined
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
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
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
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
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
        setter: {
          componentName: 'FunctionSetter'
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
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
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
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
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
                  setter: {
                    componentName: 'StringSetter',
                    initialValue: undefined
                  }
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
                  setter: {
                    componentName: 'StringSetter',
                    initialValue: undefined
                  }
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
                  setter: {
                    componentName: 'StringSetter',
                    initialValue: undefined
                  }
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
                  setter: {
                    componentName: 'StringSetter',
                    initialValue: undefined
                  }
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
                  setter: {
                    componentName: 'StringSetter',
                    initialValue: undefined
                  }
                }
              ],
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
            'en-US': 'id',
            'zh-CN': 'id'
          }
        },
        name: 'id',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
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
        setter: {
          componentName: 'FunctionSetter'
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
        setter: {
          componentName: 'FunctionSetter'
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
        setter: {
          componentName: 'FunctionSetter'
        }
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
          props: {
            config: {
              extraSetter: {
                componentName: 'MixedSetter',
                props: {}
              }
            }
          },
          initialValue: undefined
        }
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
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'maxCount',
            'zh-CN': 'Config max'
          }
        },
        name: 'maxCount',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
        }
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
            setters: [
              {
                componentName: 'StringSetter',
                initialValue: undefined
              },
              {
                componentName: 'BoolSetter',
                initialValue: undefined
              }
            ]
          }
        }
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
    title: 'Upload',
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
