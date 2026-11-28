import html from './html.js'
import css from './css.js'

const soon = (id, name, color, description) => ({
    id, name, color, description, chapters: [],
})

export const technologies = [
    html,
    css,
    soon('javascript', 'JavaScript', '#f0c53b', "L'interactivité des pages."),
    soon('php', 'PHP', '#7a86b8', 'Le langage côté serveur.'),
    soon('sql', 'SQL', '#36c98f', 'Interroger les bases de données.'),
    soon('git', 'Git', '#e8503c', 'Suivre les versions de ton code.'),
    soon('bash', 'Bash', '#a0a8b8', 'Le terminal et ses commandes.'),
]