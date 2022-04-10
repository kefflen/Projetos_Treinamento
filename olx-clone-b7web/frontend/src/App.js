import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

import { Template } from './components/MainComponents'
import Footer from './components/partials/Footer'
import Header from './components/partials/Header'
import Routes from './routes'

function App(props) {
  return (
    <BrowserRouter>
      <Template>
        <Header />
        <Routes />
        <Footer />
      </Template>
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