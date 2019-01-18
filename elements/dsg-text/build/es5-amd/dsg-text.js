define([
  "exports",
  "./node_modules/@polymer/lit-element/lit-element.js",
  "./node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js"
], function(_exports, _litElement, _customElementsEs5Adapter) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.DsgText = void 0;
  function _templateObject_ef31c9801b4d11e9938eb33f38ed4ace() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host { \n  display: block; \n  font-family: Roboto;\n  font-style: normal;\n  font-weight: bold;\n  line-height: normal;\n  font-size: 14px;\n  text-align: center;\n  color: #959595;\n  }\n:host([hidden]) { display: none; }</style>\n<slot></slot>\n<div>",
      "</div>"
    ]);
    _templateObject_ef31c9801b4d11e9938eb33f38ed4ace = function _templateObject_ef31c9801b4d11e9938eb33f38ed4ace() {
      return data;
    };
    return data;
  }
  var DsgText = (function(_LitElement) {
    babelHelpers.inherits(DsgText, _LitElement);
    babelHelpers.createClass(
      DsgText,
      [
        {
          key: "render",
          value: function render() {
            return (0, _litElement.html)(
              _templateObject_ef31c9801b4d11e9938eb33f38ed4ace(),
              this.content
            );
          }
        },
        {
          key: "tag",
          value: function tag() {
            return "dsg-text";
          }
        }
      ],
      [
        {
          key: "properties",
          get: function get() {
            return {
              content: {
                name: "content",
                type: "String",
                value: "",
                reflectToAttribute: !1,
                observer: !1
              }
            };
          }
        }
      ]
    );
    function DsgText() {
      babelHelpers.classCallCheck(this, DsgText);
      return babelHelpers.possibleConstructorReturn(
        this,
        babelHelpers.getPrototypeOf(DsgText).call(this)
      );
    }
    babelHelpers.createClass(DsgText, [
      {
        key: "connectedCallback",
        value: function connectedCallback() {
          babelHelpers
            .get(
              babelHelpers.getPrototypeOf(DsgText.prototype),
              "connectedCallback",
              this
            )
            .call(this);
        }
      }
    ]);
    return DsgText;
  })(_litElement.LitElement);
  _exports.DsgText = DsgText;
  customElements.define("dsg-text", DsgText);
});
