import { Router } from "express";
import MessageController from "../controllers/MessageControllers";

const routes = Router()
const messageController = new MessageController()

routes.get('', (req, res) => {
  res.send('Hi dev')
})


routes.get('/messages', (req, res) => messageController.get(req, res))
routes.post('/messages', (req, res) => messageController.createMessage(req, res))


export default routes