import * as express from "express"
import ControllerBase from "../interfaces/ControllerBase.interface"

import { Request, Response } from "express"

class GuestController implements ControllerBase {
  public path = "/"
  public router = express.Router()

  constructor() {
    this.initRoutes()
  }

  public initRoutes() {
    this.router.get("/", this.index)
  }

  index = (_req: Request, res: Response) => {
    return res.send("Testing")
  }
}

export default GuestController
