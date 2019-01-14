import{LitElement,html}from"./node_modules/@polymer/lit-element/lit-element.js";class DsgInputButton extends LitElement{render(){return html`
<style>:host {
  display: block;
}

:host([hidden]) {
  display: none;
}
</style>
<slot></slot>
<div>${this.onClick}</div>
<div>${this.id}</div>`}static get properties(){return{onClick:{name:"onClick",type:"String",value:"",reflectToAttribute:!1,observer:!1},id:{name:"id",type:"String",value:"",reflectToAttribute:!1,observer:!1}}}tag(){return"dsg-input-button"}constructor(){super()}connectedCallback(){super.connectedCallback()}}customElements.define("dsg-input-button",DsgInputButton);export{DsgInputButton};