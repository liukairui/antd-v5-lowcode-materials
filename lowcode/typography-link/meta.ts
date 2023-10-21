
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const TypographyLinkMeta: IPublicTypeComponentMetadata = {
  "componentName": "TypographyLink",
  "title": "TypographyLink",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "antd-5-lowcode-materials",
    "version": "0.1.0",
    "exportName": "TypographyLink",
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
            "en-US": "ellipsis",
            "zh-CN": "ellipsis"
          }
        },
        "name": "ellipsis",
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
            "en-US": "editable",
            "zh-CN": "editable"
          }
        },
        "name": "editable",
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
                            "en-US": "text",
                            "zh-CN": "text"
                          }
                        },
                        "name": "text",
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
                            "en-US": "editing",
                            "zh-CN": "editing"
                          }
                        },
                        "name": "editing",
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
                            "en-US": "tooltip",
                            "zh-CN": "tooltip"
                          }
                        },
                        "name": "tooltip",
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
                            "en-US": "onStart",
                            "zh-CN": "onStart"
                          }
                        },
                        "name": "onStart",
                        "setter": {
                          "componentName": "FunctionSetter",
                          "isRequired": false
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
                            "en-US": "onCancel",
                            "zh-CN": "onCancel"
                          }
                        },
                        "name": "onCancel",
                        "setter": {
                          "componentName": "FunctionSetter",
                          "isRequired": false
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "onEnd",
                            "zh-CN": "onEnd"
                          }
                        },
                        "name": "onEnd",
                        "setter": {
                          "componentName": "FunctionSetter",
                          "isRequired": false
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "maxLength",
                            "zh-CN": "maxLength"
                          }
                        },
                        "name": "maxLength",
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
                            "en-US": "autoSize",
                            "zh-CN": "autoSize"
                          }
                        },
                        "name": "autoSize",
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
                                            "en-US": "minRows",
                                            "zh-CN": "minRows"
                                          }
                                        },
                                        "name": "minRows",
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
                                            "en-US": "maxRows",
                                            "zh-CN": "maxRows"
                                          }
                                        },
                                        "name": "maxRows",
                                        "setter": {
                                          "componentName": "NumberSetter",
                                          "isRequired": false,
                                          "initialValue": 0
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
                            "en-US": "triggerType",
                            "zh-CN": "triggerType"
                          }
                        },
                        "name": "triggerType",
                        "setter": {
                          "componentName": "ArraySetter",
                          "props": {
                            "itemSetter": {
                              "componentName": "RadioGroupSetter",
                              "props": {
                                "dataSource": [
                                  {
                                    "label": "icon",
                                    "value": "icon"
                                  },
                                  {
                                    "label": "text",
                                    "value": "text"
                                  }
                                ],
                                "options": [
                                  {
                                    "label": "icon",
                                    "value": "icon"
                                  },
                                  {
                                    "label": "text",
                                    "value": "text"
                                  }
                                ]
                              },
                              "initialValue": "icon"
                            }
                          },
                          "initialValue": []
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "enterIcon",
                            "zh-CN": "enterIcon"
                          }
                        },
                        "name": "enterIcon",
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
            "en-US": "copyable",
            "zh-CN": "copyable"
          }
        },
        "name": "copyable",
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
                            "en-US": "text",
                            "zh-CN": "text"
                          }
                        },
                        "name": "text",
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
                            "en-US": "onCopy",
                            "zh-CN": "onCopy"
                          }
                        },
                        "name": "onCopy",
                        "setter": {
                          "componentName": "FunctionSetter"
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
                            "en-US": "tooltips",
                            "zh-CN": "tooltips"
                          }
                        },
                        "name": "tooltips",
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
                            "en-US": "format",
                            "zh-CN": "format"
                          }
                        },
                        "name": "format",
                        "setter": {
                          "componentName": "RadioGroupSetter",
                          "props": {
                            "dataSource": [
                              {
                                "label": "text/plain",
                                "value": "text/plain"
                              },
                              {
                                "label": "text/html",
                                "value": "text/html"
                              }
                            ],
                            "options": [
                              {
                                "label": "text/plain",
                                "value": "text/plain"
                              },
                              {
                                "label": "text/html",
                                "value": "text/html"
                              }
                            ]
                          },
                          "initialValue": "text/plain"
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
            "en-US": "type",
            "zh-CN": "type"
          }
        },
        "name": "type",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "danger",
                "value": "danger"
              },
              {
                "label": "secondary",
                "value": "secondary"
              },
              {
                "label": "success",
                "value": "success"
              },
              {
                "label": "warning",
                "value": "warning"
              }
            ],
            "options": [
              {
                "label": "danger",
                "value": "danger"
              },
              {
                "label": "secondary",
                "value": "secondary"
              },
              {
                "label": "success",
                "value": "success"
              },
              {
                "label": "warning",
                "value": "warning"
              }
            ]
          },
          "initialValue": "danger"
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
            "en-US": "code",
            "zh-CN": "code"
          }
        },
        "name": "code",
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
            "en-US": "mark",
            "zh-CN": "mark"
          }
        },
        "name": "mark",
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
            "en-US": "underline",
            "zh-CN": "underline"
          }
        },
        "name": "underline",
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
            "en-US": "delete",
            "zh-CN": "delete"
          }
        },
        "name": "delete",
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
            "en-US": "strong",
            "zh-CN": "strong"
          }
        },
        "name": "strong",
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
            "en-US": "keyboard",
            "zh-CN": "keyboard"
          }
        },
        "name": "keyboard",
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
            "en-US": "italic",
            "zh-CN": "italic"
          }
        },
        "name": "italic",
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
            "en-US": "direction",
            "zh-CN": "direction"
          }
        },
        "name": "direction",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "ltr",
                "value": "ltr"
              },
              {
                "label": "rtl",
                "value": "rtl"
              }
            ],
            "options": [
              {
                "label": "ltr",
                "value": "ltr"
              },
              {
                "label": "rtl",
                "value": "rtl"
              }
            ]
          },
          "initialValue": "ltr"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "download",
            "zh-CN": "download"
          }
        },
        "name": "download",
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
            "en-US": "hrefLang",
            "zh-CN": "hrefLang"
          }
        },
        "name": "hrefLang",
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
            "en-US": "media",
            "zh-CN": "media"
          }
        },
        "name": "media",
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
            "en-US": "ping",
            "zh-CN": "ping"
          }
        },
        "name": "ping",
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
            "en-US": "referrerPolicy",
            "zh-CN": "referrerPolicy"
          }
        },
        "name": "referrerPolicy",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "",
                "value": ""
              },
              {
                "label": "no-referrer",
                "value": "no-referrer"
              },
              {
                "label": "no-referrer-when-downgrade",
                "value": "no-referrer-when-downgrade"
              },
              {
                "label": "origin",
                "value": "origin"
              },
              {
                "label": "origin-when-cross-origin",
                "value": "origin-when-cross-origin"
              },
              {
                "label": "same-origin",
                "value": "same-origin"
              },
              {
                "label": "strict-origin",
                "value": "strict-origin"
              },
              {
                "label": "strict-origin-when-cross-origin",
                "value": "strict-origin-when-cross-origin"
              },
              {
                "label": "unsafe-url",
                "value": "unsafe-url"
              }
            ],
            "options": [
              {
                "label": "",
                "value": ""
              },
              {
                "label": "no-referrer",
                "value": "no-referrer"
              },
              {
                "label": "no-referrer-when-downgrade",
                "value": "no-referrer-when-downgrade"
              },
              {
                "label": "origin",
                "value": "origin"
              },
              {
                "label": "origin-when-cross-origin",
                "value": "origin-when-cross-origin"
              },
              {
                "label": "same-origin",
                "value": "same-origin"
              },
              {
                "label": "strict-origin",
                "value": "strict-origin"
              },
              {
                "label": "strict-origin-when-cross-origin",
                "value": "strict-origin-when-cross-origin"
              },
              {
                "label": "unsafe-url",
                "value": "unsafe-url"
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
    "title": "TypographyLink",
    "screenshot": "",
    "schema": {
      "componentName": "TypographyLink",
      "props": {}
    }
  }
];

export default {
  ...TypographyLinkMeta,
  snippets
};
