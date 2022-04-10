import { logger } from "./utils.mjs"

async function routes(request, response) {
  return response.end('Hello')
}

export default function handler(request, response) {
  return routes(request, response)
    .catch(error => logger.error('Deu ruim: ' + error.stack))
}