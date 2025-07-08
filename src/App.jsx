import React, {Suspense, useEffect, useState} from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import './App.css'
const Home = React.lazy(()=>import('homeApp/Home'))
const User=React.lazy(()=>import('userApp/User'))

function App() {
  const [userData, setUserData]=useState(null)

  useEffect(()=>{
    const handleData=(event)=>{
      setUserData(event.detail)
    }
    window.addEventListener('user-data', handleData)

    return ()=> window.removeEventListener('user-data', handleData)
  }, [])

  return (
    <BrowserRouter>
        <nav style={{ padding: '10px', background: '#f4f4f4' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/user">User</Link>
        </nav>
        <Suspense fallback={<h2>Loading....</h2>}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/user' element={<User userData={userData}/>}/>
          </Routes>
        </Suspense>
    </BrowserRouter>
  )
}

export default App
