import express from "express"

import { GuestRouter } from "./routes/guest.routes.js"

export class App {
  #app = null

  /**
   * Initialize a new express app
   */
  constructor() {
    this.#app = express()
  }

  /**
   * Initialize routing
   */
  handleRoutes() {
    // guest routing
    const guestRoutes = new GuestRouter()
    this.#app.use("/", guestRoutes.router)
  }

  /**
   * Make the express app start listening
   * @param {?number} port Port exposed using an express server (Default: 3000)
   */
  listen(port = 3000) {
    this.#app.listen(port, () => {
      console.log(`Express server started, listening on port ${port}.`)
    })
  }
}
