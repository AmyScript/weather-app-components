define(["exports","./node_modules/@polymer/lit-element/lit-element.js"],function(_exports,_litElement){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.DsgInfoCard=void 0;function _templateObject_35605820184411e98343db15b4110067(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n"]);_templateObject_35605820184411e98343db15b4110067=function _templateObject_35605820184411e98343db15b4110067(){return data};return data}var DsgInfoCard=function(_LitElement){babelHelpers.inherits(DsgInfoCard,_LitElement);babelHelpers.createClass(DsgInfoCard,[{key:"render",value:function render(){return(0,_litElement.html)(_templateObject_35605820184411e98343db15b4110067())}},{key:"tag",value:function tag(){return"dsg-info-card"}}],[{key:"properties",get:function get(){return{imageUrl:{name:"imageUrl",type:"String",value:"\"\"",reflectToAttribute:!1,observer:!1}}}}]);function DsgInfoCard(){babelHelpers.classCallCheck(this,DsgInfoCard);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DsgInfoCard).call(this))}babelHelpers.createClass(DsgInfoCard,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(DsgInfoCard.prototype),"connectedCallback",this).call(this)}}]);return DsgInfoCard}(_litElement.LitElement);_exports.DsgInfoCard=DsgInfoCard;customElements.define("dsg-info-card",DsgInfoCard)});