import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Routes from './routes'

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes />
      </div>    
    </BrowserRouter>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)



function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}