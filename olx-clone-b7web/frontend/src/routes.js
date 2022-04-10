import {
  Routes as ReactRoutes,
  Route
} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
export default function Routes() {
  return (
    <ReactRoutes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
    </ReactRoutes>
  )
}
