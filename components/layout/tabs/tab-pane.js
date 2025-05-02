import { importComponent, importComponentFromFile } from "../../../src/utility/templater.js";

const template = /*html*/`
<div class="tab-pane fade" id="tab-pane-id" role="tabpanel" aria-labelledby="tab-head"
tabindex="0">Placeholder</div>	
` 
function postScript(el, innerHTML){
	let tabName = el.dataset.tab
		let selected = el.dataset.selected
		let pane = el
		pane.setAttribute("id", `${tabName}-tab-pane`)
		pane.setAttribute("aria-labelled-by", `${tabName}-tab-head`)
		if (selected) {
			pane.classList.add("show", "active")
		}
		pane.innerHTML = innerHTML
}
function init() {

	importComponent("tab-pane", template, postScript)
}

init()