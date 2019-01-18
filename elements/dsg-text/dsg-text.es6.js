import{LitElement,html}from"./node_modules/@polymer/lit-element/lit-element.js";import"./node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js";class DsgText extends LitElement{render(){return html`
<style>:host { 
  display: block; 
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 14px;
  text-align: center;
  color: #959595;
  }
:host([hidden]) { display: none; }</style>
<slot></slot>
<div>${this.content}</div>`}static get properties(){return{content:{name:"content",type:"String",value:"",reflectToAttribute:!1,observer:!1}}}tag(){return"dsg-text"}constructor(){super()}connectedCallback(){super.connectedCallback()}}customElements.define("dsg-text",DsgText);export{DsgText};