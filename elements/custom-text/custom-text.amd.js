define(["exports", "lit-element"], function(_exports, _litElement) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.CustomText = void 0;
  function _templateObject_d0881fc0231811e9a05975d125c0d2f6() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host { \n  display: block; \n  font-family: Roboto;\n  font-style: normal;\n  font-weight: bold;\n  line-height: normal;\n  font-size: 14px;\n  text-align: center;\n  color: #959595;\n  }\n:host([hidden]) { display: none; }</style>\n<slot></slot>\n<div>",
      "</div>"
    ]);
    _templateObject_d0881fc0231811e9a05975d125c0d2f6 = function _templateObject_d0881fc0231811e9a05975d125c0d2f6() {
      return data;
    };
    return data;
  }
  var CustomText = (function(_LitElement) {
    babelHelpers.inherits(CustomText, _LitElement);
    babelHelpers.createClass(
      CustomText,
      [
        {
          key: "render",
          value: function render() {
            return (0, _litElement.html)(
              _templateObject_d0881fc0231811e9a05975d125c0d2f6(),
              this.content
            );
          }
        },
        {
          key: "tag",
          value: function tag() {
            return "custom-text";
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
    function CustomText() {
      babelHelpers.classCallCheck(this, CustomText);
      return babelHelpers.possibleConstructorReturn(
        this,
        babelHelpers.getPrototypeOf(CustomText).call(this)
      );
    }
    babelHelpers.createClass(CustomText, [
      {
        key: "connectedCallback",
        value: function connectedCallback() {
          babelHelpers
            .get(
              babelHelpers.getPrototypeOf(CustomText.prototype),
              "connectedCallback",
              this
            )
            .call(this);
        }
      }
    ]);
    return CustomText;
  })(_litElement.LitElement);
  _exports.CustomText = CustomText;
  customElements.define("custom-text", CustomText);
});
