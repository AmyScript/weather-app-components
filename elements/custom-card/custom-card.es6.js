import{LitElement,html}from"lit-element";class CustomCard extends LitElement{render(){return html`
<style>
:host { 
  box-sizing: border-box;
  width: ${this.width};
  height: ${this.height};
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 1px solid lightgrey;
}
:host([hidden]) { display: none; }
</style>
<slot></slot>
<div>
  <slot></slot>
</div>`}static get properties(){return{width:{name:"width",type:"String",value:"300px",reflectToAttribute:!1,observer:!1},height:{name:"height",type:"String",value:"300px",reflectToAttribute:!1,observer:!1}}}tag(){return"custom-card"}constructor(){super()}connectedCallback(){super.connectedCallback()}}customElements.define("custom-card",CustomCard);export{CustomCard};