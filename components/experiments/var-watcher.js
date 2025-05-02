import { importComponent } from "../../js/templater.js";


export const varWatcher = importComponent("var-watcher", (el, innerHTML = null)=> {
	console.log(el)
	let content = el.dataset.content
	let box = el.querySelector("span")
	box.innerHTML = content
}, "./components/experiments/watch-field.html")




console.log("initialized")