import { Request, Response } from "express";
import MessageServices, { message } from "../services/MessagesServices";

export default class MessageController {
  public readonly messageServices: MessageServices
  constructor() {
    this.messageServices = new MessageServices
    Object.bind(this.createMessage, this)
    Object.bind(this.get, this)
  }


  createMessage(req: Request, res: Response) {
    let {
      author, message
    } = req.body 

    if ([author, message].some(params => !params)) return res.status(400).json({error: "Invalid values was passed to body"})
    return res.status(201).json(this.messageServices.create(author, message))
  }

  get(req: Request, res: Response) {
    if (req.query && req.query.take) {
      let take = req.query.take as any
      if (Number.isNaN(Number(take))) return res.status(400).json({error: 'Invalid take query param'})
      return res.json(this.messageServices.get(take))
    } else {
      return res.json(this.messageServices.get())
    }
  }
}