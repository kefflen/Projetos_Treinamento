import crypto from 'crypto'
import { io } from '../server'

export type message = {
  id: string
  author: string
  message: string
  publishedAt: Date
}

export default class MessageServices {
  public readonly messages: message[]
  constructor() {
    this.messages = []
  }

  create(author: string, message: string) {
    let id = crypto.randomUUID()
    let publishedAt = new Date()

    let newMessage = {
      author, message,id, publishedAt
    }
    this.messages.unshift(newMessage)

    io.emit('new_message', newMessage)
    return newMessage
  }

  get(take?: number): message[] {
    if (!take) return this.messages

    return this.messages.slice(0, take)
  }
}