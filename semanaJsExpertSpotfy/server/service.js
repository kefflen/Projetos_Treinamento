import fs from 'fs'
import config from './config'
import fsPromises from 'fs/promises'
import { extname } from 'path'

let {
  dir: {
    publicDirectory
  }
} = config

export class Service {
  createFileStream(filename) {
    return fs.createReadStream(filename)
  }

  async getFileInfo(file) {
    const fullFilePath = join(publicDirectory, file)

    //valida se existe - Caso não exista vai jogar uma excessão
    await fsPromises.access(fullFilePath)
    const fileType = extname(fullFilePath)

    return {
      name: fullFilePath,
      type: fileType
    }
  }

  async getFileStream(file) {
    const {
      name, type
    } = await this.getFileInfo(file)
    return {
      stream: this.createFileStream(name),
      type
    }
  }
}