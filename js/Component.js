

// //#region trial

// export default class Component extends HTMLElement {
// 	constructor() {
// 		super();
// 		fetch(componentsRoot + component + componentsExtension)
// 			.then(file => file.text())
// 			.then(
// 				html => {
// 					let doc = document.createElement("html");
// 					doc.innerHTML = html

// 					const template =
// 						doc.querySelector("template")
// 							.content;
// 					const shadowRoot = this.attachShadow({ mode: 'open' });
// 					if (style) {
// 						shadowRoot.appendChild(style.cloneNode(true));
// 					}
// 					shadowRoot.appendChild(template.cloneNode(true));
// 				}
// 			);

// 	}
// }


// export function registerComponent(name, htmlfile = null, postScript = null) {
// 	if (htmlfile === null) {
// 		htmlfile = "./components/" + name + ".html"
// 	}
// 	customElements.define(name,
// 		class extends HTMLElement {
// 			constructor(parameters) {
// 				super()
// 				fetch(htmlfile)
// 					.then(file => file.text())
// 					.then(html => {
// 						let doc = document.createElement('html');
// 						doc.innerHTML = html
// 						this.appendChild(doc.querySelector("template").content)

// 					})
// 			}
// 		}




// 		, () => {
// 			result = HTMLElement()
// 			fetch(htmlfile)
// 				.then(file => file.text())
// 				.then(html => {
// 					let doc = document.createElement('html');
// 					doc.innerHTML = html
// 					result.appendChild(doc.querySelector("template").content)

// 				})
// 			return result
// 		})
// }

// //#endregion

export class Component extends HTMLElement {
	constructor( htmlfile,postScript = null, styleTag = null, ...args ) {
		super(...args);
		fetch(htmlfile)
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
					postScript(this)
				}
			);
	}
}

export function registerComponent(tag, htmlfile, postScript = null, style = null){
	customElements.define(tag, new Component(htmlfile, postScript, style))
}