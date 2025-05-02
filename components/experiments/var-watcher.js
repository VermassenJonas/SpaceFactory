import { importComponent } from "../../src/utility/templater.js";


export const varWatcher = importComponent("var-watcher", 
	/*html */
	`	
	<div>
		<span>placeholder</span>
	</div>
	`	
	
	,(el, innerHTML = null)=> {
	console.log(el)
	let content = el.dataset.content
	let box = el.querySelector("span")
	box.innerHTML = content
}, "./components/experiments/watch-field.html")




console.log("initialized")