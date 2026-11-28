const html = {
    id: 'html',
    name: 'HTML',
    color: '#e8643c',
    description: 'Le langage qui structure toutes les pages web.',
    chapters: [
        {
            id: 'introduction',
            title: 'Introduction à HTML',
            level: 'Fondamentaux',
            explanation:
                "HTML (HyperText Markup Language) décrit la structure d'une page : titres, paragraphes, images, liens. Ce n'est pas un langage de programmation, c'est un langage de balises.",
            code:
`<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8" />
        <title>Ma première page</title>
    </head>
    <body>
        <h1>Bonjour !</h1>
        <p>Ceci est ma première page web.</p>
    </body>
</html>`,
            mistakes: [
                'Oublier de fermer une balise (</p>, </div>…).',
                "Oublier <meta charset> : les accents s'affichent mal.",
            ],
        },
        {
            id: 'titres-paragraphes',
            title: 'Titres et paragraphes',
            level: 'Fondamentaux',
            explanation:
                'Il existe six niveaux de titres, de <h1> (le plus important) à <h6>. Le texte courant se place dans des paragraphes <p>.',
            code:
`<h1>Titre principal</h1>
<h2>Sous-titre</h2>
<p>Un paragraphe de texte.</p>`,
            mistakes: [
                'Utiliser plusieurs <h1> sur la même page.',
                'Choisir un titre pour sa taille plutôt que pour son importance : la taille se règle en CSS.',
            ],
        },
        {
            id: 'liens-images',
            title: 'Liens et images',
            level: 'Fondamentaux',
            explanation:
                "Le lien <a> mène vers une autre page grâce à l'attribut href. L'image <img> affiche un fichier grâce à src, avec un texte alternatif alt.",
            code:
`<a href="https://developer.mozilla.org">Documentation MDN</a>

<img src="images/logo.png" alt="Logo du site" />`,
            mistakes: [
                "Oublier l'attribut alt sur les images.",
                'Se tromper de chemin dans src : vérifie le nom du dossier et du fichier.',
            ],
        },
        {
            id: 'listes',
            title: 'Les listes',
            level: 'Fondamentaux',
            explanation:
                "Une liste non ordonnée (ul) affiche des puces, une liste ordonnée (ol) numérote ses éléments. Dans les deux cas, chaque élément est placé dans une balise li.",
            code:
`<ul>
    <li>Pomme</li>
    <li>Poire</li>
    <li>Cerise</li>
</ul>

<ol>
    <li>Ouvrir l'éditeur</li>
    <li>Écrire le code</li>
    <li>Tester dans le navigateur</li>
</ol>`,
            mistakes: [
                'Mettre du texte directement dans ul ou ol : seuls les li y sont autorisés.',
                "Choisir ol alors que l'ordre n'a pas d'importance, ou l'inverse.",
            ],
        },
        {
            id: 'formulaires',
            title: 'Les formulaires',
            level: 'Intermédiaire',
            explanation:
                "Un formulaire (form) regroupe des champs de saisie. Chaque champ a un label relié par for et id, et un attribut name : sans lui, la valeur n'est pas envoyée. Le type du champ (text, email, date) change le clavier et les vérifications du navigateur.",
            code:
`<form action="/envoi" method="post">
    <label for="prenom">Prénom</label>
    <input type="text" id="prenom" name="prenom" />

    <label for="mail">E-mail</label>
    <input type="email" id="mail" name="mail" />

    <label for="msg">Message</label>
    <textarea id="msg" name="msg" rows="4" cols="40"></textarea>

    <label for="jour">Date</label>
    <input type="date" id="jour" name="jour" />

    <button type="submit">Envoyer</button>
</form>`,
            mistakes: [
                "Oublier l'attribut name : la valeur du champ n'est pas transmise.",
                "Le for du label ne correspond pas à l'id du champ : un clic sur le texte ne sélectionne plus le champ.",
                'Utiliser type="text" pour un e-mail ou une date au lieu du type adapté.',
            ],
        },
        {
            id: 'tableaux',
            title: 'Les tableaux',
            level: 'Intermédiaire',
            explanation:
                "Un tableau (table) sert à présenter des données. Chaque ligne est un tr, une cellule d'en-tête est un th et une cellule de données est un td. thead contient l'en-tête, tbody le corps.",
            code:
`<table>
    <thead>
        <tr>
            <th>Produit</th>
            <th>Prix</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Pomme</td>
            <td>1,20 €</td>
        </tr>
        <tr>
            <td>Poire</td>
            <td>1,50 €</td>
        </tr>
    </tbody>
</table>`,
            mistakes: [
                'Utiliser un tableau pour mettre en page : il est réservé aux données, la mise en page se fait en CSS.',
                'Avoir un nombre de cellules différent selon les lignes.',
            ],
        },
        {
            id: 'validateur-html',
            title: 'Valider son code',
            level: 'Fondamentaux',
            explanation:
                "Un validateur vérifie que ton code respecte les règles du langage. Le validateur HTML du W3C (validator.w3.org) et le validateur CSS (jigsaw.w3.org/css-validator) indiquent la ligne de chaque erreur. Prends l'habitude de les utiliser avant de rendre un projet.",
            code:
`<!-- Erreur : image sans attribut alt -->
<img src="photo.jpg" />

<!-- Correct -->
<img src="photo.jpg" alt="Un chat endormi" />

<!-- Erreur : balise ouverte jamais fermée -->
<p>Un paragraphe

<!-- Correct -->
<p>Un paragraphe</p>`,
            mistakes: [
                'Corriger les erreurs au hasard : commence par la première, car elle provoque souvent les suivantes.',
                'Oublier la structure de base : doctype, html, head avec title, body.',
            ],
        },
    ],
}

export default html