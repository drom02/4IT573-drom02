import { createWebSocketServer } from "../Main/src/websockets.js";
import {app} from './src/app.js'
const port = 3000;
const server = app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
  })
  createWebSocketServer(server)