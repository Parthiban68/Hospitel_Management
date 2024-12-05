
import NavBar from './components/NavBar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import SignupForm from './pages/Signup'
import Login from './pages/Login'
import Aboutus from './pages/Aboutus'

function App() {
  return ( 
    <div>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/signup' element={<SignupForm/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/aboutus' element={<Aboutus/>} />
      </Routes>
    </div>


  
  )
}

export default App
