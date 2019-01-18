import{LitElement,html}from"./node_modules/@polymer/lit-element/lit-element.js";import"./node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js";class DsgInputButton extends LitElement{render(){return html`
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
<button id=${this.buttonId} @click="${this.onClick}">+</button>`}static get properties(){return{buttonId:{name:"buttonId",type:"String",value:"",reflectToAttribute:!1,observer:!1},buttonFunction:{name:"buttonFunction",type:"Object",value:"",reflectToAttribute:!1,observer:!1}}}tag(){return"dsg-input-button"}constructor(){super();this.buttonId="";this.buttonFunction=()=>console.log("hello there")}onClick(){const event=new CustomEvent("buttonClicked",{detail:{button:this.buttonId},bubbles:!0});this.dispatchEvent(event);this.buttonFunction();console.log("clicked"+this.id)}connectedCallback(){super.connectedCallback()}}customElements.define("dsg-input-button",DsgInputButton);export{DsgInputButton};