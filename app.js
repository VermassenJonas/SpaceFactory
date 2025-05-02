import { data } from "./js/Data.js"
import { Observable } from "./js/Observable.js"
import { tickLength } from "./js/Options.js"
import "./js/resources.js"
import "./js/scenarios/seablock.js"
//import "./components/test/btn-prim.js"
import "./components/layout/tabs/tab-head.js"
import "./components/layout/tabs/tab-pane.js"
import "./components/layout/tabs/tab-bar.js"
import "./components/layout/tabs/tab-body.js"
console.log("app.js loaded")








function updateDisplay(display) {
	display.innerHTML = makeUp(data.resources[display.dataset.resource].amount)
}

function updateApp() {
	console.log('update');
	data.resources.iron.amount += data.resources.iron.perTick(tickLength);
	let displays = document.querySelectorAll(".display");
	displays.forEach(updateDisplay)
}
updateApp()
let appLoop = setInterval(updateApp, tickLength)


function makeUp(num) {
	return Math.floor(num)
}

