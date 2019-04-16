import { LitElement, html } from "lit-element";
class CustomImage extends LitElement {
  render() {
    return html`
      <style>
        :host {
          display: flex;
          justify-content: center;
        }
        img {
          border-radius: 50%;
          border: 2px solid #e8e8e8;
        }
        :host([hidden]) {
          display: none;
        }
      </style>
      <div><img src="${this.url}" /></div>
    `;
  }
  static get properties() {
    return {
      url: {
        name: "url",
        type: "String",
        value: "",
        reflectToAttribute: !1,
        observer: !1
      }
    };
  }
  tag() {
    return "custom-image";
  }
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();
  }
}
customElements.define("custom-image", CustomImage);
export { CustomImage };
