import {
  LitElement,
  html
} from "./node_modules/@polymer/lit-element/lit-element.js";
import "./node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js";
class DsgHeading extends LitElement {
  render() {
    return html`
      <style>
        :host {
          display: block;
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          line-height: normal;
          font-size: 64px;
          color: #000000;
          margin: 0px;
        }
        :host([hidden]) {
          display: none;
        }
        h3 {
          margin: 0;
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
    return "dsg-heading";
  }
  constructor() {
    super();
    this.content = "";
  }
  connectedCallback() {
    super.connectedCallback();
  }
}
customElements.define("dsg-heading", DsgHeading);
export { DsgHeading };
