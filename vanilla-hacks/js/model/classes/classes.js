//#region recipes
export class Input {
	constructor(resource, amount, chance = 1) {
		this.resource = resource
		this.amount = amount
		this.chance = chance
	}
}
export class Output {
	constructor(resource, amount, chance = 1) {
		this.resource = resource
		this.amount = amount
		this.chance = chance
	}
}
export class Recipe {
	constructor(inputs = [], outputs = [], duration = 1, unlocked = false) {
		this.inputs = inputs
		this.outputs = outputs
		this.duration = duration
		this.unlocked = unlocked
	}
}
//#endregion recipes

//#region machines
export class Machine {
	constructor(recipes = [], speed = 1, productivity = 1, unlocked = false) {
		this.recipes = recipes
		this.speed = speed
		this.unlocked = unlocked
		this.productivity = productivity
	}
}
//#endregion

export class Upgrade {

}