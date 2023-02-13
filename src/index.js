import { App } from "./app.js"

// initialize express server
const app = new App()

// handle routing
app.handleRoutes()

// listen on port 3000
app.listen(3000)
