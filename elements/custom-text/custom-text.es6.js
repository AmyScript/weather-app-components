import { LitElement, html } from "lit-element";
class CustomText extends LitElement {
  render() {
    return html`
      <style>
        :host {
          display: block;
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          line-height: normal;
          font-size: 14px;
          text-align: center;
          color: #959595;
        }
        :host([hidden]) {
          display: none;
        }
      </style>
      <slot></slot>
      <div>${this.content}</div>
    `;
  }
  static get properties() {
    return {
      content: {
        name: "content",
        type: "String",
        value: "",
        reflectToAttribute: !1,
        observer: !1
      }
    };
  }
  tag() {
    return "custom-text";
  }
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();
  }
}
customElements.define("custom-text", CustomText);
export { CustomText };
