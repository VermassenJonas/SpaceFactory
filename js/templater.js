console.log("templatemaker loaded")

const bootstrapImport = document.querySelector("#bootstrap-import")

export function templateInit(id, style = bootstrapImport) {
	customElements.define(id,
		class extends HTMLElement {
			constructor() {
				super();
				const template = document
					.getElementById(id)
					.content;
				const shadowRoot = this.attachShadow({ mode: 'open' });
				if (style) {
					shadowRoot.appendChild(style.cloneNode(true));
				}
				shadowRoot.appendChild(template.cloneNode(true));
			}
		});
}


export function importComponentBox(component, style = null, postScript = null) {
	customElements.define(component,
		class extends HTMLElement {
			constructor() {
				super();
				fetch(componentsRoot + component + componentsExtension)
				.then(file => file.text())
				.then(
					html => {
							let doc = document.createElement("html");
							doc.innerHTML = html
							
							const template =
							doc.querySelector("template")
							.content;
							const shadowRoot = this.attachShadow({ mode: 'open' });
							if (style) {
								shadowRoot.appendChild(style.cloneNode(true));
							}
							shadowRoot.appendChild(template.cloneNode(true));
						}
					);
					
			}
		});
	}

export let componentsRoot = "./components/"
export let componentsExtension = ".html"
	
export function importComponent(component, postScript = null, htmlFile = null) {
	customElements.define(component,
		class extends HTMLElement {
			constructor() {
				super();
				if(htmlFile === null){
					htmlFile = componentsRoot + component + componentsExtension
				}
				fetch(htmlFile)
					.then(file => file.text())
					.then(
						html => {
							const doc = document.createElement("html");
							doc.innerHTML = html;
							const template =
								doc.querySelector("template")
									.content;
							const node = template.cloneNode(true)
							node.dataset = this.dataset
							this.getAttributeNames().forEach(name => {
								if (!name.startsWith("data-") || name === "class") {
									node.firstElementChild.setAttribute(name, this.getAttribute(name))									
								}
							});
							if (postScript){
								postScript(node, this.innerHTML)
							}else{
								node.firstElementChild.innerHTML = this.innerHTML
							}
							//this.parentElement.replaceChild(node, this)
							this.replaceWith(node)
						}
					);

			}
		});
}