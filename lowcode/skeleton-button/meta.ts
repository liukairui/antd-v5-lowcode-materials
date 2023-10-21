
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const SkeletonButtonMeta: IPublicTypeComponentMetadata = {
  "componentName": "SkeletonButton",
  "title": "SkeletonButton",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "antd-5-lowcode-materials",
    "version": "0.1.0",
    "exportName": "SkeletonButton",
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
                "label": "large",
                "value": "large"
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
                "label": "large",
                "value": "large"
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
            "en-US": "block",
            "zh-CN": "block"
          }
        },
        "name": "block",
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
            "en-US": "shape",
            "zh-CN": "shape"
          }
        },
        "name": "shape",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "default",
                "value": "default"
              },
              {
                "label": "circle",
                "value": "circle"
              },
              {
                "label": "round",
                "value": "round"
              },
              {
                "label": "square",
                "value": "square"
              }
            ],
            "options": [
              {
                "label": "default",
                "value": "default"
              },
              {
                "label": "circle",
                "value": "circle"
              },
              {
                "label": "round",
                "value": "round"
              },
              {
                "label": "square",
                "value": "square"
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
            "en-US": "active",
            "zh-CN": "active"
          }
        },
        "name": "active",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
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
    "title": "SkeletonButton",
    "screenshot": "",
    "schema": {
      "componentName": "SkeletonButton",
      "props": {}
    }
  }
];

export default {
  ...SkeletonButtonMeta,
  snippets
};
