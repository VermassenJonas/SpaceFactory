

export let componentsRoot = "./components/"
export let componentsExtension = ".html"

export function importComponent_old(component, postScript = null, htmlFile = null) {
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
							const node = doc.querySelector("body").firstElementChild.cloneNode(true);


							node.classList.add(...this.classList)
							for (let d in this.dataset) {
								node.setAttribute(`data-${d}`, this.dataset[d])
							}
							this.getAttributeNames().forEach(name => {
								if (!(name === "class") || name.startsWith("data-")) {
									node.setAttribute(name, this.getAttribute(name))
								}
							});

							if (postScript) {
								postScript(node, this.innerHTML)
							} else {
								node.innerHTML = this.innerHTML
							}
							this.replaceWith(node)
						}
					);

			}
		});
}
