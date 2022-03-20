import React, { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AppBar from './components/AppBar'
import Dashboard from './pages/Dashboard'
import Offers from './pages/Offers'
import Profile from './pages/Profile'
import Responses from './pages/Responses'

const App: FC = () => {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="offers" element={<Offers />} />
        <Route path="responses" element={<Responses />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/offers" replace />} />
      </Routes>
    </>
  )
}

export default App
