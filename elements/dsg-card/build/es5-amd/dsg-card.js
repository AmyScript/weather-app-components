define([
  "exports",
  "./node_modules/@polymer/lit-element/lit-element.js",
  "./node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js"
], function(_exports, _litElement, _customElementsEs5Adapter) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.DsgCard = void 0;
  function _templateObject_2ad901801b4c11e9867f713142cb8455() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>\n:host { \n  box-sizing: border-box;\n  width: ",
      ";\n  height: ",
      ";\n  border-radius: 20px;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: white;\n  border: 1px solid lightgrey;\n}\n:host([hidden]) { display: none; }\n</style>\n<slot></slot>\n<div>\n  <slot></slot>\n</div>"
    ]);
    _templateObject_2ad901801b4c11e9867f713142cb8455 = function _templateObject_2ad901801b4c11e9867f713142cb8455() {
      return data;
    };
    return data;
  }
  var DsgCard = (function(_LitElement) {
    babelHelpers.inherits(DsgCard, _LitElement);
    babelHelpers.createClass(
      DsgCard,
      [
        {
          key: "render",
          value: function render() {
            return (0, _litElement.html)(
              _templateObject_2ad901801b4c11e9867f713142cb8455(),
              this.width,
              this.height
            );
          }
        },
        {
          key: "tag",
          value: function tag() {
            return "dsg-card";
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
    function DsgCard() {
      babelHelpers.classCallCheck(this, DsgCard);
      return babelHelpers.possibleConstructorReturn(
        this,
        babelHelpers.getPrototypeOf(DsgCard).call(this)
      );
    }
    babelHelpers.createClass(DsgCard, [
      {
        key: "connectedCallback",
        value: function connectedCallback() {
          babelHelpers
            .get(
              babelHelpers.getPrototypeOf(DsgCard.prototype),
              "connectedCallback",
              this
            )
            .call(this);
        }
      }
    ]);
    return DsgCard;
  })(_litElement.LitElement);
  _exports.DsgCard = DsgCard;
  customElements.define("dsg-card", DsgCard);
});