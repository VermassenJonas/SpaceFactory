

export let componentsRoot = "./components/"
export let componentsExtension = ".html"

export function importComponentFromFile(component, postScript = null, htmlFile = null) {
	const customComp = class extends HTMLElement {
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
	};
	customElements.define(component,
		customComp)
	return customComp
}

export function old_html(strings) {
	const htmlString = strings.join(""); //TODO:make better
	const doc = document.createElement("body");
	doc.innerHTML = htmlString;
	return doc.firstElementChild
}

export function html(strings, ...keys) {
	return (...values) => {
		const dict = values[values.length - 1] || {};
		const result = [strings[0]];
		keys.forEach((key, i) => {
			const value = Number.isInteger(key) ? values[key] : dict[key];
			result.push(value, strings[i + 1]);
		});
		const htmlString = result.join("");
		const doc = document.createElement("body");
		doc.innerHTML = htmlString;
		return doc.firstElementChild.cloneNode(true)
	};
}


export function importComponent_old(tag, htmlString, postScript = (el, innerHTML) => el.innerHTML = innerHTML) {
	let customComp = class extends HTMLElement {
		constructor() {
			super()
			const doc = document.createElement("body")
			doc.innerHTML = htmlString
			const node = doc.firstElementChild.cloneNode(true)

			node.classList.add(...this.classList)
			for (let d in this.dataset) {
				node.setAttribute(`data-${d}`, this.dataset[d])
			}
			this.getAttributeNames().forEach(name => {
				if (!(name === "class") || name.startsWith("data-")) {
					node.setAttribute(name, this.getAttribute(name))
				}
			});
			postScript(node, this.innerHTML)
			this.replaceWith(node)
		}
	}
	customElements.define(tag, customComp)
}

export function importComponent(tag, template, postScript = (el, innerHTML) => el.innerHTML = innerHTML) {
	let customComp = class extends HTMLElement {
		constructor() {
			super()
			const node = template
			node.classList.add(...this.classList)
			for (let d in this.dataset) {
				node.setAttribute(`data-${d}`, this.dataset[d])
			}
			this.getAttributeNames().forEach(name => {
				if (!(name === "class") || name.startsWith("data-")) {
					node.setAttribute(name, this.getAttribute(name))
				}
			});
			postScript(node, this.innerHTML)
			this.replaceWith(node)
		}
	}
	customElements.define(tag, customComp)

}

export function registerDefaultTemplates() {
	document.querySelectorAll("template").forEach(template => {
		if (template.hasAttribute("tag")) {
			const customComp = class extends HTMLElement {
				constructor() {
					super()
					const content = template.content.cloneNode(true)
					const kids = content.children
					Array.from(kids).forEach(node => {

						node.classList.add(...this.classList)
						for (let d in this.dataset) {
							node.setAttribute(`data-${d}`, this.dataset[d])
						}
						this.getAttributeNames().forEach(name => {
							if (!(name === "class") || name.startsWith("data-")) {
								node.setAttribute(name, this.getAttribute(name))
							}
						});
						if (this.innerHTML.trim() !=="") {
							node.innerHTML = this.innerHTML
						}
					})
					this.replaceWith(content)
				}
			}
			customElements.define(template.getAttribute("tag"), customComp)
		}
	})
}