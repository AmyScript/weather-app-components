define(["exports", "lit-element"], function(_exports, _litElement) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.CustomImage = void 0;
  function _templateObject_ca5b9e60231811e9abbef5a7a5bd80eb() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host { \n  display: flex; \n  justify-content: center;\n  }\n  img {\n    border-radius: 50%;\n    border: 2px solid #E8E8E8;\n  }\n:host([hidden]) { display: none; }</style>\n<div>\n  <img\n    src=",
      "\n  />\n</div>"
    ]);
    _templateObject_ca5b9e60231811e9abbef5a7a5bd80eb = function _templateObject_ca5b9e60231811e9abbef5a7a5bd80eb() {
      return data;
    };
    return data;
  }
  var CustomImage = (function(_LitElement) {
    babelHelpers.inherits(CustomImage, _LitElement);
    babelHelpers.createClass(
      CustomImage,
      [
        {
          key: "render",
          value: function render() {
            return (0, _litElement.html)(
              _templateObject_ca5b9e60231811e9abbef5a7a5bd80eb(),
              this.url
            );
          }
        },
        {
          key: "tag",
          value: function tag() {
            return "custom-image";
          }
        }
      ],
      [
        {
          key: "properties",
          get: function get() {
            return {
              url: {
                name: "url",
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
    function CustomImage() {
      babelHelpers.classCallCheck(this, CustomImage);
      return babelHelpers.possibleConstructorReturn(
        this,
        babelHelpers.getPrototypeOf(CustomImage).call(this)
      );
    }
    babelHelpers.createClass(CustomImage, [
      {
        key: "connectedCallback",
        value: function connectedCallback() {
          babelHelpers
            .get(
              babelHelpers.getPrototypeOf(CustomImage.prototype),
              "connectedCallback",
              this
            )
            .call(this);
        }
      }
    ]);
    return CustomImage;
  })(_litElement.LitElement);
  _exports.CustomImage = CustomImage;
  customElements.define("custom-image", CustomImage);
});
