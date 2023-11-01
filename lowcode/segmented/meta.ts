import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const SegmentedMeta: IPublicTypeComponentMetadata = {
  componentName: 'Segmented',
  title: '分段控制器',
  group: '原子组件',
  category: '数据展示 Data Display',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Segmented',
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
            'en-US': 'acceptCharset',
            'zh-CN': 'acceptCharset'
          }
        },
        name: 'acceptCharset',
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
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'allowFullScreen',
            'zh-CN': 'allowFullScreen'
          }
        },
        name: 'allowFullScreen',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'allowTransparency',
            'zh-CN': 'allowTransparency'
          }
        },
        name: 'allowTransparency',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'alt',
            'zh-CN': 'alt'
          }
        },
        name: 'alt',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'as',
            'zh-CN': 'as'
          }
        },
        name: 'as',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'async',
            'zh-CN': 'async'
          }
        },
        name: 'async',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'autoComplete',
            'zh-CN': 'autoComplete'
          }
        },
        name: 'autoComplete',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'autoPlay',
            'zh-CN': 'autoPlay'
          }
        },
        name: 'autoPlay',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'block',
            'zh-CN': 'block'
          }
        },
        name: 'block',
        setter: 'BoolSetter'
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
            'en-US': 'cellPadding',
            'zh-CN': 'cellPadding'
          }
        },
        name: 'cellPadding',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'NumberSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'cellSpacing',
            'zh-CN': 'cellSpacing'
          }
        },
        name: 'cellSpacing',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'NumberSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'challenge',
            'zh-CN': 'challenge'
          }
        },
        name: 'challenge',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'charSet',
            'zh-CN': 'charSet'
          }
        },
        name: 'charSet',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'checked',
            'zh-CN': 'checked'
          }
        },
        name: 'checked',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'cite',
            'zh-CN': 'cite'
          }
        },
        name: 'cite',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'classID',
            'zh-CN': 'classID'
          }
        },
        name: 'classID',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'colSpan',
            'zh-CN': 'colSpan'
          }
        },
        name: 'colSpan',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'cols',
            'zh-CN': 'cols'
          }
        },
        name: 'cols',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'controls',
            'zh-CN': 'controls'
          }
        },
        name: 'controls',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'coords',
            'zh-CN': 'coords'
          }
        },
        name: 'coords',
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
            'en-US': 'data',
            'zh-CN': 'data'
          }
        },
        name: 'data',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'dateTime',
            'zh-CN': 'dateTime'
          }
        },
        name: 'dateTime',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'default',
            'zh-CN': 'default'
          }
        },
        name: 'default',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'defaultValue',
            'zh-CN': 'defaultValue'
          }
        },
        name: 'defaultValue',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'NumberSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'defer',
            'zh-CN': 'defer'
          }
        },
        name: 'defer',
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
            'en-US': 'download',
            'zh-CN': 'download'
          }
        },
        name: 'download',
        setter: {
          componentName: 'MixedSetter',
          props: {}
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'encType',
            'zh-CN': 'encType'
          }
        },
        name: 'encType',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'form',
            'zh-CN': 'form'
          }
        },
        name: 'form',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'formAction',
            'zh-CN': 'formAction'
          }
        },
        name: 'formAction',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'formEncType',
            'zh-CN': 'formEncType'
          }
        },
        name: 'formEncType',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'formMethod',
            'zh-CN': 'formMethod'
          }
        },
        name: 'formMethod',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'formNoValidate',
            'zh-CN': 'formNoValidate'
          }
        },
        name: 'formNoValidate',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'formTarget',
            'zh-CN': 'formTarget'
          }
        },
        name: 'formTarget',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'frameBorder',
            'zh-CN': 'frameBorder'
          }
        },
        name: 'frameBorder',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'NumberSetter']
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
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'height',
            'zh-CN': 'height'
          }
        },
        name: 'height',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'NumberSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'high',
            'zh-CN': 'high'
          }
        },
        name: 'high',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'href',
            'zh-CN': 'href'
          }
        },
        name: 'href',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'hrefLang',
            'zh-CN': 'hrefLang'
          }
        },
        name: 'hrefLang',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'htmlFor',
            'zh-CN': 'htmlFor'
          }
        },
        name: 'htmlFor',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'httpEquiv',
            'zh-CN': 'httpEquiv'
          }
        },
        name: 'httpEquiv',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'integrity',
            'zh-CN': 'integrity'
          }
        },
        name: 'integrity',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'keyParams',
            'zh-CN': 'keyParams'
          }
        },
        name: 'keyParams',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'keyType',
            'zh-CN': 'keyType'
          }
        },
        name: 'keyType',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'kind',
            'zh-CN': 'kind'
          }
        },
        name: 'kind',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'label',
            'zh-CN': 'label'
          }
        },
        name: 'label',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'list',
            'zh-CN': 'list'
          }
        },
        name: 'list',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'loop',
            'zh-CN': 'loop'
          }
        },
        name: 'loop',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'low',
            'zh-CN': 'low'
          }
        },
        name: 'low',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'manifest',
            'zh-CN': 'manifest'
          }
        },
        name: 'manifest',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'marginHeight',
            'zh-CN': 'marginHeight'
          }
        },
        name: 'marginHeight',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'marginWidth',
            'zh-CN': 'marginWidth'
          }
        },
        name: 'marginWidth',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'max',
            'zh-CN': 'max'
          }
        },
        name: 'max',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'NumberSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'maxLength',
            'zh-CN': 'maxLength'
          }
        },
        name: 'maxLength',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'media',
            'zh-CN': 'media'
          }
        },
        name: 'media',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'mediaGroup',
            'zh-CN': 'mediaGroup'
          }
        },
        name: 'mediaGroup',
        setter: 'StringSetter'
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
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'min',
            'zh-CN': 'min'
          }
        },
        name: 'min',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'NumberSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'minLength',
            'zh-CN': 'minLength'
          }
        },
        name: 'minLength',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'motionName',
            'zh-CN': 'motionName'
          }
        },
        name: 'motionName',
        setter: 'StringSetter'
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
            'en-US': 'muted',
            'zh-CN': 'muted'
          }
        },
        name: 'muted',
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
            'en-US': 'noValidate',
            'zh-CN': 'noValidate'
          }
        },
        name: 'noValidate',
        setter: 'BoolSetter'
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
            'en-US': 'open',
            'zh-CN': 'open'
          }
        },
        name: 'open',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'optimum',
            'zh-CN': 'optimum'
          }
        },
        name: 'optimum',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'options',
            'zh-CN': 'options'
          }
        },
        name: 'options',
        setter: {
          componentName: 'ArraySetter',
          condition: () => false,
          props: {
            itemSetter: {
              componentName: 'MixedSetter',
              props: {
                setters: [
                  'StringSetter',
                  'NumberSetter',
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
                                'en-US': 'label',
                                'zh-CN': 'label'
                              }
                            },
                            name: 'label',
                            setter: 'SlotSetter'
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'icon',
                                'zh-CN': 'icon'
                              }
                            },
                            name: 'icon',
                            setter: 'SlotSetter'
                          }
                        ]
                      }
                    }
                  },
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
                                'en-US': 'label',
                                'zh-CN': 'label'
                              }
                            },
                            name: 'label',
                            setter: 'SlotSetter'
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'pattern',
            'zh-CN': 'pattern'
          }
        },
        name: 'pattern',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'placeholder',
            'zh-CN': 'placeholder'
          }
        },
        name: 'placeholder',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'playsInline',
            'zh-CN': 'playsInline'
          }
        },
        name: 'playsInline',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'poster',
            'zh-CN': 'poster'
          }
        },
        name: 'poster',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'preload',
            'zh-CN': 'preload'
          }
        },
        name: 'preload',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'readOnly',
            'zh-CN': 'readOnly'
          }
        },
        name: 'readOnly',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'required',
            'zh-CN': 'required'
          }
        },
        name: 'required',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'reversed',
            'zh-CN': 'reversed'
          }
        },
        name: 'reversed',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'rowSpan',
            'zh-CN': 'rowSpan'
          }
        },
        name: 'rowSpan',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'rows',
            'zh-CN': 'rows'
          }
        },
        name: 'rows',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'sandbox',
            'zh-CN': 'sandbox'
          }
        },
        name: 'sandbox',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'scope',
            'zh-CN': 'scope'
          }
        },
        name: 'scope',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'scoped',
            'zh-CN': 'scoped'
          }
        },
        name: 'scoped',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'scrolling',
            'zh-CN': 'scrolling'
          }
        },
        name: 'scrolling',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'seamless',
            'zh-CN': 'seamless'
          }
        },
        name: 'seamless',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'selected',
            'zh-CN': 'selected'
          }
        },
        name: 'selected',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'shape',
            'zh-CN': 'shape'
          }
        },
        name: 'shape',
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
        setter: {
          componentName: 'RadioGroupSetter',
          condition: () => false,
          props: {
            dataSource: [
              {
                label: 'small',
                value: 'small'
              },
              {
                label: 'middle',
                value: 'middle'
              },
              {
                label: 'large',
                value: 'large'
              }
            ],
            options: [
              {
                label: 'small',
                value: 'small'
              },
              {
                label: 'middle',
                value: 'middle'
              },
              {
                label: 'large',
                value: 'large'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'sizes',
            'zh-CN': 'sizes'
          }
        },
        name: 'sizes',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'span',
            'zh-CN': 'span'
          }
        },
        name: 'span',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'src',
            'zh-CN': 'src'
          }
        },
        name: 'src',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'srcDoc',
            'zh-CN': 'srcDoc'
          }
        },
        name: 'srcDoc',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'srcLang',
            'zh-CN': 'srcLang'
          }
        },
        name: 'srcLang',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'srcSet',
            'zh-CN': 'srcSet'
          }
        },
        name: 'srcSet',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'start',
            'zh-CN': 'start'
          }
        },
        name: 'start',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'step',
            'zh-CN': 'step'
          }
        },
        name: 'step',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'NumberSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'summary',
            'zh-CN': 'summary'
          }
        },
        name: 'summary',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'target',
            'zh-CN': 'target'
          }
        },
        name: 'target',
        setter: 'StringSetter'
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
            'en-US': 'useMap',
            'zh-CN': 'useMap'
          }
        },
        name: 'useMap',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'value',
            'zh-CN': 'value'
          }
        },
        name: 'value',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'NumberSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'width',
            'zh-CN': 'width'
          }
        },
        name: 'width',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'NumberSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'wmode',
            'zh-CN': 'wmode'
          }
        },
        name: 'wmode',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'wrap',
            'zh-CN': 'wrap'
          }
        },
        name: 'wrap',
        setter: 'StringSetter'
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
    title: '分段控制器',
    screenshot: '',
    schema: {
      componentName: 'Segmented',
      props: {}
    }
  }
];

export default {
  ...SegmentedMeta,
  snippets
};
