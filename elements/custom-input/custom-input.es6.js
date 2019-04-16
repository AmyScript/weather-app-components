import { LitElement, html } from "lit-element";
class CustomInput extends LitElement {
  render() {
    return html`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
          box-sizing: border-box;
        }

        input {
          background: #ffffff;
          border-radius: 20px;
          border-style: none;
          font-size: 15px;
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          line-height: normal;
          width: ${this.width};
          border: 1px solid lightgrey;
          padding: 5px;
          padding-left: 10px;
          box-sizing: inherit;
        }

        input:focus {
          outline: none;
        }
      </style>
      <input
        id="${this.inputId}"
        type="text"
        .value="${this.cityProp}"
        @input="${this.handleInput}"
      />
    `;
  }
  static get properties() {
    return {
      cityProp: {
        name: "cityProp",
        type: "String",
        value: " ",
        reflect: !0,
        attribute: !0,
        observer: !1
      },
      inputId: {
        name: "inputId",
        type: "String",
        value: " ",
        reflectToAttribute: !1,
        observer: !1
      },
      width: {
        name: "width",
        type: "String",
        value: " ",
        reflectToAttribute: !1,
        observer: !1
      }
    };
  }
  tag() {
    return "custom-input";
  }
  constructor() {
    super();
    this.cityProp = "";
    this.inputId = "";
    this.width = "100%";
  }
  handleInput(e) {
    this.cityProp = e.target.value;
  }
  connectedCallback() {
    super.connectedCallback();
  }
  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
  }
}
customElements.define("custom-input", CustomInput);
export { CustomInput };
