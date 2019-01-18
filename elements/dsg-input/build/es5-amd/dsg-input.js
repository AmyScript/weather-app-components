define([
  "exports",
  "./node_modules/@polymer/lit-element/lit-element.js",
  "./node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js"
], function(_exports, _litElement, _customElementsEs5Adapter) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.DsgInput = void 0;
  function _templateObject_999202401b4f11e9acb4e322850ccda6() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\ninput {\n  background: #FFFFFF;\n  border-radius: 20px;\n  border-style: none;\n  font-size: 25px;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: bold;\n  line-height: normal;\n  width: ",
      ";\n  border: 1px solid lightgrey;\n}\n\ninput:focus {\n  outline: none;\n}</style>\n<input\n  id=",
      '\n  type="text"\n  value=',
      "\n  @input=",
      "\n/>"
    ]);
    _templateObject_999202401b4f11e9acb4e322850ccda6 = function _templateObject_999202401b4f11e9acb4e322850ccda6() {
      return data;
    };
    return data;
  }
  var DsgInput = (function(_LitElement) {
    babelHelpers.inherits(DsgInput, _LitElement);
    babelHelpers.createClass(
      DsgInput,
      [
        {
          key: "render",
          value: function render() {
            return (0, _litElement.html)(
              _templateObject_999202401b4f11e9acb4e322850ccda6(),
              this.width,
              this.inputId,
              this.city,
              this.handleInput
            );
          }
        },
        {
          key: "tag",
          value: function tag() {
            return "dsg-input";
          }
        }
      ],
      [
        {
          key: "properties",
          get: function get() {
            return {
              city: {
                name: "city",
                type: "String",
                value: " ",
                reflectToAttribute: !1,
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
    function DsgInput() {
      var _this;
      babelHelpers.classCallCheck(this, DsgInput);
      _this = babelHelpers.possibleConstructorReturn(
        this,
        babelHelpers.getPrototypeOf(DsgInput).call(this)
      );
      _this.city = "";
      _this.inputId = "";
      _this.width = "100%";
      return _this;
    }
    babelHelpers.createClass(DsgInput, [
      {
        key: "handleInput",
        value: function handleInput(e) {
          this.city = e.target.value;
        }
      },
      {
        key: "connectedCallback",
        value: function connectedCallback() {
          babelHelpers
            .get(
              babelHelpers.getPrototypeOf(DsgInput.prototype),
              "connectedCallback",
              this
            )
            .call(this);
        }
      }
    ]);
    return DsgInput;
  })(_litElement.LitElement);
  _exports.DsgInput = DsgInput;
  customElements.define("dsg-input", DsgInput);
});
