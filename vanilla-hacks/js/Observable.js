export function getObservable(initialValue){
	let result = new Observable
	return result.value
}


export class Observable {
	constructor(initialValue) {
		this._value = initialValue
		this._subscribers = []
	}
	get value(){
		return this._value
	}
	set value(newVal){
		this._value = newVal
		this._subscribers.forEach(func => func(newVal, oldVal))

	}
	addSubscriber(func){
		this._subscribers.push(func)
	}
}