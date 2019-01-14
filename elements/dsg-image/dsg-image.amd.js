define(["exports","./node_modules/@polymer/lit-element/lit-element.js"],function(_exports,_litElement){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.DsgImage=void 0;function _templateObject_050f0ef0183f11e9846407133db2c93a(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host { \n  display: flex; \n  justify-content: center;\n  }\n  img {\n    border-radius: 50%;\n    border: 2px solid #E8E8E8;\n  }\n:host([hidden]) { display: none; }</style>\n<div>\n  <img\n    src=","\n  />\n</div>"]);_templateObject_050f0ef0183f11e9846407133db2c93a=function _templateObject_050f0ef0183f11e9846407133db2c93a(){return data};return data}var DsgImage=function(_LitElement){babelHelpers.inherits(DsgImage,_LitElement);babelHelpers.createClass(DsgImage,[{key:"render",value:function render(){return(0,_litElement.html)(_templateObject_050f0ef0183f11e9846407133db2c93a(),this.url)}},{key:"tag",value:function tag(){return"dsg-image"}}],[{key:"properties",get:function get(){return{url:{name:"url",type:"String",value:"",reflectToAttribute:!1,observer:!1}}}}]);function DsgImage(){babelHelpers.classCallCheck(this,DsgImage);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DsgImage).call(this))}babelHelpers.createClass(DsgImage,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(DsgImage.prototype),"connectedCallback",this).call(this)}}]);return DsgImage}(_litElement.LitElement);_exports.DsgImage=DsgImage;customElements.define("dsg-image",DsgImage)});