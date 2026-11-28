const c = (cmd, desc) => ({ cmd, desc })

const bash = {
    id: 'bash',
    name: 'Bash',
    color: '#a0a8b8',
    sections: [
        {
            title: 'Navigation',
            items: [
                c(`pwd`, 'Afficher le dossier courant'),
                c(`ls -al`, 'Lister les fichiers, y compris cachés, avec les détails'),
                c(`cd dossier`, 'Entrer dans un dossier'),
                c(`cd ..`, 'Remonter d\'un dossier'),
                c(`cd ~`, 'Aller dans ton dossier personnel'),
            ],
        },
        {
            title: 'Fichiers et dossiers',
            items: [
                c(`mkdir -p dossier/sous-dossier`, 'Créer un dossier (et ses parents)'),
                c(`touch fichier.txt`, 'Créer un fichier vide'),
                c(`cp source.txt copie.txt`, 'Copier un fichier'),
                c(`cp -r dossier copie-dossier`, 'Copier un dossier complet'),
                c(`mv ancien.txt nouveau.txt`, 'Renommer ou déplacer'),
                c(`rm fichier.txt`, 'Supprimer un fichier (définitif)'),
                c(`rm -r dossier`, 'Supprimer un dossier (définitif, attention)'),
                c(`cat fichier.txt`, 'Afficher le contenu d\'un fichier'),
            ],
        },
        {
            title: 'Permissions',
            items: [
                c(`ls -l`, 'Voir les permissions de chaque fichier'),
                c(`chmod +x script.sh`, 'Rendre un fichier exécutable'),
                c(`chmod -x fichier.txt`, 'Retirer le droit d\'exécution'),
                c(`chmod 700 script.sh`, 'Lecture, écriture et exécution pour toi seul'),
                c(`chmod 600 secret.txt`, 'Lecture et écriture pour toi seul'),
            ],
        },
        {
            title: 'Redirections',
            items: [
                c(`echo "texte" > fichier.txt`, 'Écrire dans un fichier (écrase le contenu)'),
                c(`echo "texte" >> fichier.txt`, 'Ajouter à la fin du fichier'),
                c(`ls -l > liste.txt`, 'Enregistrer le résultat d\'une commande'),
                c(`ls | grep ".txt"`, 'Envoyer le résultat d\'une commande à une autre (pipe)'),
            ],
        },
        {
            title: 'Écrire un script',
            items: [
                c(`#!/bin/bash`, 'Première ligne d\'un script Bash'),
                c(`./script.sh`, 'Lancer un script (après chmod +x)'),
                c(`nom="Alice"`, 'Créer une variable (pas d\'espace autour du =)'),
                c(`echo "Bonjour $nom"`, 'Utiliser une variable'),
                c(`echo "Bonjour $1"`, 'Utiliser le premier argument du script'),
                c(`date +%Y%m%d`, 'Date du jour au format AAAAMMJJ'),
                c(`if [ -d data ]; then echo "ok"; fi`, 'Tester si un dossier existe'),
            ],
        },
        {
            title: 'Rechercher',
            items: [
                c(`find . -name "*.tmp"`, 'Chercher des fichiers par nom'),
                c(`find . -name "*.tmp" -delete`, 'Chercher puis supprimer'),
                c(`grep "mot" fichier.txt`, 'Chercher un mot dans un fichier'),
                c(`which git`, 'Vérifier si un programme est installé'),
            ],
        },
        {
            title: 'Alias',
            items: [
                c(`alias ll='ls -al'`, 'Créer un raccourci (à mettre dans ~/.bashrc pour le garder)'),
            ],
        },
    ],
}

export default bash