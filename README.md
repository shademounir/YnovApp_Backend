# ynov cachier den charge



1. Introduction
Ce document décrit les spécifications techniques pour le développement d’une plateforme de gestion scolaire pour YNOV Maroc Campus, en utilisant Node.js et Firebase. La plateforme gérera plusieurs tâches, notamment les absences, les demandes de documents administratifs, et les frais de scolarité.

2. Architecture de l’Application
•	Frontend : Utilisation de React.js pour une interface utilisateur dynamique et réactive.
•	Backend : Utilisation de Node.js avec Firebase Cloud Functions pour les opérations backend.
•	Base de données : Utilisation de Firestore pour stocker les données des utilisateurs, absences, paiements, et autres informations pertinentes.
•	Authentification : Utilisation de Firebase Authentication pour sécuriser les sessions utilisateur.
3. Fonctionnalités Techniques
1.	Gestion des Comptes Utilisateurs

o	Création et Gestion des Comptes : Stockage des informations des utilisateurs dans Firestore.
o	Authentification Sécurisée : Implémentation de Firebase Authentication pour les sessions sécurisées.
o	Gestion des Rôles et Permissions : Définition des rôles (administrateur, professeur, étudiant) et des permissions associées.

2.	Suivi des Paiements

o	Enregistrement des Paiements : Utilisation de Firestore pour enregistrer les paiements effectués par les étudiants.
o	Génération de Reçus Numériques : Utilisation de Firebase Cloud Functions pour générer des reçus en PDF.
o	Historique des Paiements : Stockage et récupération des historiques de paiements via Firestore.




3.	Gestion des Frais de Scolarité et Retards de Paiement

o	Définition des Frais : Interface d’administration pour définir et mettre à jour les frais de scolarité.
o	Détection des Paiements en Retard : Scripts backend dans Firebase Cloud Functions pour vérifier les paiements en retard et déclencher des rappels.
o	Envoi de Rappels Automatiques : Intégration avec Firebase Cloud Messaging pour envoyer des notifications push et des emails.




4.	Gestion des Absences

o	Centralisation des Absences et Retards : Stockage des absences et retards par période dans Firestore.
o	Notification des Étudiants : Envoi de notifications quotidiennes aux étudiants concernant leurs absences et retards via Firebase Cloud Messaging.
o	Justification des Absences : Interface pour marquer les absences comme justifiées ou non.
o	Calcul des Malus : Script backend pour retrancher des points par matière en fonction des absences.
o	Interface pour les Professeurs :
	Accès Professeur : Interface dédiée pour les professeurs afin de marquer les absences des étudiants.
	Connexion Sécurisée : Utilisation de Firebase Authentication pour sécuriser l’accès des professeurs.
	Synchronisation avec l’Administration : Les absences marquées par les professeurs sont automatiquement synchronisées avec le système de gestion des absences administré par les administrateurs.










5.	Demandes de Documents Administratifs

o	Types de Documents : Gestion des demandes pour divers documents administratifs (attestations de scolarité, relevés de notes, conventions de stage, etc.).
o	Formulaires et Téléchargements : Interface pour remplir et télécharger les documents nécessaires.
o	Suivi des Demandes : Stockage et suivi des demandes de documents dans Firestore.

6.	Tableau de Bord et Rapports

o	Tableau de Bord en Temps Réel : Utilisation de Firestore pour mettre à jour les informations en temps réel.
o	Rapports Détaillés : Génération de rapports via des requêtes Firestore agrégées et affichage via des graphiques (bibliothèques comme Chart.js).





7.	Sécurité et Confidentialité

o	Sauvegardes Régulières : Utilisation des fonctionnalités de sauvegarde de Firebase pour protéger les données.
o	Chiffrement des Données Sensibles : Utilisation de Firebase Security Rules pour protéger les données sensibles.











4. Déploiement

1.	Environnement de Développement

o	Utilisation de Firebase CLI pour gérer le déploiement et les configurations.
o	Configuration de l’environnement de développement avec Firebase Hosting et Firestore.

2.	Environnement de Production

o	Déploiement sur Firebase Hosting pour le frontend.
o	Utilisation de Firebase Cloud Functions pour les opérations backend.
o	Mise en place d’un CI/CD avec des outils comme GitHub Actions pour automatiser les déploiements.

3.	Sécurité

o	Configuration de HTTPS pour sécuriser les communications.
o	Mise en place de Firebase Security Rules pour protéger les données.














5. Avantages de Firebase
1.	Modèle de Tarification Basé sur la Consommation
o	Firebase permet de payer uniquement pour les ressources consommées, contrairement à un hébergement traditionnel où les frais sont fixes indépendamment de l’utilisation réelle. Cela est particulièrement avantageux pour une application interne avec une consommation de service modérée.
2.	Facilité de Déploiement et de Gestion
o	Firebase offre une intégration transparente entre les différents services (authentification, base de données, fonctions cloud), simplifiant ainsi le développement et la gestion de l’application.
3.	Scalabilité
o	Firebase permet de facilement faire évoluer l’application en fonction des besoins, sans nécessiter de modifications majeures de l’infrastructure.


6.Prérequis et Ressources pour l'Initialisation du Projet Firebase

1.	Prérequis
o	Compte Firebase : Créer un compte Firebase pour l'école.
o	Carte de Crédit : Valider un paiement amorcé avec une carte Visa de 0 euro pour bénéficier de trois mois gratuits de service.
o	Node.js et npm : Installer Node.js et npm sur les machines de développement.
o	Firebase CLI : Installer Firebase CLI pour gérer les déploiements.
2.	Ressources
o	Documentation Firebase : Firebase Documentation
o	Tutoriels Vidéo :
	Initialisation d'un Projet Firebase
	Déploiement d'une Application Web avec Firebase Hosting
o	Exemples de Code : Exemples de configuration et d'utilisation de Firebase disponibles sur GitHub et autres plateformes de partage de code.


