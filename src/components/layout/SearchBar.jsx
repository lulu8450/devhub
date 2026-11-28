import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import { search } from '../../utils/search.js'

export default function SearchBar() {
    const [query, setQuery] = useState('')
    const results = search(query)

    return (
        <div className="search">
            <div className="search-input">
                <Search size={16} />
                <input
                    type="text"
                    placeholder="Rechercher…"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            {query.trim().length >= 2 && (
                <div className="search-results">
                    {results.length === 0 ? (
                        <p className="search-empty">Aucun résultat.</p>
                    ) : (
                        results.map((r) => (
                            <Link
                                key={r.to + r.title}
                                to={r.to}
                                className="search-item"
                                onClick={() => setQuery('')}
                            >
                                <span className="search-tech" style={{ color: r.color }}>
                                    {r.techName}
                                </span>
                                <span>{r.title}</span>
                            </Link>
                        ))
                    )}
                </div>
            )}
        </div>
    )
}