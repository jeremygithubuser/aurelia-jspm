/*Créer le package.json*/
npm init

/*Installer jspm*/
npm install jspm --save

/*Créer un fichier de configuration pour git*/
echo node_modules/> .gitignore |  echo jspm_packages/>> .gitignore |  echo dist>> .gitignore

/*Enregistrer les credentials github*/
git config --global credential.helper wincred

echo "# aurelia-jspm" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/jeremygithubuser/aurelia-jspm.git
git push -u origin master

git add . 
git push -u origin master
