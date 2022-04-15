
const isLogged = () => {
  let token = localStorage.getItem('token')
  return !!token
}
export {
  isLogged
}