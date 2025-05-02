import { data } from "./js/Data.js"
import { Observable } from "./js/Observable.js"
import { tickLength } from "./js/Options.js"
import "./js/resources.js"
import "./js/scenarios/seablock.js"
import "./components/layout/tabs/tab-head.js"
import "./components/layout/tabs/tab-pane.js"
import "./components/layout/tabs/tab-bar.js"
import "./components/layout/tabs/tab-body.js"
import "./components/experiments/var-watcher.js"
import { varWatcher } from "./components/experiments/var-watcher.js"
console.log("app.js loaded")


let iron = new Observable(0)







function updateApp() {
	console.log(iron());
	iron.value += 1
}
updateApp()
let appLoop = setInterval(updateApp, tickLength)


function makeUp(num) {
	return Math.floor(num)
}


let display = document.querySelector("span")
display.innerHTML = "init"
iron.addSubscriber((newVal)=>{
	display.innerHTML = newVal
})

let testDisp = new varWatcher()
testDisp.observable = iron
testDisp.init()





