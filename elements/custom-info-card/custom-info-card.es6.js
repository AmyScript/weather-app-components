import{LitElement,html}from"lit-element";import"@amyscript/custom-image/custom-image.js";import"@amyscript/custom-heading/custom-heading.js";import"@amyscript/custom-text/custom-text.js";import"@amyscript/custom-card/custom-card.js";class CustomInfoCard extends LitElement{render(){return html`
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

custom-image {
  padding-right: 15px;
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
<custom-card width="${this.cardWidth}" height="${this.cardHeight}">
  <div class="card-title">${this.cardTitle}</div>
  <div class="card-content">
    <custom-image url="${this.imageUrl}"></custom-image
    ><custom-heading content="${this.heading}"></custom-heading>
  </div>
  <custom-text content="${this.text}"></custom-text>
</custom-card>`}static get properties(){return{imageUrl:{name:"imageUrl",type:"String",value:"\"\"",reflectToAttribute:!1,observer:!1},heading:{name:"heading",type:"String",value:"\"\"",reflectToAttribute:!1,observer:!1},text:{name:"text",type:"String",value:"\"\"",reflectToAttribute:!1,observer:!1},cardHeight:{name:"cardHeight",type:"String",value:"\"\"",reflectToAttribute:!1,observer:!1},cardWidth:{name:"cardWidth",type:"String",value:"\"\"",reflectToAttribute:!1,observer:!1},cardTitle:{name:"cardTitle",type:"String",value:"\"\"",reflectToAttribute:!1,observer:!1}}}tag(){return"custom-info-card"}constructor(){super();this.imageUrl="";this.heading="";this.text="";this.cardHeight="100%";this.cardWidth="300px";this.cardTitle=""}connectedCallback(){super.connectedCallback()}}customElements.define("custom-info-card",CustomInfoCard);export{CustomInfoCard};