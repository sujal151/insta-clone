import React, { createContext ,useState} from "react";
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Profile from './components/Profile'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Createpost from './components/Createpost'
import { LoginContext } from './context/LoginContext'


const App = ({login}) => {
  const [userLogin, setUserLogin] = useState(false)
  return (
    <BrowserRouter>
      <div className='App'>
        <LoginContext.Provider value={{ setUserLogin }}>
          <Navbar login={userLogin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/createpost" element={<Createpost />} />
          </Routes>
          <ToastContainer theme='dark' />
        </LoginContext.Provider>

      </div>
    </BrowserRouter>
  )
}

export default App
