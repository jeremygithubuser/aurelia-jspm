/*Créer le package.json*/
npm init

/*Installer jspm*/
npm install jspm --save

/*Créer un fichier de configuration pour git*/
echo node_modules/> .gitignore |  echo jspm_packages/>> .gitignore |  echo dist>> .gitignore

