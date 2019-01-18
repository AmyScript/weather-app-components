import{LitElement,html}from"./node_modules/@polymer/lit-element/lit-element.js";import"./node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js";import"./node_modules/@amyscript/dsg-image/dsg-image.js";import"./node_modules/@amyscript/dsg-heading/dsg-heading.js";import"./node_modules/@amyscript/dsg-text/dsg-text.js";import"./node_modules/@amyscript/dsg-card/dsg-card.js";class DsgInfoCard extends LitElement{render(){return html`
<style>:host {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;
}

:host([hidden]) {
  display: none;
}

dsg-image {
  padding-right: 20px;
}

.card-title {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 24px;
  text-align: center;
  color: #DF5555;
  padding-bottom: 15px;
}

.card-content {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 25px;
}</style>
<slot></slot>
<dsg-card width=${this.cardWidth} height=${this.cardHeight}>
  <div class="card-title">${this.cardTitle}</div>
  <div class="card-content">
    <dsg-image url=${this.imageUrl}></dsg-image><dsg-heading content=${this.heading}></dsg-heading>
  </div>
  <dsg-text content=${this.text}></dsg-text>
</dsg-card>`}static get properties(){return{imageUrl:{name:"imageUrl",type:"String",value:"\"\"",reflectToAttribute:!1,observer:!1},heading:{name:"heading",type:"String",value:"\"\"",reflectToAttribute:!1,observer:!1},text:{name:"text",type:"String",value:"\"\"",reflectToAttribute:!1,observer:!1},cardHeight:{name:"cardHeight",type:"String",value:"\"\"",reflectToAttribute:!1,observer:!1},cardWidth:{name:"cardWidth",type:"String",value:"\"\"",reflectToAttribute:!1,observer:!1},cardTitle:{name:"cardTitle",type:"String",value:"\"\"",reflectToAttribute:!1,observer:!1}}}tag(){return"dsg-info-card"}constructor(){super();this.imageUrl="";this.heading="";this.text="";this.cardHeight="100%";this.cardWidth="300px";this.cardTitle=""}connectedCallback(){super.connectedCallback()}}customElements.define("dsg-info-card",DsgInfoCard);export{DsgInfoCard};