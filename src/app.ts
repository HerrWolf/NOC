// src/app.ts
import { Server } from "./presentation/server"

(async() => {
    main()
})()

function main() {
  Server.start()
}