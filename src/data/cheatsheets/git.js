const c = (cmd, desc) => ({ cmd, desc })

const git = {
    id: 'git',
    name: 'Git',
    color: '#e8503c',
    sections: [
        {
            title: 'Configuration',
            items: [
                c(`git config --global user.name "Ton Nom"`, 'Définir ton nom'),
                c(`git config --global user.email "ton@email.com"`, 'Définir ton e-mail'),
                c(`git config --global user.name`, 'Vérifier la valeur enregistrée'),
            ],
        },
        {
            title: 'Démarrer',
            items: [
                c(`git init`, 'Créer un dépôt dans le dossier courant'),
                c(`git clone <url>`, 'Copier un dépôt existant'),
            ],
        },
        {
            title: 'Au quotidien',
            items: [
                c(`git status`, 'Voir l\'état des fichiers'),
                c(`git add fichier.txt`, 'Ajouter un fichier au prochain commit'),
                c(`git add .`, 'Ajouter tous les changements'),
                c(`git commit -m "message"`, 'Enregistrer les changements'),
                c(`git push`, 'Envoyer tes commits vers GitHub'),
                c(`git pull`, 'Récupérer les changements de GitHub'),
                c(`git log --oneline`, 'Afficher l\'historique condensé'),
            ],
        },
        {
            title: 'Branches',
            items: [
                c(`git branch`, 'Lister les branches'),
                c(`git switch -c dev`, 'Créer la branche dev et s\'y placer'),
                c(`git switch main`, 'Revenir sur la branche main'),
                c(`git merge dev`, 'Fusionner dev dans la branche actuelle'),
                c(`git branch -d dev`, 'Supprimer une branche déjà fusionnée'),
            ],
        },
        {
            title: 'Résoudre un conflit',
            items: [
                c(`git status`, 'Repérer les fichiers en conflit'),
                c(`<<<<<<< ======= >>>>>>>`, 'Marqueurs à supprimer en gardant le bon contenu'),
                c(`git add fichier.txt`, 'Marquer le conflit comme résolu'),
                c(`git commit`, 'Terminer la fusion'),
                c(`git merge --abort`, 'Annuler la fusion en cours'),
            ],
        },
        {
            title: 'Annuler',
            items: [
                c(`git restore fichier.txt`, 'Annuler les modifications non ajoutées (définitif)'),
                c(`git restore --staged fichier.txt`, 'Retirer un fichier de la zone d\'ajout'),
                c(`git commit --amend -m "nouveau message"`, 'Corriger le dernier commit (avant le push)'),
            ],
        },
        {
            title: 'Fichier .gitignore',
            items: [
                c(`temp/`, 'Ignorer tout un dossier'),
                c(`*.log`, 'Ignorer tous les fichiers .log, où qu\'ils soient'),
            ],
        },
    ],
}

export default git