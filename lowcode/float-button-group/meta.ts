
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const FloatButtonGroupMeta: IPublicTypeComponentMetadata = {
  "componentName": "FloatButtonGroup",
  "title": "FloatButtonGroup",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "antd-5-lowcode-materials",
    "version": "0.1.0",
    "exportName": "FloatButtonGroup",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "trigger",
            "zh-CN": "trigger"
          }
        },
        "name": "trigger",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "click",
                "value": "click"
              },
              {
                "label": "hover",
                "value": "hover"
              }
            ],
            "options": [
              {
                "label": "click",
                "value": "click"
              },
              {
                "label": "hover",
                "value": "hover"
              }
            ]
          },
          "initialValue": "click"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "open",
            "zh-CN": "open"
          }
        },
        "name": "open",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "closeIcon",
            "zh-CN": "closeIcon"
          }
        },
        "name": "closeIcon",
        "setter": {
          "componentName": "SlotSetter",
          "props": {
            "mode": "node"
          },
          "isRequired": false,
          "initialValue": {
            "type": "JSSlot",
            "value": []
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onOpenChange",
            "zh-CN": "onOpenChange"
          }
        },
        "name": "onOpenChange",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "prefixCls",
            "zh-CN": "prefixCls"
          }
        },
        "name": "prefixCls",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "rootClassName",
            "zh-CN": "rootClassName"
          }
        },
        "name": "rootClassName",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "icon",
            "zh-CN": "icon"
          }
        },
        "name": "icon",
        "setter": {
          "componentName": "SlotSetter",
          "props": {
            "mode": "node"
          },
          "isRequired": false,
          "initialValue": {
            "type": "JSSlot",
            "value": []
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "description",
            "zh-CN": "description"
          }
        },
        "name": "description",
        "setter": {
          "componentName": "SlotSetter",
          "props": {
            "mode": "node"
          },
          "isRequired": false,
          "initialValue": {
            "type": "JSSlot",
            "value": []
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "type",
            "zh-CN": "type"
          }
        },
        "name": "type",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "default",
                "value": "default"
              },
              {
                "label": "primary",
                "value": "primary"
              }
            ],
            "options": [
              {
                "label": "default",
                "value": "default"
              },
              {
                "label": "primary",
                "value": "primary"
              }
            ]
          },
          "initialValue": "default"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "shape",
            "zh-CN": "shape"
          }
        },
        "name": "shape",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "circle",
                "value": "circle"
              },
              {
                "label": "square",
                "value": "square"
              }
            ],
            "options": [
              {
                "label": "circle",
                "value": "circle"
              },
              {
                "label": "square",
                "value": "square"
              }
            ]
          },
          "initialValue": "circle"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "tooltip",
            "zh-CN": "tooltip"
          }
        },
        "name": "tooltip",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "StringSetter",
                "isRequired": false,
                "initialValue": ""
              },
              {
                "componentName": "NumberSetter",
                "isRequired": false,
                "initialValue": 0
              },
              {
                "componentName": "BoolSetter",
                "isRequired": false,
                "initialValue": false
              },
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      "isRequired": false,
                      "props": {}
                    }
                  }
                },
                "isRequired": false,
                "initialValue": {}
              },
              {
                "componentName": "FunctionSetter",
                "isRequired": false
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "href",
            "zh-CN": "href"
          }
        },
        "name": "href",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "target",
            "zh-CN": "target"
          }
        },
        "name": "target",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      "isRequired": false,
                      "props": {}
                    }
                  }
                },
                "isRequired": false,
                "initialValue": {}
              },
              {
                "componentName": "SelectSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "_self",
                      "value": "_self"
                    },
                    {
                      "label": "_blank",
                      "value": "_blank"
                    },
                    {
                      "label": "_parent",
                      "value": "_parent"
                    },
                    {
                      "label": "_top",
                      "value": "_top"
                    }
                  ],
                  "options": [
                    {
                      "label": "_self",
                      "value": "_self"
                    },
                    {
                      "label": "_blank",
                      "value": "_blank"
                    },
                    {
                      "label": "_parent",
                      "value": "_parent"
                    },
                    {
                      "label": "_top",
                      "value": "_top"
                    }
                  ]
                },
                "initialValue": "_self"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "badge",
            "zh-CN": "badge"
          }
        },
        "name": "badge",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "extraSetter": {
                "componentName": "MixedSetter",
                "isRequired": false,
                "props": {}
              }
            }
          },
          "isRequired": false,
          "initialValue": {}
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onClick",
            "zh-CN": "onClick"
          }
        },
        "name": "onClick",
        "setter": {
          "componentName": "FunctionSetter"
        }
      }
    ],
    "supports": {
      "className": true,
      "style": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "FloatButtonGroup",
    "screenshot": "",
    "schema": {
      "componentName": "FloatButtonGroup",
      "props": {}
    }
  }
];

export default {
  ...FloatButtonGroupMeta,
  snippets
};
