import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import PagePlaceholder from './components/common/PagePlaceholder.jsx'
import Home from './pages/Home/Home.jsx'
import Documentation from './pages/Documentation/Documentation.jsx'
import Technology from './pages/Documentation/Technology.jsx'
import CheatSheets from './pages/CheatSheets/CheatSheets.jsx'
import Revision from './pages/Revision/Revision.jsx'
import QuizPage from './pages/Revision/QuizPage.jsx'
import Favorites from './pages/Favorites/Favorites.jsx'
import Progress from './pages/Progress/Progress.jsx'

export default function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="/documentation" element={<Documentation />} />
				<Route path="/documentation/:techId/:chapterId?" element={<Technology />} />
				<Route path="/cheatsheets/:sheetId?" element={<CheatSheets />} />
				<Route path="/apprentissage" element={<PagePlaceholder title="Apprentissage" />} />
				<Route path="/exercices" element={<PagePlaceholder title="Exercices" />} />
				<Route path="/revision" element={<Revision />} />
				<Route path="/revision/:quizId" element={<QuizPage />} />
				<Route path="/favoris" element={<Favorites />} />
				<Route path="/progression" element={<Progress />} />
			</Route>
		</Routes>
	)
}