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
            code: `<!DOCTYPE html>
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
            code: `<h1>Titre principal</h1>
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
            code: `<a href="https://developer.mozilla.org">Documentation MDN</a>

<img src="images/logo.png" alt="Logo du site" />`,
            mistakes: [
                "Oublier l'attribut alt sur les images.",
                'Se tromper de chemin dans src : vérifie le nom du dossier et du fichier.',
            ],
        },
    ],
}

export default html