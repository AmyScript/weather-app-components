define([
  "exports",
  "./node_modules/@polymer/lit-element/lit-element.js",
  "./node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js",
  "./node_modules/@amyscript/dsg-image/dsg-image.js",
  "./node_modules/@amyscript/dsg-heading/dsg-heading.js",
  "./node_modules/@amyscript/dsg-text/dsg-text.js",
  "./node_modules/@amyscript/dsg-card/dsg-card.js"
], function(
  _exports,
  _litElement,
  _customElementsEs5Adapter,
  _dsgImage,
  _dsgHeading,
  _dsgText,
  _dsgCard
) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.DsgInfoCard = void 0;
  function _templateObject_f92899501b4d11e99a8117eaa7bab254() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  align-items: center;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\ndsg-image {\n  padding-right: 20px;\n}\n\n.card-title {\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: bold;\n  line-height: normal;\n  font-size: 24px;\n  text-align: center;\n  color: #DF5555;\n  padding-bottom: 15px;\n}\n\n.card-content {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 25px;\n}</style>\n<slot></slot>\n<dsg-card width=",
      " height=",
      '>\n  <div class="card-title">',
      '</div>\n  <div class="card-content">\n    <dsg-image url=',
      "></dsg-image><dsg-heading content=",
      "></dsg-heading>\n  </div>\n  <dsg-text content=",
      "></dsg-text>\n</dsg-card>"
    ]);
    _templateObject_f92899501b4d11e99a8117eaa7bab254 = function _templateObject_f92899501b4d11e99a8117eaa7bab254() {
      return data;
    };
    return data;
  }
  var DsgInfoCard = (function(_LitElement) {
    babelHelpers.inherits(DsgInfoCard, _LitElement);
    babelHelpers.createClass(
      DsgInfoCard,
      [
        {
          key: "render",
          value: function render() {
            return (0, _litElement.html)(
              _templateObject_f92899501b4d11e99a8117eaa7bab254(),
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
            return "dsg-info-card";
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
    function DsgInfoCard() {
      var _this;
      babelHelpers.classCallCheck(this, DsgInfoCard);
      _this = babelHelpers.possibleConstructorReturn(
        this,
        babelHelpers.getPrototypeOf(DsgInfoCard).call(this)
      );
      _this.imageUrl = "";
      _this.heading = "";
      _this.text = "";
      _this.cardHeight = "100%";
      _this.cardWidth = "300px";
      _this.cardTitle = "";
      return _this;
    }
    babelHelpers.createClass(DsgInfoCard, [
      {
        key: "connectedCallback",
        value: function connectedCallback() {
          babelHelpers
            .get(
              babelHelpers.getPrototypeOf(DsgInfoCard.prototype),
              "connectedCallback",
              this
            )
            .call(this);
        }
      }
    ]);
    return DsgInfoCard;
  })(_litElement.LitElement);
  _exports.DsgInfoCard = DsgInfoCard;
  customElements.define("dsg-info-card", DsgInfoCard);
});
