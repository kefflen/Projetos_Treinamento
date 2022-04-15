// http://alunos.b7web.com.br:501
import axios from 'axios'



const axiosApi = axios.create({
  baseURL: 'http://alunos.b7web.com.br:501'
})



const api = {
  async login(email, password) {
    let json
    try {
      const response = axiosApi.post('/users/signin', {
        email, password
      })
      json = response.data
    } catch (e) {
      return { error: e.message }
    }

    return json
  }
}

export default () => api


async function post(endpoint, body) {
  if (!body.token) {
    let token = localStorage.getItem('token')
    if (token) {
      body.token = token
    }
  }

  const { data: json } = axiosApi.post(endpoint, body)

  if (json.notallowed) {
    window.location.href = '/signin'
    return
  }

  return json
}


async function get(endpoint, body=[]) {
  if (!body.token) {
    let token = localStorage.getItem('token')
    if (token) {
      body.token = token
    }
  }

  const { data: json } = axiosApi.get(endpoint, {
    params: {
      body
    }
  })

  if (json.notallowed) {
    window.location.href = '/signin'
    return
  }

  return json
}