import{LitElement,html}from"./node_modules/@polymer/lit-element/lit-element.js";class DsgImage extends LitElement{render(){return html`
<style>:host { 
  display: flex; 
  justify-content: center;
  }
  img {
    border-radius: 50%;
    border: 2px solid #E8E8E8;
  }
:host([hidden]) { display: none; }</style>
<div>
  <img
    src=${this.url}
  />
</div>`}static get properties(){return{url:{name:"url",type:"String",value:"",reflectToAttribute:!1,observer:!1}}}tag(){return"dsg-image"}constructor(){super()}connectedCallback(){super.connectedCallback()}}customElements.define("dsg-image",DsgImage);export{DsgImage};