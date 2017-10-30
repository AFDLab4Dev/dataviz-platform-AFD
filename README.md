# Dataviz platform AFD V 0.1

## Pourquoi une plateforme de datavisualisation ? 

Une grande variété d'indicateurs, de données, sont disponibles grâce au travail d'organisation comme l'ONU, la Banque Mondiale, FMI, USAID, mais aussi des communautés du libre comme les données OpenStreetMap etc... Malheureusement il est difficile de les faire parler, et le savoir contenu dans ces données nécessitent trop souvent l'intervention d'un expert, même pour des questions basiques.

__La plateforme Dataviz de l'AFD vise à rendre plus facile l'accès à ces données, notamment sous forme de dataviz, ou outil d'analyse simple__

## Ceci est une version alpha/beta/0.1/work in progress etc...

... Cela veut dire que de nombreux petits bugs existent, des passages inélégants, des tests qui manquent.. N'hésitez à pas être (positivement) critiques et nous faire remonter les problèmes sur la page issue !


## Les différentes fonctionnalités

* __Country Dashboard__ : Comment comprendre les multiples facettes d'un pays ? C'est l'objectif du "Country Dashboard", permettant de visualiser de nombreux indicateurs d'un pays.
* __Indicator browser__: Vous chercher une donnée précise pour un pays ? Grâce à l'indicator browser, vous pourrez la récupérer facilement et la visualiser instantanement. 
* __Urban Dashboard__: Quelle est le population d'un quartier ? Combien d'habitants vivent à moins de 500 mètres de cette route ? C'est pour répondre à ces questions que l'urban dashboard manipule les données de census et permet de calculer très rapidement la population d'une zone donnée.
* __Rapports interactifs__ : Dans le cadre des activités de l'équipe Data de l'AFD, des rapports interactifs à partir de données ouvertes sont écrits et ouvert à tous.

## dataviz4dev.js

Construire un tableau de bord nécessite de bons outils. C'est pourquoi l'équipe Data de l'AFD a commencé à écrire dataviz4dev.js, une bibliothèque javascript qui permet de convertir une ligne de code en un magnifique graphe __Highcharts__ à partir d'une API de l'AFD ou d'un fournisseur de données. Le but est de rendre les données de développement le plus accessible possible aux développeurs web, ou aux Data journalistes afin qu'ils puissent créer une dataviz rapide sans connaissance particulière des API.

## Comment la répliquer chez soi ? 

### Prérequis
* Installation d'une version de python (je recommande Python 3.x, installé via Anaconda)
* Navigateur moderne (pas de IE 8 ...)

### Mode d'emploi
* Répliquer le dépôt (soit via git clone, soit en téléchargeant le zip)
* Ouvrir cmd ou bash (je recommancde anaconda bash sous windows) et se placer dans le répertoire (cd ou dir ../.../dataviz-platform-AFD)
* Lancer la commande "python -m http.server" si Python 3.x, "python -m SimpleHTTPserver" si 2.x. Si le paquet n'est pas installé, l'installer avec "conda install xxx" ou "pip install xxx"
* Lancer son navigateur sur le lien suivant "http://localhost:8000"
* Et voilà


## Entrepreneur d'intérêt général

Cette plateforme a d'abord été écrite par Etienne David dans le cadre du programme "Entrepreneur d'intérêt Général" du SGMAP. Ce programme a pour vocation d'accélérer la transformation numérique de l'Etat grâce à des entrepreneurs du numérique en résidence pendant 10 mois dans une administration.

## Prochaines étapes de développement

### Développement dataviz4dev.js

dataviz4dev.js est une bibliothèque toute jeune, non opérationnelle encore, et qui va se développer afin de répondre aux besoins de data.afd.fr.

### Corrections des bugs

N'hésitez pas à nous faire remonter tous types de bug !

### Ajout de données supplémentaires
* Un travail va être effectué pour sourcer d'autres API que celle de la banque mondiale et de USAID afin d'enrichir le "Indicator Browser"
* Pour des jeux de données non disponibles sous forme d'API mais intéressant pour la communauté du développement, l'AFD travaillera à les mettre à disposition via une future API maison


### A propos

L'UX a été forké de [Start Bootstrap - SB Admin](https://startbootstrap.com/template-overviews/sb-admin/). La plupart des fichiers css ont été écrit par ce projet.

[SB Admin](http://startbootstrap.com/template-overviews/sb-admin/) est un template pour tableau de bord ouvert utilisant [Bootstrap](http://getbootstrap.com/), créé par [Start Bootstrap](http://startbootstrap.com/).



