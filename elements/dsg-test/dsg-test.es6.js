import{LitElement,html}from"./node_modules/@polymer/lit-element/lit-element.js";class DsgTest extends LitElement{render(){return html`
<style>:host {
  display: block;
}

:host([hidden]) {
  display: none;
}
</style>
<slot></slot>`}static get properties(){return{}}tag(){return"dsg-test"}constructor(){super()}connectedCallback(){super.connectedCallback()}}customElements.define("dsg-test",DsgTest);export{DsgTest};