import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import RegisterPage from './Pages/RegisterPage';
import ProfilePage from './Pages/Profile';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/joinus' element={<RegisterPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
      </Routes>
    </>
  )
}

export default App;