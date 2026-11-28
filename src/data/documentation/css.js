const css = {
    id: 'css',
    name: 'CSS',
    color: '#3c8ce8',
    description: 'Le design et la mise en page.',
    chapters: [
        {
            id: 'lier-css',
            title: 'Relier le CSS au HTML',
            level: 'Fondamentaux',
            explanation:
                "Le CSS décrit l'apparence d'une page : couleurs, polices, espacements. Il s'écrit dans un fichier séparé, relié au HTML par une balise link placée dans le head.",
            code: 
`<!-- Dans le <head> de ta page HTML -->
<link rel="stylesheet" href="style.css" />
<!-- Permet de relier le fichier css a notre fichier html -->

/* Dans style.css */
body {
    font-family: Arial, sans-serif;
}
/* Permet de changer la font-family de chaque balise se trouvant a l'intèrieure de body */`,
            mistakes: [
                'Se tromper de chemin dans href : le fichier CSS doit être trouvé depuis la page.',
                'Oublier rel="stylesheet" : le navigateur ignore alors le fichier.',
            ],
        },
        {
            id: 'selecteurs-couleurs',
            title: 'Sélecteurs et couleurs',
            level: 'Fondamentaux',
            explanation:
                "Un sélecteur désigne les éléments à styler. On peut cibler une balise (NomDeLaBalise), une classe (.NomDeLaClasse) ou un identifiant unique (#NomDeL'Identifiant). Les couleurs s'écrivent avec un nom, un code hexadécimal ou rgb().",
            code:
`/* Cible toutes les balises "h1" */
h1 { color: darkblue; }

/* Cible toutes les balises ayant la classe "carte" */
.carte { background: lightgrey; }

/* Cible la balise ayant l'identifiant unique "menu" */
#menu { color: #5a62e8; }

/* Cible toutes les balises "h2", "h3" et "h4" */
h2, h3, h4 { color: rgb(0, 0, 0); }

/* Cible toutes les balises "p" à l'intérieur d'un élément ayant la classe "champ" */
.champ p { color: rgb(60, 60, 60); }`,
            mistakes: [
                'Oublier le point devant une classe ou le # devant un identifiant.',
                "Utiliser le même identifiant (id) sur plusieurs éléments : il doit être unique, une classe peut servir plusieurs fois.",
                'Oublier le point-virgule à la fin d\'une déclaration.',
            ],
        },
        {
            id: 'boite',
            title: 'Le modèle de boîte',
            level: 'Fondamentaux',
            explanation:
                "Chaque élément est une boîte : le contenu, le padding (espace intérieur), la border (bordure) et la margin (espace extérieur). Avec margin: 0 auto, un bloc de largeur fixe se centre horizontalement.",
            code:
`.fiche {
    width: 320px;
    margin: 0 auto;
    padding: 1rem;
    border: 2px dotted teal;
    border-radius: 12px;
    text-align: center;
}`,
            mistakes: [
                'Confondre margin (autour de la boîte) et padding (dans la boîte).',
                'Centrer avec margin: auto sans donner de largeur au bloc : il occupe déjà toute la ligne.',
            ],
        },
        {
            id: 'flexbox',
            title: 'Flexbox : aligner en ligne',
            level: 'Intermédiaire',
            explanation:
                "Avec display: flex sur un conteneur, ses enfants se placent côte à côte. justify-content répartit l'espace, gap crée un écart régulier et flex-wrap autorise le passage à la ligne.",
            code: 
`.liste {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
}

.liste > div {
    flex: 1;
}`,
            mistakes: [
                'Mettre display: flex sur les enfants au lieu du conteneur.',
                "Oublier flex-wrap : sur petit écran, les éléments se compressent au lieu de passer à la ligne.",
            ],
        },
        {
            id: 'grid',
            title: 'CSS Grid : organiser en grille',
            level: 'Intermédiaire',
            explanation:
                "Grid place les éléments sur des lignes et des colonnes. repeat(3, 1fr) crée trois colonnes de largeur égale, gap règle les espaces. Flexbox gère une direction à la fois, Grid en gère deux.",
            code:
`.galerie {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
}`,
            mistakes: [
                'Oublier grid-template-columns : sans lui, tout reste empilé en une seule colonne.',
                'Utiliser Grid pour une simple rangée, alors que Flexbox suffit.',
            ],
        },
    ],
}

export default css