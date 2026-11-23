import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar.jsx'
import './Layout.css'

export default function Layout() {
    return (
        <div className="layout">
            <Sidebar />
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}