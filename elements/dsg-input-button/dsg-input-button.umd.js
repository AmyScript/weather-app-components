!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/lit-element")):"function"==typeof define&&define.amd?define(["exports","@polymer/lit-element"],t):t(e.DsgInputButton={},e.litElement)}(this,function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e,t,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=o(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function l(){var e,t,n=(e=["\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>\n<div>","</div>\n<div>","</div>"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return l=function(){return n},n}var f=function(e){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),u(this,o(n).call(this))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(n,t.LitElement),r(n,[{key:"render",value:function(){return t.html(l(),this.onClick,this.id)}},{key:"tag",value:function(){return"dsg-input-button"}}],[{key:"properties",get:function(){return{onClick:{name:"onClick",type:"String",value:"",reflectToAttribute:!1,observer:!1},id:{name:"id",type:"String",value:"",reflectToAttribute:!1,observer:!1}}}}]),r(n,[{key:"connectedCallback",value:function(){c(o(n.prototype),"connectedCallback",this).call(this)}}]),n}();customElements.define("dsg-input-button",f),e.DsgInputButton=f,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=dsg-input-button.umd.js.map
