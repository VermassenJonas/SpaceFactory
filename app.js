import { data } from "./js/Data.js"
import { getObservable, Observable } from "./js/Observable.js"
import { tickLength } from "./js/Options.js"
import "./js/resources.js"
import "./js/scenarios/seablock.js"
//import "./components/test/btn-prim.js"
import "./components/tabs/tab-head.js"
import "./components/tabs/tab-pane.js"
import "./components/tabs/tab-bar.js"
import "./components/tabs/tab-body.js"
console.log("app.js loaded")



const bootstrapImport = document.querySelector("#bootstrap-import")


//#region Test code
// let el = document.getElementById('clickbutton')
// export const clickHandler = function () {
// 	console.log('Click just happened')
// }
// el.addEventListener('click', clickHandler);	



// let observable = new Observable(1)

// console.log(observable.value)
// observable.value = 5
// console.log(observable.value)


// observable.addSubscriber((val) => console.log(val))
// observable.value = 15






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

