import { tickLength } from "./Options.js"


export let data = {
	resources : {
		iron : {
			amount : 0,
			perSec : 1,
			perTick: function(tickLength){
				return this.perSec * tickLength / 1000
			}
		}
	}
}

function calculateResource(resource){
	resource.amount += resource.perTick(tickLength)
}

export function calculateTick(){
	data.resources.array.forEach(calculateResource);
}