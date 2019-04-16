define(["exports", "lit-element"], function(_exports, _litElement) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.CustomCard = void 0;
  function _templateObject_ca73ba40231811e9a9a3773217e42f3d() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>\n:host { \n  box-sizing: border-box;\n  width: ",
      ";\n  height: ",
      ";\n  border-radius: 20px;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: white;\n  border: 1px solid lightgrey;\n}\n:host([hidden]) { display: none; }\n</style>\n<slot></slot>\n<div>\n  <slot></slot>\n</div>"
    ]);
    _templateObject_ca73ba40231811e9a9a3773217e42f3d = function _templateObject_ca73ba40231811e9a9a3773217e42f3d() {
      return data;
    };
    return data;
  }
  var CustomCard = (function(_LitElement) {
    babelHelpers.inherits(CustomCard, _LitElement);
    babelHelpers.createClass(
      CustomCard,
      [
        {
          key: "render",
          value: function render() {
            return (0, _litElement.html)(
              _templateObject_ca73ba40231811e9a9a3773217e42f3d(),
              this.width,
              this.height
            );
          }
        },
        {
          key: "tag",
          value: function tag() {
            return "custom-card";
          }
        }
      ],
      [
        {
          key: "properties",
          get: function get() {
            return {
              width: {
                name: "width",
                type: "String",
                value: "300px",
                reflectToAttribute: !1,
                observer: !1
              },
              height: {
                name: "height",
                type: "String",
                value: "300px",
                reflectToAttribute: !1,
                observer: !1
              }
            };
          }
        }
      ]
    );
    function CustomCard() {
      babelHelpers.classCallCheck(this, CustomCard);
      return babelHelpers.possibleConstructorReturn(
        this,
        babelHelpers.getPrototypeOf(CustomCard).call(this)
      );
    }
    babelHelpers.createClass(CustomCard, [
      {
        key: "connectedCallback",
        value: function connectedCallback() {
          babelHelpers
            .get(
              babelHelpers.getPrototypeOf(CustomCard.prototype),
              "connectedCallback",
              this
            )
            .call(this);
        }
      }
    ]);
    return CustomCard;
  })(_litElement.LitElement);
  _exports.CustomCard = CustomCard;
  customElements.define("custom-card", CustomCard);
});
