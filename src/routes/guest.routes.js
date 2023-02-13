import { Router } from "express";

export class GuestRouter {
  router = null;

  /**
   * Initialize a new express router
   */
  constructor() {
    this.router = new Router()

    this.router.get("/", (_req, res) => {
      return res.send("Testing.")
    })
  }
}