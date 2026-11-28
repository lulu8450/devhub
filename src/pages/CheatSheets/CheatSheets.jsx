import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { sheets } from '../../data/cheatsheets/index.js'
import CopyButton from '../../components/common/CopyButton.jsx'
import './CheatSheets.css'

export default function CheatSheets() {
    const { sheetId } = useParams()
    const [filter, setFilter] = useState('')

    if (!sheetId) return <Navigate to={`/cheatsheets/${sheets[0].id}`} replace />

    const sheet = sheets.find((s) => s.id === sheetId)
    if (!sheet) return <Navigate to="/cheatsheets" replace />

    const q = filter.trim().toLowerCase()
    const sections = sheet.sections
        .map((section) => ({
            ...section,
            items: section.items.filter(
                (item) => !q || `${item.cmd} ${item.desc}`.toLowerCase().includes(q)
            ),
        }))
        .filter((section) => section.items.length > 0)

    return (
        <main className="page">
            <h1>Cheat Sheets</h1>
            <p className="muted">Clique sur l'icône pour copier une commande.</p>

            <div className="sheet-tabs">
                {sheets.map((s) => (
                    <Link
                        key={s.id}
                        to={`/cheatsheets/${s.id}`}
                        className={s.id === sheet.id ? 'sheet-tab active' : 'sheet-tab'}
                        style={{ borderBottomColor: s.color }}
                        onClick={() => setFilter('')}
                    >
                        {s.name}
                    </Link>
                ))}
            </div>

            <input
                className="sheet-filter"
                type="text"
                placeholder={`Filtrer ${sheet.name}…`}
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />

            {sections.length === 0 && <p className="muted">Aucune commande trouvée.</p>}

            {sections.map((section) => (
                <section key={section.title} className="sheet-section">
                    <h2>{section.title}</h2>
                    {section.items.map((item) => (
                        <div key={item.cmd} className="sheet-row">
                            <code>{item.cmd}</code>
                            <span>{item.desc}</span>
                            <CopyButton text={item.cmd} />
                        </div>
                    ))}
                </section>
            ))}
        </main>
    )
}