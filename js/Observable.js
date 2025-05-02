export function getObservable(initialValue){
	let result = new Observable(initialValue)
	return result
}


export class Observable {
	constructor(initialValue) {
		this._subscribers = []
		this._value = initialValue
	}
	get value(){
		return this._value
	}
	set value(newVal){
		this.set(newVal)
	}
	set(newVal){
		let oldVal = this.value
		this._value = newVal
		this._subscribers.forEach(func => func(newVal, oldVal))
	}
	get(){
		return this.value
	}
	addSubscriber(func){
		this._subscribers.push(func)
	}
}