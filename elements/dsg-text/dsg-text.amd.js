define(["exports","lit-element"],function(_exports,_litElement){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.DsgText=void 0;function _templateObject_9fb2b60020f011e984e7712675f07292(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host { \n  display: block; \n  font-family: Roboto;\n  font-style: normal;\n  font-weight: bold;\n  line-height: normal;\n  font-size: 14px;\n  text-align: center;\n  color: #959595;\n  }\n:host([hidden]) { display: none; }</style>\n<slot></slot>\n<div>","</div>"]);_templateObject_9fb2b60020f011e984e7712675f07292=function _templateObject_9fb2b60020f011e984e7712675f07292(){return data};return data}var DsgText=function(_LitElement){babelHelpers.inherits(DsgText,_LitElement);babelHelpers.createClass(DsgText,[{key:"render",value:function render(){return(0,_litElement.html)(_templateObject_9fb2b60020f011e984e7712675f07292(),this.content)}},{key:"tag",value:function tag(){return"dsg-text"}}],[{key:"properties",get:function get(){return{content:{name:"content",type:"String",value:"",reflectToAttribute:!1,observer:!1}}}}]);function DsgText(){babelHelpers.classCallCheck(this,DsgText);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DsgText).call(this))}babelHelpers.createClass(DsgText,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(DsgText.prototype),"connectedCallback",this).call(this)}}]);return DsgText}(_litElement.LitElement);_exports.DsgText=DsgText;customElements.define("dsg-text",DsgText)});