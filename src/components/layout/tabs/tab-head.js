import { html, importComponent_old } from "../../../utility/templater.js";

const template = /*html */`
<li class="nav-item" role="presentation">
	<button class="nav-link" id="tab-id" data-bs-toggle="tab" data-bs-target="" type="button" role="tab"
		aria-controls="" aria-selected="false">Home</button>
</li>
`

function postScript(el, innerHTML = null){
	let tabName = el.dataset.tab
	let selected = el.dataset.selected
	let tabHead = el.querySelector("#tab-id")
	tabHead.setAttribute("id", tabName+"-tab-head");
	tabHead.setAttribute("data-bs-target", `#${tabName}-tab-pane`);
	tabHead.setAttribute("aria-controls", `${tabName}-tab-pane`)
	if(selected){
		tabHead.setAttribute("aria-selected", true)
		tabHead.classList.add("active")
	}
	tabHead.innerHTML = innerHTML	
}


importComponent_old("tab-head", template ,postScript)