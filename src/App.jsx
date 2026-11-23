import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import PagePlaceholder from './components/common/PagePlaceholder.jsx'
import Home from './pages/Home/Home.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/documentation" element={<PagePlaceholder title="Documentation" />} />
        <Route path="/cheatsheets" element={<PagePlaceholder title="Cheat Sheets" />} />
        <Route path="/apprentissage" element={<PagePlaceholder title="Apprentissage" />} />
        <Route path="/exercices" element={<PagePlaceholder title="Exercices" />} />
        <Route path="/revision" element={<PagePlaceholder title="Révision" />} />
        <Route path="/favoris" element={<PagePlaceholder title="Favoris" />} />
        <Route path="/progression" element={<PagePlaceholder title="Ma progression" />} />
      </Route>
    </Routes>
  )
}