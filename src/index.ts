import App from "app"
import GuestController from "app/controllers/guest.controller"

// start the express server
const app = new App({
  port: 3000,
  controllers: [new GuestController()],
  middlewares: [],
})

app.listen()
