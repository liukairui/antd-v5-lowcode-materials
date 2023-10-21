
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const GridRowMeta: IPublicTypeComponentMetadata = {
  "componentName": "GridRow",
  "title": "GridRow",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "antd-5-lowcode-materials",
    "version": "0.1.0",
    "exportName": "GridRow",
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
            "en-US": "gutter",
            "zh-CN": "gutter"
          }
        },
        "name": "gutter",
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
                "componentName": "MixedSetter",
                "props": {}
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "align",
            "zh-CN": "align"
          }
        },
        "name": "align",
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
                      "label": "middle",
                      "value": "middle"
                    },
                    {
                      "label": "stretch",
                      "value": "stretch"
                    },
                    {
                      "label": "top",
                      "value": "top"
                    },
                    {
                      "label": "bottom",
                      "value": "bottom"
                    }
                  ],
                  "options": [
                    {
                      "label": "middle",
                      "value": "middle"
                    },
                    {
                      "label": "stretch",
                      "value": "stretch"
                    },
                    {
                      "label": "top",
                      "value": "top"
                    },
                    {
                      "label": "bottom",
                      "value": "bottom"
                    }
                  ]
                },
                "initialValue": "middle"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "justify",
            "zh-CN": "justify"
          }
        },
        "name": "justify",
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
                      "label": "center",
                      "value": "center"
                    },
                    {
                      "label": "space-around",
                      "value": "space-around"
                    },
                    {
                      "label": "space-between",
                      "value": "space-between"
                    },
                    {
                      "label": "space-evenly",
                      "value": "space-evenly"
                    },
                    {
                      "label": "end",
                      "value": "end"
                    },
                    {
                      "label": "start",
                      "value": "start"
                    }
                  ],
                  "options": [
                    {
                      "label": "center",
                      "value": "center"
                    },
                    {
                      "label": "space-around",
                      "value": "space-around"
                    },
                    {
                      "label": "space-between",
                      "value": "space-between"
                    },
                    {
                      "label": "space-evenly",
                      "value": "space-evenly"
                    },
                    {
                      "label": "end",
                      "value": "end"
                    },
                    {
                      "label": "start",
                      "value": "start"
                    }
                  ]
                },
                "initialValue": "center"
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "wrap",
            "zh-CN": "wrap"
          }
        },
        "name": "wrap",
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
      "style": true,
      "className": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "GridRow",
    "screenshot": "",
    "schema": {
      "componentName": "GridRow",
      "props": {}
    }
  }
];

export default {
  ...GridRowMeta,
  snippets
};
