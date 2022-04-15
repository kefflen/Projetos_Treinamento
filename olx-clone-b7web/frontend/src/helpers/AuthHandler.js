
const isLogged = () => {
  let token = localStorage('token')
  return !!token
}
export {
  isLogged
}