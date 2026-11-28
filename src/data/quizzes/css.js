const cssQuiz = {
    id: 'quiz-css',
    title: 'Quiz CSS',
    color: '#3c8ce8',
    description: 'Sélecteurs, boîte, flexbox.',
    questions: [
        {
            question: 'Quel symbole désigne une classe dans un sélecteur CSS ?',
            choices: ['#', '.', '@', ':'],
            answer: 1,
            explanation: '.carte cible les éléments de classe carte. Le # sert aux identifiants uniques.',
        },
        {
            question: 'Comment écrit-on un commentaire en CSS ?',
            choices: ['// commentaire', '<!-- commentaire -->', '/* commentaire */', '# commentaire'],
            answer: 2,
            explanation:
                "Le CSS n'accepte que la forme /* ... */. La forme <!-- --> est réservée au HTML.",
        },
        {
            question: "Quelle propriété ajoute de l'espace entre le contenu d'une boîte et sa bordure ?",
            choices: ['margin', 'padding', 'gap', 'border-spacing'],
            answer: 1,
            explanation: "padding est l'espace intérieur, margin l'espace extérieur.",
        },
        {
            question: 'Quelle déclaration transforme un conteneur en flexbox ?',
            choices: ['position: flex;', 'flex: container;', 'layout: flex;', 'display: flex;'],
            answer: 3,
            explanation: 'display: flex se place sur le conteneur, et ses enfants se disposent alors en ligne.',
        },
        {
            question: 'Que fait margin: 0 auto sur un bloc de largeur fixe ?',
            choices: [
                'Il supprime ses bordures',
                'Il le colle à gauche',
                'Il le centre horizontalement',
                'Il ajoute un padding automatique',
            ],
            answer: 2,
            explanation:
                "Les marges gauche et droite deviennent égales : le bloc est centré. Sans largeur définie, il occuperait déjà toute la ligne.",
        },
    ],
}

export default cssQuiz