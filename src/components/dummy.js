import {html,  importComponent } from "/src/utility/templater.js";

const template = html`
	<button class="btn btn-primary">placeholder</button>
`
function postScript(el, innerHTML) {
	el.innerHTML = "testing"
}

function register(tag) {
	importComponent(tag, template(), postScript)
}


export const Dummy = {
	template: template,
	postScript: postScript,
	register: register
}


