import { Observable } from "./utility/Observable.js";
import "/src/components/layout/tabs/tab-pane.js"
import "/src/components/layout/tabs/tab-head.js"
import "/src/components/layout/tabs/tab-body.js"
import "/src/components/layout/tabs/tab-bar.js"
import { TabPane } from "./components/layout/tabs/tab-pane.js";
import { Dummy } from "./components/dummy.js";

console.log("app.js loaded")


Dummy.register("dummy-el")

TabPane.init("tab-pane")


