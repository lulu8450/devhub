import { technologies } from '../data/documentation/index.js'

// Met en minuscules et retire les accents : "Révision" → "revision"
const normalize = (text) =>
    text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

// Construit la liste de tout ce qui est cherchable
const index = technologies.flatMap((tech) =>
    tech.chapters.map((chapter) => ({
        title: chapter.title,
        techName: tech.name,
        color: tech.color,
        to: `/documentation/${tech.id}/${chapter.id}`,
        text: normalize(`${chapter.title} ${tech.name} ${chapter.explanation}`),
    }))
)

export function search(query) {
    const q = normalize(query.trim())
    if (q.length < 2) return []
    return index.filter((item) => item.text.includes(q)).slice(0, 6)
}