


export class Observable extends Function {
	constructor(initialValue) {
		super()
		this._value = initialValue
		this._subscribers = []
		return new Proxy(this, {
			apply: (target, thisArg, args) => target._call(...args)
		})
	}
	get value(){
		return this._value
	}
	set value(newVal){
		this.set(newVal)
	} 
	set(newVal) {
		let oldVal = this.value
		this._value = newVal
		this._subscribers.forEach(func => func(newVal, oldVal))
	}

	_call(newVal) {
		if(newVal != null){
			this.set(newVal)
		}
		return this._value
	}
	addSubscriber(func) {
		this._subscribers.push(func)
	}

}

//#region Test code

let iron = new Observable(5)

console.log(iron())

iron(15)

console.log(iron())

iron.addSubscriber((newVal ) =>{
	console.log(`iron: ${newVal}`)
})
iron(25)
console.log(iron())
//#endregion
