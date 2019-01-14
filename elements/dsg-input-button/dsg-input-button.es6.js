import{LitElement,html}from"./node_modules/@polymer/lit-element/lit-element.js";class DsgInputButton extends LitElement{render(){return html`
<style>:host {
  display: block;
}

:host([hidden]) {
  display: none;
}

button {
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background-color: #DF5555;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 14px;
}</style>
<button id=${this.id} @click="${this.onClick}">+</button>`}static get properties(){return{onClick:{name:"onClick",type:"String",value:"",reflectToAttribute:!1,observer:!1},id:{name:"id",type:"String",value:"",reflectToAttribute:!1,observer:!1}}}tag(){return"dsg-input-button"}constructor(){super();this.id=""}onClick(){const event=new CustomEvent("buttonClicked",{detail:{button:this.id},bubbles:!0});this.dispatchEvent(event);console.log("clicked"+this.id)}connectedCallback(){super.connectedCallback()}}customElements.define("dsg-input-button",DsgInputButton);export{DsgInputButton};