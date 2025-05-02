import { importComponent, importComponentFromFile } from "../../../src/utility/templater.js";

const template = /*html */`

<div class="tab-content">
placeholder
</div>
`

importComponent("tab-body", template)