
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const RadioGroupMeta: IPublicTypeComponentMetadata = {
  "componentName": "RadioGroup",
  "title": "RadioGroup",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "antd-5-lowcode-materials",
    "version": "0.1.0",
    "exportName": "RadioGroup",
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
            "en-US": "defaultValue",
            "zh-CN": "defaultValue"
          }
        },
        "name": "defaultValue",
        "setter": {
          "componentName": "MixedSetter",
          "isRequired": false,
          "props": {}
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "value",
            "zh-CN": "value"
          }
        },
        "name": "value",
        "setter": {
          "componentName": "MixedSetter",
          "isRequired": false,
          "props": {}
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onChange",
            "zh-CN": "onChange"
          }
        },
        "name": "onChange",
        "setter": {
          "componentName": "FunctionSetter"
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
                "label": "small",
                "value": "small"
              },
              {
                "label": "middle",
                "value": "middle"
              },
              {
                "label": "large",
                "value": "large"
              }
            ],
            "options": [
              {
                "label": "small",
                "value": "small"
              },
              {
                "label": "middle",
                "value": "middle"
              },
              {
                "label": "large",
                "value": "large"
              }
            ]
          },
          "initialValue": "small"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "disabled",
            "zh-CN": "disabled"
          }
        },
        "name": "disabled",
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
            "en-US": "onMouseEnter",
            "zh-CN": "onMouseEnter"
          }
        },
        "name": "onMouseEnter",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onMouseLeave",
            "zh-CN": "onMouseLeave"
          }
        },
        "name": "onMouseLeave",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "name",
            "zh-CN": "name"
          }
        },
        "name": "name",
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
            "en-US": "id",
            "zh-CN": "id"
          }
        },
        "name": "id",
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
            "en-US": "optionType",
            "zh-CN": "optionType"
          }
        },
        "name": "optionType",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "button",
                "value": "button"
              },
              {
                "label": "default",
                "value": "default"
              }
            ],
            "options": [
              {
                "label": "button",
                "value": "button"
              },
              {
                "label": "default",
                "value": "default"
              }
            ]
          },
          "initialValue": "button"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "buttonStyle",
            "zh-CN": "buttonStyle"
          }
        },
        "name": "buttonStyle",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "outline",
                "value": "outline"
              },
              {
                "label": "solid",
                "value": "solid"
              }
            ],
            "options": [
              {
                "label": "outline",
                "value": "outline"
              },
              {
                "label": "solid",
                "value": "solid"
              }
            ]
          },
          "initialValue": "outline"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onFocus",
            "zh-CN": "onFocus"
          }
        },
        "name": "onFocus",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onBlur",
            "zh-CN": "onBlur"
          }
        },
        "name": "onBlur",
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
            "en-US": "options",
            "zh-CN": "options"
          }
        },
        "name": "options",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
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
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "label",
                                "zh-CN": "label"
                              }
                            },
                            "name": "label",
                            "setter": {
                              "componentName": "SlotSetter",
                              "props": {
                                "mode": "node"
                              },
                              "isRequired": true,
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
                                "en-US": "value",
                                "zh-CN": "value"
                              }
                            },
                            "name": "value",
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
                                  }
                                ]
                              },
                              "isRequired": true
                            }
                          },
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "style",
                                "zh-CN": "style"
                              }
                            },
                            "name": "style",
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
                                "en-US": "disabled",
                                "zh-CN": "disabled"
                              }
                            },
                            "name": "disabled",
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
                                "en-US": "title",
                                "zh-CN": "title"
                              }
                            },
                            "name": "title",
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
                                "en-US": "id",
                                "zh-CN": "id"
                              }
                            },
                            "name": "id",
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
                                "en-US": "onChange",
                                "zh-CN": "onChange"
                              }
                            },
                            "name": "onChange",
                            "setter": {
                              "componentName": "FunctionSetter"
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
                ]
              }
            }
          },
          "initialValue": []
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "ref",
            "zh-CN": "ref"
          }
        },
        "name": "ref",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "FunctionSetter"
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
            "en-US": "key",
            "zh-CN": "key"
          }
        },
        "name": "key",
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
              }
            ]
          }
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
    "title": "RadioGroup",
    "screenshot": "",
    "schema": {
      "componentName": "RadioGroup",
      "props": {}
    }
  }
];

export default {
  ...RadioGroupMeta,
  snippets
};
