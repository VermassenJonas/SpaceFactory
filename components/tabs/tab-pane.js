import { importComponent } from "../../js/templater.js";

importComponent("tab-pane", (el, innerHTML = null) => {
	let tabName = el.dataset.tab
	let selected = el.dataset.selected
	let pane = el.querySelector("#tab-pane-id")
	pane.setAttribute("id", `${tabName}-tab-pane`)
	pane.setAttribute("aria-labelled-by", `${tabName}-tab-head`)
	if (selected) {
		pane.classList.add("show", "active")
	}
	pane.innerHTML = innerHTML

}, "./components/tabs/tab-pane.html")