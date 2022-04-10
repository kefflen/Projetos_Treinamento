import { connect } from 'react-redux'
import './App.css'

const mapStateToProps = state => {
  return {
    user:state.user
  }
}

const mapDispatchToProps = dispatch => {

  return {

  }
}

function App(props) {
  return (
    <div className="App">
      Funcionando...
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
