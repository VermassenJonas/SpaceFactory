import { registerDefaultTemplates } from "./src/templater.js"




const style = document.querySelector("#style-import")
style.removeAttribute("id")

console.log(style)


registerDefaultTemplates(style)
