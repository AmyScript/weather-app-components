import{LitElement,html}from"./node_modules/@polymer/lit-element/lit-element.js";class DsgInfoCard extends LitElement{render(){return html`
<style>:host {
  display: block;
}

:host([hidden]) {
  display: none;
}
</style>
`}static get properties(){return{imageUrl:{name:"imageUrl",type:"String",value:"\"\"",reflectToAttribute:!1,observer:!1}}}tag(){return"dsg-info-card"}constructor(){super()}connectedCallback(){super.connectedCallback()}}customElements.define("dsg-info-card",DsgInfoCard);export{DsgInfoCard};