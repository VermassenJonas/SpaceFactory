console.log("templatemaker loaded")

const bootstrapImport = document.querySelector("#bootstrap-import")

export function templateInit(id, style=bootstrapImport){
	customElements.define(id,
		class extends HTMLElement {
		  constructor() {
			super();
			const template = document
			  .getElementById(id)
			  .content;
			const shadowRoot = this.attachShadow({mode: 'open'});
			if(style){
				shadowRoot.appendChild(style.cloneNode(true));
			}
			shadowRoot.appendChild(template.cloneNode(true));
		}
	  });
}