import * as express from "express"

import { Application } from "express"

class App {
  public app: Application
  public port: number

  /**
   * Initialize a new express app
   */
  constructor(appConfig: { port: number; middlewares: any; controllers: any }) {
    this.app = express()
    this.port = appConfig.port

    this.middlewares(appConfig.middlewares)
    this.routes(appConfig.controllers)
  }

  // function for handling middlewares
  private middlewares(middlewares: {
    forEach: (arg0: (middleware: any) => void) => void
  }) {
    middlewares.forEach((middleware) => {
      this.app.use(middleware)
    })
  }

  // function for handling routes/controllers
  private routes(controllers: {
    forEach: (arg0: (controller: any) => void) => void
  }) {
    controllers.forEach((controller) => {
      this.app.use("/", controller.router)
    })
  }

  /**
   * Make the express app start listening
   */
  listen(): void {
    this.app.listen(this.port, () => {
      console.log(
        `Express server started, listening on http://127.0.0.1:${this.port}`
      )
    })
  }
}

export default App
