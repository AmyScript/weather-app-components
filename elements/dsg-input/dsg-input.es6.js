import{LitElement,html}from"@polymer/lit-element";import"@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js";class DsgInput extends LitElement{render(){return html`
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
  font-size: 15px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  width: ${this.width};
  border: 1px solid lightgrey;
  padding: 5px;
  padding-left: 10px;
}

input:focus {
  outline: none;
}</style>
<input
  id=${this.inputId}
  type="text"
  value=${this.city}
  @input=${this.handleInput}
/>`}static get properties(){return{city:{name:"city",type:"String",value:" ",reflect:!0,attribute:"value",observer:!1},inputId:{name:"inputId",type:"String",value:" ",reflectToAttribute:!1,observer:!1},width:{name:"width",type:"String",value:" ",reflectToAttribute:!1,observer:!1}}}tag(){return"dsg-input"}constructor(){super();this.city="";this.inputId="";this.width="100%"}handleInput(e){this.city=e.target.value}connectedCallback(){super.connectedCallback()}attributeChangedCallback(name,oldval,newval){super.attributeChangedCallback(name,oldval,newval)}}customElements.define("dsg-input",DsgInput);export{DsgInput};