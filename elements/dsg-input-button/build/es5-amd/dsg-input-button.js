define([
  "exports",
  "./node_modules/@polymer/lit-element/lit-element.js"
], function(_exports, _litElement) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.DsgInputButton = void 0;
  function _templateObject_e30f19001b4d11e98801a3d512802d3e() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\nbutton {\n  width: 23px;\n  height: 23px;\n  border-radius: 50%;\n  background-color: #DF5555;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  padding: 0px;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: bold;\n  line-height: normal;\n  font-size: 14px;\n}</style>\n<button id=",
      ' @click="',
      '">+</button>'
    ]);
    _templateObject_e30f19001b4d11e98801a3d512802d3e = function _templateObject_e30f19001b4d11e98801a3d512802d3e() {
      return data;
    };
    return data;
  }
  var DsgInputButton = (function(_LitElement) {
    babelHelpers.inherits(DsgInputButton, _LitElement);
    babelHelpers.createClass(
      DsgInputButton,
      [
        {
          key: "render",
          value: function render() {
            return (0, _litElement.html)(
              _templateObject_e30f19001b4d11e98801a3d512802d3e(),
              this.buttonId,
              this.onClick
            );
          }
        },
        {
          key: "tag",
          value: function tag() {
            return "dsg-input-button";
          }
        }
      ],
      [
        {
          key: "properties",
          get: function get() {
            return {
              buttonId: {
                name: "buttonId",
                type: "String",
                value: "",
                reflectToAttribute: !1,
                observer: !1
              },
              buttonFunction: {
                name: "buttonFunction",
                type: "Object",
                value: "",
                reflectToAttribute: !1,
                observer: !1
              }
            };
          }
        }
      ]
    );
    function DsgInputButton() {
      var _this;
      babelHelpers.classCallCheck(this, DsgInputButton);
      _this = babelHelpers.possibleConstructorReturn(
        this,
        babelHelpers.getPrototypeOf(DsgInputButton).call(this)
      );
      _this.buttonId = "";
      _this.buttonFunction = function() {
        return console.log("hello there");
      };
      return _this;
    }
    babelHelpers.createClass(DsgInputButton, [
      {
        key: "onClick",
        value: function onClick() {
          var event = new CustomEvent("buttonClicked", {
            detail: { button: this.buttonId },
            bubbles: !0
          });
          this.dispatchEvent(event);
          this.buttonFunction();
          console.log("clicked" + this.id);
        }
      },
      {
        key: "connectedCallback",
        value: function connectedCallback() {
          babelHelpers
            .get(
              babelHelpers.getPrototypeOf(DsgInputButton.prototype),
              "connectedCallback",
              this
            )
            .call(this);
        }
      }
    ]);
    return DsgInputButton;
  })(_litElement.LitElement);
  _exports.DsgInputButton = DsgInputButton;
  customElements.define("dsg-input-button", DsgInputButton);
});
