import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}