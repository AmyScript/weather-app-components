define(["exports", "lit-element"], function(_exports, _litElement) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.CustomInput = void 0;
  function _templateObject_d0a23770231811e997ad77dd54394240() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n  box-sizing: border-box;\n}\n\ninput {\n  background: #FFFFFF;\n  border-radius: 20px;\n  border-style: none;\n  font-size: 15px;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: bold;\n  line-height: normal;\n  width: ",
      ";\n  border: 1px solid lightgrey;\n  padding: 5px;\n  padding-left: 10px;\n  box-sizing: inherit;\n}\n\ninput:focus {\n  outline: none;\n}</style>\n<input\n  id=",
      '\n  type="text"\n  .value=',
      "\n  @input=",
      "\n/>"
    ]);
    _templateObject_d0a23770231811e997ad77dd54394240 = function _templateObject_d0a23770231811e997ad77dd54394240() {
      return data;
    };
    return data;
  }
  var CustomInput = (function(_LitElement) {
    babelHelpers.inherits(CustomInput, _LitElement);
    babelHelpers.createClass(
      CustomInput,
      [
        {
          key: "render",
          value: function render() {
            return (0, _litElement.html)(
              _templateObject_d0a23770231811e997ad77dd54394240(),
              this.width,
              this.inputId,
              this.cityProp,
              this.handleInput
            );
          }
        },
        {
          key: "tag",
          value: function tag() {
            return "custom-input";
          }
        }
      ],
      [
        {
          key: "properties",
          get: function get() {
            return {
              cityProp: {
                name: "cityProp",
                type: "String",
                value: " ",
                reflect: !0,
                attribute: !0,
                observer: !1
              },
              inputId: {
                name: "inputId",
                type: "String",
                value: " ",
                reflectToAttribute: !1,
                observer: !1
              },
              width: {
                name: "width",
                type: "String",
                value: " ",
                reflectToAttribute: !1,
                observer: !1
              }
            };
          }
        }
      ]
    );
    function CustomInput() {
      var _this;
      babelHelpers.classCallCheck(this, CustomInput);
      _this = babelHelpers.possibleConstructorReturn(
        this,
        babelHelpers.getPrototypeOf(CustomInput).call(this)
      );
      _this.cityProp = "";
      _this.inputId = "";
      _this.width = "100%";
      return _this;
    }
    babelHelpers.createClass(CustomInput, [
      {
        key: "handleInput",
        value: function handleInput(e) {
          this.cityProp = e.target.value;
        }
      },
      {
        key: "connectedCallback",
        value: function connectedCallback() {
          babelHelpers
            .get(
              babelHelpers.getPrototypeOf(CustomInput.prototype),
              "connectedCallback",
              this
            )
            .call(this);
        }
      },
      {
        key: "attributeChangedCallback",
        value: function attributeChangedCallback(name, oldval, newval) {
          babelHelpers
            .get(
              babelHelpers.getPrototypeOf(CustomInput.prototype),
              "attributeChangedCallback",
              this
            )
            .call(this, name, oldval, newval);
        }
      }
    ]);
    return CustomInput;
  })(_litElement.LitElement);
  _exports.CustomInput = CustomInput;
  customElements.define("custom-input", CustomInput);
});
