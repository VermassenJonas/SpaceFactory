import { importComponent, importComponentFromFile } from "../../../src/utility/templater.js";
const template = /*html */`

<ul class="nav nav-tabs" role="tablist">
Placeholder
</ul>

`


importComponent("tab-bar", template)

