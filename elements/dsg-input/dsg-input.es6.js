import{LitElement,html}from"./node_modules/@polymer/lit-element/lit-element.js";class DsgInput extends LitElement{render(){return html`
<style>:host {
  display: block;
}

:host([hidden]) {
  display: none;
}
</style>
<slot></slot>
<div>${this.city}</div>`}static get properties(){return{city:{name:"city",type:"String",value:"",reflectToAttribute:!1,observer:!1}}}tag(){return"dsg-input"}constructor(){super()}connectedCallback(){super.connectedCallback()}}customElements.define("dsg-input",DsgInput);export{DsgInput};