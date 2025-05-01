import { data } from "./js/Data.js"
import { tickLength } from "./js/Options.js"
import "./js/resources.js"
import "./js/template-maker.js"
import { templateInit } from "./js/template-maker.js"
console.log("app.js loaded")



//#region Test code
let el = document.getElementById('clickbutton')
export const clickHandler = function () {
	console.log('Click just happened')
}
el.addEventListener('click', clickHandler);	
//#endregion

templateInit('btn-prim');

function updateDisplay(display){
	display.innerHTML = makeUp(data.resources[display.dataset.resource].amount)
}

function updateApp(){
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