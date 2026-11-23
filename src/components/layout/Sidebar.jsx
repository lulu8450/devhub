import { NavLink } from 'react-router-dom'
import {
    Home, BookOpen, FileText, GraduationCap,
    Dumbbell, Brain, Star, TrendingUp, Sun, Moon,
} from 'lucide-react'
import useTheme from '../../hooks/useTheme.js'
import SearchBar from './SearchBar.jsx'

const links = [
    { to: '/', label: 'Accueil', icon: Home },
    { to: '/documentation', label: 'Documentation', icon: BookOpen },
    { to: '/cheatsheets', label: 'Cheat Sheets', icon: FileText },
    { to: '/apprentissage', label: 'Apprentissage', icon: GraduationCap },
    { to: '/exercices', label: 'Exercices', icon: Dumbbell },
    { to: '/revision', label: 'Révision', icon: Brain },
    { to: '/favoris', label: 'Favoris', icon: Star },
    { to: '/progression', label: 'Ma progression', icon: TrendingUp },
]

export default function Sidebar() {
    const { theme, toggle } = useTheme()

    return (
        <aside className="sidebar">
            <div className="logo">DevHub</div>
            <SearchBar />
            <nav>
                {links.map(({ to, label, icon: Icon }) => (
                    <NavLink key={to} to={to} end={to === '/'} className="nav-link">
                        <Icon size={18} />
                        <span>{label}</span>
                    </NavLink>
                ))}
            </nav>
            <button className="theme-toggle" onClick={toggle}>
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                <span>{theme === 'dark' ? 'Mode clair' : 'Mode sombre'}</span>
            </button>
        </aside>
    )
}