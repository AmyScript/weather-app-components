import{LitElement,html}from"./node_modules/@polymer/lit-element/lit-element.js";class DsgInput extends LitElement{render(){return html`
<style>:host {
  display: block;
}

:host([hidden]) {
  display: none;
}

input {
  background: #FFFFFF;
  border-radius: 20px;
  border-style: none;
}
</style>
<input
  id=${this.id}
  type="text"
  value=${this.city}
  @input=${this.handleInput}
/>`}static get properties(){return{city:{name:"city",type:"String",value:" ",reflectToAttribute:!1,observer:!1},id:{name:"id",type:"String",value:" ",reflectToAttribute:!1,observer:!1}}}tag(){return"dsg-input"}constructor(){super();this.city="";this.id=""}handleInput(e){this.city=e.target.value}connectedCallback(){super.connectedCallback()}}customElements.define("dsg-input",DsgInput);export{DsgInput};