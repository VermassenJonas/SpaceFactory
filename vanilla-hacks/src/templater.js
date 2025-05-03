
export function registerDefaultTemplates(stylesheet=null){
	document.querySelectorAll("template").forEach(element => {
		if(element.hasAttribute("tag")){
			customElements.define(
				element.getAttribute("tag"),
				class extends HTMLElement {
				  constructor() {
					super();
					const template = element.content;
					const shadowRoot = this.attachShadow({ mode: "closed" });
					if(stylesheet){
						shadowRoot.appendChild(stylesheet.cloneNode(true))
					}
					shadowRoot.appendChild(template.cloneNode(true));
				  }
				},
			  );
		}
	});
}
