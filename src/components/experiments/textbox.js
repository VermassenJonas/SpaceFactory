import { importComponent } from "../../js/templater.js";








function importComponent("text-box", (el, innerHTML = null)=> {
	console.log(el)
	let content = el.dataset.content
	let box = el.querySelector("span")
	box.innerHTML = content
	
}, "./components/experiments/textbox.html")