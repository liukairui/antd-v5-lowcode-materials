
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const DescriptionsMeta: IPublicTypeComponentMetadata = {
  "componentName": "Descriptions",
  "title": "Descriptions",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "antd-5-lowcode-materials",
    "version": "0.1.0",
    "exportName": "Descriptions",
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
            "en-US": "bordered",
            "zh-CN": "bordered"
          }
        },
        "name": "bordered",
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
            "en-US": "size",
            "zh-CN": "size"
          }
        },
        "name": "size",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "default",
                "value": "default"
              },
              {
                "label": "small",
                "value": "small"
              },
              {
                "label": "middle",
                "value": "middle"
              }
            ],
            "options": [
              {
                "label": "default",
                "value": "default"
              },
              {
                "label": "small",
                "value": "small"
              },
              {
                "label": "middle",
                "value": "middle"
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
            "en-US": "children",
            "zh-CN": "@deprecate"
          },
          "tip": "children | @deprecated use `items` instead"
        },
        "name": "children",
        "description": "@deprecated use `items` instead",
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
            "en-US": "title",
            "zh-CN": "title"
          }
        },
        "name": "title",
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
            "en-US": "extra",
            "zh-CN": "extra"
          }
        },
        "name": "extra",
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
            "en-US": "column",
            "zh-CN": "column"
          }
        },
        "name": "column",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "NumberSetter",
                "isRequired": false,
                "initialValue": 0
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
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "layout",
            "zh-CN": "layout"
          }
        },
        "name": "layout",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "horizontal",
                "value": "horizontal"
              },
              {
                "label": "vertical",
                "value": "vertical"
              }
            ],
            "options": [
              {
                "label": "horizontal",
                "value": "horizontal"
              },
              {
                "label": "vertical",
                "value": "vertical"
              }
            ]
          },
          "initialValue": "horizontal"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "colon",
            "zh-CN": "colon"
          }
        },
        "name": "colon",
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
            "en-US": "labelStyle",
            "zh-CN": "labelStyle"
          }
        },
        "name": "labelStyle",
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
            "en-US": "contentStyle",
            "zh-CN": "contentStyle"
          }
        },
        "name": "contentStyle",
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
            "en-US": "items",
            "zh-CN": "items"
          }
        },
        "name": "items",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
              "componentName": "ObjectSetter",
              "props": {
                "config": {
                  "items": [
                    {
                      "title": {
                        "label": {
                          "type": "i18n",
                          "en-US": "span",
                          "zh-CN": "span"
                        }
                      },
                      "name": "span",
                      "setter": {
                        "componentName": "MixedSetter",
                        "props": {
                          "setters": [
                            {
                              "componentName": "NumberSetter",
                              "isRequired": false,
                              "initialValue": 0
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
                            }
                          ]
                        }
                      }
                    }
                  ],
                  "extraSetter": {
                    "componentName": "MixedSetter",
                    "isRequired": false,
                    "props": {}
                  }
                }
              }
            }
          },
          "initialValue": []
        }
      }
    ],
    "supports": {
      "className": true,
      "style": true
    },
    "component": {
      "isContainer": true
    }
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "Descriptions",
    "screenshot": "",
    "schema": {
      "componentName": "Descriptions",
      "props": {}
    }
  }
];

export default {
  ...DescriptionsMeta,
  snippets
};
