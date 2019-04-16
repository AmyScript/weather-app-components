define([
  "exports",
  "lit-element",
  "@amyscript/custom-image/custom-image.js",
  "@amyscript/custom-heading/custom-heading.js",
  "@amyscript/custom-text/custom-text.js",
  "@amyscript/custom-card/custom-card.js"
], function(_exports, _litElement, _dsgImage, _dsgHeading, _dsgText, _dsgCard) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.CustomInfoCard = void 0;
  function _templateObject_d5d14600231811e9863859d039de87a6() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  align-items: center;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\ndsg-image {\n  padding-right: 15px;\n}\n\n.card-title {\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: bold;\n  line-height: normal;\n  font-size: 24px;\n  text-align: center;\n  color: #DF5555;\n  padding-bottom: 15px;\n}\n\n.card-content {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 25px;\n}</style>\n<slot></slot>\n<custom-card width=",
      " height=",
      '>\n  <div class="card-title">',
      '</div>\n  <div class="card-content">\n    <custom-image url=',
      "></custom-image><custom-heading content=",
      "></custom-heading>\n  </div>\n  <custom-text content=",
      "></custom-text>\n</custom-card>"
    ]);
    _templateObject_d5d14600231811e9863859d039de87a6 = function _templateObject_d5d14600231811e9863859d039de87a6() {
      return data;
    };
    return data;
  }
  var CustomInfoCard = (function(_LitElement) {
    babelHelpers.inherits(CustomInfoCard, _LitElement);
    babelHelpers.createClass(
      CustomInfoCard,
      [
        {
          key: "render",
          value: function render() {
            return (0, _litElement.html)(
              _templateObject_d5d14600231811e9863859d039de87a6(),
              this.cardWidth,
              this.cardHeight,
              this.cardTitle,
              this.imageUrl,
              this.heading,
              this.text
            );
          }
        },
        {
          key: "tag",
          value: function tag() {
            return "custom-info-card";
          }
        }
      ],
      [
        {
          key: "properties",
          get: function get() {
            return {
              imageUrl: {
                name: "imageUrl",
                type: "String",
                value: '""',
                reflectToAttribute: !1,
                observer: !1
              },
              heading: {
                name: "heading",
                type: "String",
                value: '""',
                reflectToAttribute: !1,
                observer: !1
              },
              text: {
                name: "text",
                type: "String",
                value: '""',
                reflectToAttribute: !1,
                observer: !1
              },
              cardHeight: {
                name: "cardHeight",
                type: "String",
                value: '""',
                reflectToAttribute: !1,
                observer: !1
              },
              cardWidth: {
                name: "cardWidth",
                type: "String",
                value: '""',
                reflectToAttribute: !1,
                observer: !1
              },
              cardTitle: {
                name: "cardTitle",
                type: "String",
                value: '""',
                reflectToAttribute: !1,
                observer: !1
              }
            };
          }
        }
      ]
    );
    function CustomInfoCard() {
      var _this;
      babelHelpers.classCallCheck(this, CustomInfoCard);
      _this = babelHelpers.possibleConstructorReturn(
        this,
        babelHelpers.getPrototypeOf(CustomInfoCard).call(this)
      );
      _this.imageUrl = "";
      _this.heading = "";
      _this.text = "";
      _this.cardHeight = "100%";
      _this.cardWidth = "300px";
      _this.cardTitle = "";
      return _this;
    }
    babelHelpers.createClass(CustomInfoCard, [
      {
        key: "connectedCallback",
        value: function connectedCallback() {
          babelHelpers
            .get(
              babelHelpers.getPrototypeOf(CustomInfoCard.prototype),
              "connectedCallback",
              this
            )
            .call(this);
        }
      }
    ]);
    return CustomInfoCard;
  })(_litElement.LitElement);
  _exports.CustomInfoCard = CustomInfoCard;
  customElements.define("custom-info-card", CustomInfoCard);
});
