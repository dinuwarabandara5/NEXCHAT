import React from 'react'
import { Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='\'element={<HomePage />} />
        <Route path='\login'element={<LoginPage />} />
        <Route path='\profile'element={<ProfilePage />} />

       
      </Routes>
    </div>
  )
}

export default App
