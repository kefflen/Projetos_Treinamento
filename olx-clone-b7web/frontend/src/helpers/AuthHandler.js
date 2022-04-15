
const isLogged = () => {
  let token = localStorage.getItem('token') || sessionStorage.getItem('token')
  return !!token
}

const doLogin = (token, rememberPassword) => {
  if (rememberPassword) {
    localStorage.setItem('token', token)
  } else {
    sessionStorage.setItem('token', token)
  }
}
export {
  isLogged,
  doLogin
}