import {
  Routes as ReactRoutes,
  Route
} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import SignIn from './pages/SignIn'
export default function Routes() {
  return (
    <ReactRoutes>
      <Route path='/' element={<Home />} index/>
      <Route path='/about' element={<About />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/:path' element={<NotFound />} />
    </ReactRoutes>
  )
}
