import { Observable } from "./utility/Observable.js";
import { Dummy } from "./components/dummy.js";
import { registerDefaultTemplates } from "./utility/templater.js";

console.log("app.js loaded")


Dummy.register("dummy-el")


registerDefaultTemplates()