define(["exports","lit-element"],function(_exports,_litElement){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.CustomHeading=void 0;function _templateObject_e0875fa0604c11e9ac1113075b622db0(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host { \n  display: block;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: bold;\n  line-height: normal;\n  font-size: 64px;\n  color: #000000; \n  margin: 0px;\n}\n:host([hidden]) { display: none; }\nh3 {\n  margin: 0;\n}</style>\n<slot></slot>\n<div>","</div>"]);_templateObject_e0875fa0604c11e9ac1113075b622db0=function _templateObject_e0875fa0604c11e9ac1113075b622db0(){return data};return data}var CustomHeading=function(_LitElement){babelHelpers.inherits(CustomHeading,_LitElement);babelHelpers.createClass(CustomHeading,[{key:"render",value:function render(){return(0,_litElement.html)(_templateObject_e0875fa0604c11e9ac1113075b622db0(),this.content)}},{key:"tag",value:function tag(){return"custom-heading"}}],[{key:"properties",get:function get(){return{content:{name:"content",type:"String",value:"",reflectToAttribute:!1,observer:!1}}}}]);function CustomHeading(){var _this;babelHelpers.classCallCheck(this,CustomHeading);_this=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(CustomHeading).call(this));_this.content="";return _this}babelHelpers.createClass(CustomHeading,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(CustomHeading.prototype),"connectedCallback",this).call(this)}}]);return CustomHeading}(_litElement.LitElement);_exports.CustomHeading=CustomHeading;customElements.define("custom-heading",CustomHeading)});