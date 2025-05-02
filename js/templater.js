

export let componentsRoot = "./components/"
export let componentsExtension = ".html"

export function importComponent(component, postScript = null, htmlFile = null) {
	customElements.define(component,
		class extends HTMLElement {
			constructor() {
				super();
				if (htmlFile === null) {
					htmlFile = componentsRoot + component + componentsExtension
				}
				fetch(htmlFile)
					.then(file => file.text())
					.then(
						html => {
							const doc = document.createElement("html");
							doc.innerHTML = html;
							const node = doc.querySelector("template").content.cloneNode(true);
							node.dataset = this.dataset;
							node.firstElementChild.classList.add(...this.classList)
							this.getAttributeNames().forEach(name => {
								if (!name === "class") {
									node.firstElementChild.setAttribute(name, this.getAttribute(name))
								}
							});
							if (postScript) {
								postScript(node, this.innerHTML)
							} else {
								node.firstElementChild.innerHTML = this.innerHTML
							}
							this.replaceWith(node)
						}
					);

			}
		});
}

