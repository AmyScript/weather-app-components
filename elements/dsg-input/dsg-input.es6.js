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
  font-size: 25px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
}

input:focus {
  outline: none;
}</style>
<input
  id=${this.inputId}
  type="text"
  value=${this.city}
  @input=${this.handleInput}
/>`}static get properties(){return{city:{name:"city",type:"String",value:" ",reflectToAttribute:!1,observer:!1},inputId:{name:"inputId",type:"String",value:" ",reflectToAttribute:!1,observer:!1}}}tag(){return"dsg-input"}constructor(){super();this.city="";this.inputId=""}handleInput(e){this.city=e.target.value}connectedCallback(){super.connectedCallback()}}customElements.define("dsg-input",DsgInput);export{DsgInput};