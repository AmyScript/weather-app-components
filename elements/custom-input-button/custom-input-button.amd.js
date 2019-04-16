define(["exports", "lit-element"], function(_exports, _litElement) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.CustomInputButton = void 0;
  function _templateObject_ca6d2a90231811e99bbea5d77fc3a7d2() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\nbutton {\n  width: 23px;\n  height: 23px;\n  border-radius: 50%;\n  background-color: #DF5555;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  padding: 0px;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: bold;\n  line-height: normal;\n  font-size: 14px;\n}</style>\n<button id=",
      ' @click="',
      '">+</button>'
    ]);
    _templateObject_ca6d2a90231811e99bbea5d77fc3a7d2 = function _templateObject_ca6d2a90231811e99bbea5d77fc3a7d2() {
      return data;
    };
    return data;
  }
  var CustomInputButton = (function(_LitElement) {
    babelHelpers.inherits(CustomInputButton, _LitElement);
    babelHelpers.createClass(
      CustomInputButton,
      [
        {
          key: "render",
          value: function render() {
            return (0, _litElement.html)(
              _templateObject_ca6d2a90231811e99bbea5d77fc3a7d2(),
              this.buttonId,
              this.onClick
            );
          }
        },
        {
          key: "tag",
          value: function tag() {
            return "custom-input-button";
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
    function CustomInputButton() {
      var _this;
      babelHelpers.classCallCheck(this, CustomInputButton);
      _this = babelHelpers.possibleConstructorReturn(
        this,
        babelHelpers.getPrototypeOf(CustomInputButton).call(this)
      );
      _this.buttonId = "";
      _this.buttonFunction = function() {
        return console.log("hello there");
      };
      return _this;
    }
    babelHelpers.createClass(CustomInputButton, [
      {
        key: "onClick",
        value: function onClick() {
          var event = new CustomEvent("buttonClicked", {
            detail: { button: this.buttonId },
            bubbles: !0
          });
          this.dispatchEvent(event);
          this.buttonFunction();
        }
      },
      {
        key: "connectedCallback",
        value: function connectedCallback() {
          babelHelpers
            .get(
              babelHelpers.getPrototypeOf(CustomInputButton.prototype),
              "connectedCallback",
              this
            )
            .call(this);
        }
      }
    ]);
    return CustomInputButton;
  })(_litElement.LitElement);
  _exports.CustomInputButton = CustomInputButton;
  customElements.define("custom-input-button", CustomInputButton);
});
