import app from "./configs/app";
import http from 'http'
import { Server } from "socket.io";


const serverHttp = http.createServer(app)
const io = new Server(serverHttp, {
  cors: {
    origin: '*'
  }
})

io.on('connection', socket => {
  console.log('Usuario conectado no socket: ' + socket.id)
})

export {
  io
}

serverHttp.listen(8080, '192.168.15.22' ,() => console.log('Running at: http://192.168.15.22:8080'))