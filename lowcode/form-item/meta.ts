
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const FormItemMeta: IPublicTypeComponentMetadata = {
  "componentName": "FormItem",
  "title": "FormItem",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "antd-5-lowcode-materials",
    "version": "0.1.0",
    "exportName": "FormItem",
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
            "en-US": "noStyle",
            "zh-CN": "noStyle"
          }
        },
        "name": "noStyle",
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
            "en-US": "hasFeedback",
            "zh-CN": "hasFeedback"
          }
        },
        "name": "hasFeedback",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "BoolSetter",
                "isRequired": false,
                "initialValue": false
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
                            "en-US": "icons",
                            "zh-CN": "icons"
                          }
                        },
                        "name": "icons",
                        "setter": {
                          "componentName": "FunctionSetter",
                          "isRequired": true
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
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "validateStatus",
            "zh-CN": "validateStatus"
          }
        },
        "name": "validateStatus",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "",
                "value": ""
              },
              {
                "label": "success",
                "value": "success"
              },
              {
                "label": "warning",
                "value": "warning"
              },
              {
                "label": "error",
                "value": "error"
              },
              {
                "label": "validating",
                "value": "validating"
              }
            ],
            "options": [
              {
                "label": "",
                "value": ""
              },
              {
                "label": "success",
                "value": "success"
              },
              {
                "label": "warning",
                "value": "warning"
              },
              {
                "label": "error",
                "value": "error"
              },
              {
                "label": "validating",
                "value": "validating"
              }
            ]
          },
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "required",
            "zh-CN": "required"
          }
        },
        "name": "required",
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
            "en-US": "hidden",
            "zh-CN": "hidden"
          }
        },
        "name": "hidden",
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
            "en-US": "initialValue",
            "zh-CN": "initialValue"
          }
        },
        "name": "initialValue",
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
            "en-US": "messageVariables",
            "zh-CN": "messageVariables"
          }
        },
        "name": "messageVariables",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "extraSetter": {
                "componentName": "StringSetter",
                "isRequired": false,
                "initialValue": ""
              }
            }
          },
          "initialValue": {}
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
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "fieldKey",
            "zh-CN": "@deprecate"
          },
          "tip": "fieldKey | @deprecated No need anymore"
        },
        "name": "fieldKey",
        "description": "@deprecated No need anymore",
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
                        }
                      ]
                    }
                  }
                },
                "initialValue": []
              }
            ]
          }
        }
      },
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
            "en-US": "labelAlign",
            "zh-CN": "labelAlign"
          }
        },
        "name": "labelAlign",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "left",
                "value": "left"
              },
              {
                "label": "right",
                "value": "right"
              }
            ],
            "options": [
              {
                "label": "left",
                "value": "left"
              },
              {
                "label": "right",
                "value": "right"
              }
            ]
          },
          "initialValue": "left"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "labelCol",
            "zh-CN": "labelCol"
          }
        },
        "name": "labelCol",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "flex",
                      "zh-CN": "flex"
                    }
                  },
                  "name": "flex",
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
                        },
                        {
                          "componentName": "RadioGroupSetter",
                          "props": {
                            "dataSource": [
                              {
                                "label": "auto",
                                "value": "auto"
                              },
                              {
                                "label": "none",
                                "value": "none"
                              }
                            ],
                            "options": [
                              {
                                "label": "auto",
                                "value": "auto"
                              },
                              {
                                "label": "none",
                                "value": "none"
                              }
                            ]
                          },
                          "initialValue": "auto"
                        }
                      ]
                    }
                  }
                },
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
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "order",
                      "zh-CN": "order"
                    }
                  },
                  "name": "order",
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
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "offset",
                      "zh-CN": "offset"
                    }
                  },
                  "name": "offset",
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
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "push",
                      "zh-CN": "push"
                    }
                  },
                  "name": "push",
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
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "pull",
                      "zh-CN": "pull"
                    }
                  },
                  "name": "pull",
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
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "xs",
                      "zh-CN": "xs"
                    }
                  },
                  "name": "xs",
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
                          "componentName": "ObjectSetter",
                          "props": {
                            "config": {
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
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
                                        },
                                        {
                                          "componentName": "RadioGroupSetter",
                                          "props": {
                                            "dataSource": [
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              },
                                              {
                                                "label": "none",
                                                "value": "none"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              },
                                              {
                                                "label": "none",
                                                "value": "none"
                                              }
                                            ]
                                          },
                                          "initialValue": "auto"
                                        }
                                      ]
                                    }
                                  }
                                },
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "sm",
                      "zh-CN": "sm"
                    }
                  },
                  "name": "sm",
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
                          "componentName": "ObjectSetter",
                          "props": {
                            "config": {
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
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
                                        },
                                        {
                                          "componentName": "RadioGroupSetter",
                                          "props": {
                                            "dataSource": [
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              },
                                              {
                                                "label": "none",
                                                "value": "none"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              },
                                              {
                                                "label": "none",
                                                "value": "none"
                                              }
                                            ]
                                          },
                                          "initialValue": "auto"
                                        }
                                      ]
                                    }
                                  }
                                },
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "md",
                      "zh-CN": "md"
                    }
                  },
                  "name": "md",
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
                          "componentName": "ObjectSetter",
                          "props": {
                            "config": {
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
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
                                        },
                                        {
                                          "componentName": "RadioGroupSetter",
                                          "props": {
                                            "dataSource": [
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              },
                                              {
                                                "label": "none",
                                                "value": "none"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              },
                                              {
                                                "label": "none",
                                                "value": "none"
                                              }
                                            ]
                                          },
                                          "initialValue": "auto"
                                        }
                                      ]
                                    }
                                  }
                                },
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "lg",
                      "zh-CN": "lg"
                    }
                  },
                  "name": "lg",
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
                          "componentName": "ObjectSetter",
                          "props": {
                            "config": {
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
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
                                        },
                                        {
                                          "componentName": "RadioGroupSetter",
                                          "props": {
                                            "dataSource": [
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              },
                                              {
                                                "label": "none",
                                                "value": "none"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              },
                                              {
                                                "label": "none",
                                                "value": "none"
                                              }
                                            ]
                                          },
                                          "initialValue": "auto"
                                        }
                                      ]
                                    }
                                  }
                                },
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "xl",
                      "zh-CN": "xl"
                    }
                  },
                  "name": "xl",
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
                          "componentName": "ObjectSetter",
                          "props": {
                            "config": {
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
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
                                        },
                                        {
                                          "componentName": "RadioGroupSetter",
                                          "props": {
                                            "dataSource": [
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              },
                                              {
                                                "label": "none",
                                                "value": "none"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              },
                                              {
                                                "label": "none",
                                                "value": "none"
                                              }
                                            ]
                                          },
                                          "initialValue": "auto"
                                        }
                                      ]
                                    }
                                  }
                                },
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "xxl",
                      "zh-CN": "xxl"
                    }
                  },
                  "name": "xxl",
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
                          "componentName": "ObjectSetter",
                          "props": {
                            "config": {
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
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
                                        },
                                        {
                                          "componentName": "RadioGroupSetter",
                                          "props": {
                                            "dataSource": [
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              },
                                              {
                                                "label": "none",
                                                "value": "none"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              },
                                              {
                                                "label": "none",
                                                "value": "none"
                                              }
                                            ]
                                          },
                                          "initialValue": "auto"
                                        }
                                      ]
                                    }
                                  }
                                },
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "htmlFor",
            "zh-CN": "htmlFor"
          }
        },
        "name": "htmlFor",
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
            "en-US": "wrapperCol",
            "zh-CN": "wrapperCol"
          }
        },
        "name": "wrapperCol",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "flex",
                      "zh-CN": "flex"
                    }
                  },
                  "name": "flex",
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
                        },
                        {
                          "componentName": "RadioGroupSetter",
                          "props": {
                            "dataSource": [
                              {
                                "label": "auto",
                                "value": "auto"
                              },
                              {
                                "label": "none",
                                "value": "none"
                              }
                            ],
                            "options": [
                              {
                                "label": "auto",
                                "value": "auto"
                              },
                              {
                                "label": "none",
                                "value": "none"
                              }
                            ]
                          },
                          "initialValue": "auto"
                        }
                      ]
                    }
                  }
                },
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
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "order",
                      "zh-CN": "order"
                    }
                  },
                  "name": "order",
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
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "offset",
                      "zh-CN": "offset"
                    }
                  },
                  "name": "offset",
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
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "push",
                      "zh-CN": "push"
                    }
                  },
                  "name": "push",
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
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "pull",
                      "zh-CN": "pull"
                    }
                  },
                  "name": "pull",
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
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "xs",
                      "zh-CN": "xs"
                    }
                  },
                  "name": "xs",
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
                          "componentName": "ObjectSetter",
                          "props": {
                            "config": {
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
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
                                        },
                                        {
                                          "componentName": "RadioGroupSetter",
                                          "props": {
                                            "dataSource": [
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              },
                                              {
                                                "label": "none",
                                                "value": "none"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              },
                                              {
                                                "label": "none",
                                                "value": "none"
                                              }
                                            ]
                                          },
                                          "initialValue": "auto"
                                        }
                                      ]
                                    }
                                  }
                                },
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "sm",
                      "zh-CN": "sm"
                    }
                  },
                  "name": "sm",
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
                          "componentName": "ObjectSetter",
                          "props": {
                            "config": {
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
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
                                        },
                                        {
                                          "componentName": "RadioGroupSetter",
                                          "props": {
                                            "dataSource": [
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              },
                                              {
                                                "label": "none",
                                                "value": "none"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              },
                                              {
                                                "label": "none",
                                                "value": "none"
                                              }
                                            ]
                                          },
                                          "initialValue": "auto"
                                        }
                                      ]
                                    }
                                  }
                                },
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "md",
                      "zh-CN": "md"
                    }
                  },
                  "name": "md",
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
                          "componentName": "ObjectSetter",
                          "props": {
                            "config": {
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
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
                                        },
                                        {
                                          "componentName": "RadioGroupSetter",
                                          "props": {
                                            "dataSource": [
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              },
                                              {
                                                "label": "none",
                                                "value": "none"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              },
                                              {
                                                "label": "none",
                                                "value": "none"
                                              }
                                            ]
                                          },
                                          "initialValue": "auto"
                                        }
                                      ]
                                    }
                                  }
                                },
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "lg",
                      "zh-CN": "lg"
                    }
                  },
                  "name": "lg",
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
                          "componentName": "ObjectSetter",
                          "props": {
                            "config": {
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
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
                                        },
                                        {
                                          "componentName": "RadioGroupSetter",
                                          "props": {
                                            "dataSource": [
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              },
                                              {
                                                "label": "none",
                                                "value": "none"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              },
                                              {
                                                "label": "none",
                                                "value": "none"
                                              }
                                            ]
                                          },
                                          "initialValue": "auto"
                                        }
                                      ]
                                    }
                                  }
                                },
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "xl",
                      "zh-CN": "xl"
                    }
                  },
                  "name": "xl",
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
                          "componentName": "ObjectSetter",
                          "props": {
                            "config": {
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
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
                                        },
                                        {
                                          "componentName": "RadioGroupSetter",
                                          "props": {
                                            "dataSource": [
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              },
                                              {
                                                "label": "none",
                                                "value": "none"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              },
                                              {
                                                "label": "none",
                                                "value": "none"
                                              }
                                            ]
                                          },
                                          "initialValue": "auto"
                                        }
                                      ]
                                    }
                                  }
                                },
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "xxl",
                      "zh-CN": "xxl"
                    }
                  },
                  "name": "xxl",
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
                          "componentName": "ObjectSetter",
                          "props": {
                            "config": {
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
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
                                        },
                                        {
                                          "componentName": "RadioGroupSetter",
                                          "props": {
                                            "dataSource": [
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              },
                                              {
                                                "label": "none",
                                                "value": "none"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              },
                                              {
                                                "label": "none",
                                                "value": "none"
                                              }
                                            ]
                                          },
                                          "initialValue": "auto"
                                        }
                                      ]
                                    }
                                  }
                                },
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
            "en-US": "status",
            "zh-CN": "status"
          }
        },
        "name": "status",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "",
                "value": ""
              },
              {
                "label": "success",
                "value": "success"
              },
              {
                "label": "warning",
                "value": "warning"
              },
              {
                "label": "error",
                "value": "error"
              },
              {
                "label": "validating",
                "value": "validating"
              }
            ],
            "options": [
              {
                "label": "",
                "value": ""
              },
              {
                "label": "success",
                "value": "success"
              },
              {
                "label": "warning",
                "value": "warning"
              },
              {
                "label": "error",
                "value": "error"
              },
              {
                "label": "validating",
                "value": "validating"
              }
            ]
          },
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "help",
            "zh-CN": "help"
          }
        },
        "name": "help",
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
            "en-US": "fieldId",
            "zh-CN": "fieldId"
          }
        },
        "name": "fieldId",
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
            "en-US": "name",
            "zh-CN": "name"
          }
        },
        "name": "name",
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
            "en-US": "trigger",
            "zh-CN": "trigger"
          }
        },
        "name": "trigger",
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
            "en-US": "validateTrigger",
            "zh-CN": "validateTrigger"
          }
        },
        "name": "validateTrigger",
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
                "componentName": "ArraySetter",
                "props": {
                  "itemSetter": {
                    "componentName": "StringSetter",
                    "isRequired": false,
                    "initialValue": ""
                  }
                },
                "initialValue": []
              },
              {
                "componentName": "RadioGroupSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "false",
                      "value": false
                    }
                  ],
                  "options": [
                    {
                      "label": "false",
                      "value": false
                    }
                  ]
                },
                "initialValue": false
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "preserve",
            "zh-CN": "preserve"
          }
        },
        "name": "preserve",
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
            "en-US": "dependencies",
            "zh-CN": "Set up `de"
          },
          "tip": "dependencies | Set up `dependencies` field."
        },
        "name": "dependencies",
        "description": "Set up `dependencies` field.",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
              "componentName": "MixedSetter",
              "isRequired": false,
              "props": {}
            }
          },
          "initialValue": []
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "getValueFromEvent",
            "zh-CN": "getValueFromEvent"
          }
        },
        "name": "getValueFromEvent",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "normalize",
            "zh-CN": "normalize"
          }
        },
        "name": "normalize",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "rules",
            "zh-CN": "rules"
          }
        },
        "name": "rules",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
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
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
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
                                    "label": "array",
                                    "value": "array"
                                  }
                                ],
                                "options": [
                                  {
                                    "label": "array",
                                    "value": "array"
                                  }
                                ]
                              },
                              "isRequired": true,
                              "initialValue": "array"
                            }
                          },
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "defaultField",
                                "zh-CN": "defaultField"
                              }
                            },
                            "name": "defaultField",
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
                  },
                  {
                    "componentName": "FunctionSetter"
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
            "en-US": "shouldUpdate",
            "zh-CN": "shouldUpdate"
          }
        },
        "name": "shouldUpdate",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "BoolSetter",
                "isRequired": false,
                "initialValue": false
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
            "en-US": "validateDebounce",
            "zh-CN": "Trigger wi"
          },
          "tip": "validateDebounce | Trigger will after configured milliseconds."
        },
        "name": "validateDebounce",
        "description": "Trigger will after configured milliseconds.",
        "setter": {
          "componentName": "NumberSetter",
          "isRequired": false,
          "initialValue": 0
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "validateFirst",
            "zh-CN": "validateFirst"
          }
        },
        "name": "validateFirst",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "BoolSetter",
                "isRequired": false,
                "initialValue": false
              },
              {
                "componentName": "RadioGroupSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "parallel",
                      "value": "parallel"
                    }
                  ],
                  "options": [
                    {
                      "label": "parallel",
                      "value": "parallel"
                    }
                  ]
                },
                "initialValue": "parallel"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "valuePropName",
            "zh-CN": "valuePropName"
          }
        },
        "name": "valuePropName",
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
            "en-US": "getValueProps",
            "zh-CN": "getValueProps"
          }
        },
        "name": "getValueProps",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onMetaChange",
            "zh-CN": "onMetaChange"
          }
        },
        "name": "onMetaChange",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "isListField",
            "zh-CN": "@private P"
          },
          "tip": "isListField | @private Passed by Form.List props. Do not use since it will break by path check."
        },
        "name": "isListField",
        "description": "@private Passed by Form.List props. Do not use since it will break by path check.",
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
            "en-US": "isList",
            "zh-CN": "@private P"
          },
          "tip": "isList | @private Passed by Form.List props. Do not use since it will break by path check."
        },
        "name": "isList",
        "description": "@private Passed by Form.List props. Do not use since it will break by path check.",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      }
    ],
    "supports": {
      "style": true,
      "className": true,
      "events": [
        {
          "name": "onReset"
        }
      ]
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "FormItem",
    "screenshot": "",
    "schema": {
      "componentName": "FormItem",
      "props": {}
    }
  }
];

export default {
  ...FormItemMeta,
  snippets
};
