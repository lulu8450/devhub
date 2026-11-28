import { technologies } from '../data/documentation/index.js'
import { sheets } from '../data/cheatsheets/index.js'

// Met en minuscules et retire les accents : "Révision" → "revision"
const normalize = (text) =>
    text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

// Construit la liste de tout ce qui est cherchable
const docEntries = technologies.flatMap((tech) => // Technologies
    tech.chapters.map((chapter) => ({
        title: chapter.title,
        techName: tech.name,
        color: tech.color,
        to: `/documentation/${tech.id}/${chapter.id}`,
        text: normalize(`${chapter.title} ${tech.name} ${chapter.explanation}`),
    }))
)

const sheetEntries = sheets.flatMap((sheet) => // CheatSheet
    sheet.sections.map((section) => ({
        title: section.title,
        techName: `${sheet.name} · Fiche`,
        color: sheet.color,
        to: `/cheatsheets/${sheet.id}`,
        text: normalize(
            `${sheet.name} ${section.title} ` +
            section.items.map((i) => `${i.cmd} ${i.desc}`).join(' ')
        ),
    }))
)

const index = [...docEntries, ...sheetEntries]

export function search(query) {
    const q = normalize(query.trim())
    if (q.length < 2) return []
    return index.filter((item) => item.text.includes(q)).slice(0, 6)
}