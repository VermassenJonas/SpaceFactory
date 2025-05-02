import { importComponent } from "../../js/templater.js";

importComponent("tab-head", (el, innerHTML = null)=> {
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
	
}, "./components/tabs/tab-head.html")