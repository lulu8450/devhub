const htmlQuiz = {
    id: 'quiz-html',
    title: 'Quiz HTML',
    color: '#e8643c',
    description: 'Balises, listes, formulaires et tableaux.',
    questions: [
        {
            question: "Quelle balise représente le titre le plus important d'une page ?",
            choices: ['<title>', '<h1>', '<header>', '<h6>'],
            answer: 1,
            explanation:
                "h1 est le titre principal du contenu. La balise title se place dans le head et s'affiche dans l'onglet du navigateur.",
        },
        {
            question: 'Quel attribut décrit une image pour les personnes qui ne peuvent pas la voir ?',
            choices: ['title', 'src', 'alt', 'href'],
            answer: 2,
            explanation:
                "alt fournit un texte alternatif lu par les lecteurs d'écran et affiché si l'image ne se charge pas.",
        },
        {
            question: 'Quelle balise crée une liste numérotée ?',
            choices: ['<ul>', '<li>', '<dl>', '<ol>'],
            answer: 3,
            explanation:
                'ol (ordered list) numérote ses éléments, ul (unordered list) affiche des puces. Dans les deux cas, chaque élément est un li.',
        },
        {
            question: "Dans un formulaire, à quoi doit correspondre l'attribut for d'un label ?",
            choices: ["À l'id du champ", 'Au name du champ', 'À la classe du champ', "À l'action du formulaire"],
            answer: 0,
            explanation:
                "for référence l'id du champ : cliquer sur le texte du label active alors le champ. L'attribut name sert, lui, à l'envoi de la valeur.",
        },
        {
            question: "Quelle balise regroupe les lignes d'en-tête d'un tableau ?",
            choices: ['<th>', '<tbody>', '<thead>', '<caption>'],
            answer: 2,
            explanation:
                "thead regroupe les lignes d'en-tête, tbody celles du corps. th désigne une seule cellule d'en-tête.",
        },
    ],
}

export default htmlQuiz