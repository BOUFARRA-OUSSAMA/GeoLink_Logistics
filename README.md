



## Frontend

### Technologies Used

- React: Utilisé pour construire l'interface utilisateur. React permet de créer des composants réutilisables et de gérer efficacement le DOM grâce à son Virtual DOM.

- Material-UI: Bibliothèque de composants d'interface utilisateur pour React, basée sur les principes de Material Design de Google. Elle offre une large gamme de composants prêts à l'emploi.
Mapbox: Utilisé pour intégrer des cartes interactives et afficher des données géospatiales.

- Firebase: Utilisé pour l'authentification et le stockage de fichiers.


## Frontend Project Structure

Le projet frontend en React est organisé autour de plusieurs composants principaux, chacun ayant un rôle spécifique et contribuant à l'architecture et à la maintenabilité globale de l'application.

### 1. Home Component

- **Purpose:** Le composant Home sert de point d'entrée principal de l'application, fournissant une page d'accueil ou une interface initiale.
- **Functionality:** Il peut inclure des liens de navigation, des messages de bienvenue ou tout autre contenu guidant les utilisateurs à travers l'application.
### 2. Map Component

- **Purpose:**  Le composant Map est responsable de l'affichage de la carte interactive utilisant Mapbox.
- **Functionality:** Les utilisateurs peuvent interagir avec la carte, zoomer, et cliquer sur des marqueurs pour voir plus de détails sur les offres géolocalisées.

### 3. OfferList Component

- **Purpose:** Le composant OfferList se concentre sur l'affichage des offres disponibles.
- **Functionality:** Il récupère et présente les offres, permettant aux utilisateurs de voir les détails ou d'effectuer des actions liées aux offres récupérées depuis le backend.

### 4. OfferDetail Component

- **Purpose:** Le composant OfferDetail affiche les détails d'une offre spécifique.
- **Functionality:** Les utilisateurs peuvent voir les informations détaillées d'une offre, telles que la description, le prix, et les images.

### 5. AddOffer Component

- **Purpose:** Le composant AddOffer est responsable de la gestion de l'ajout de nouvelles offres par les utilisateurs.
- **Functionality:** Les utilisateurs peuvent saisir des informations pertinentes et soumettre des données, déclenchant des actions telles que la création de nouveaux enregistrements ou entités.

### 6. UserProfile Component

- **Purpose:** Le composant UserProfile permet aux utilisateurs de consulter et de modifier leurs informations personnelles.
- **Functionality:** Les utilisateurs peuvent accéder à leurs profils, voir leurs informations et les mettre à jour.

### 7. Dashboard Component

- **Purpose:** : Le composant Dashboard sert de hub central pour les administrateurs, offrant une vue d'ensemble des métriques clés et des informations importantes.
- **Functionality:** Il peut agréger des données provenant de diverses sources et les présenter de manière visuellement attrayante et informative.

### Shared Components and Services

- **Shared Components:** Identifiez les composants réutilisés dans plusieurs parties de l'application pour promouvoir la réutilisabilité du code. Par exemple, un composant Button ou Modal.
- **Services:** Mentionnez les services React utilisés pour les fonctionnalités communes, la récupération de données ou l'interaction avec le backend. Par exemple, un service API pour les requêtes HTTP ou un service Auth pour la gestion de l'authentification.

### Routing

- **Angular Router:** Décrivez comment React Router est utilisé pour naviguer entre les différents composants, assurant une expérience utilisateur fluide.

### Styling and Theming

- **Styling:** Spécifiez l'approche de style, que ce soit via CSS simple, SCSS ou l'utilisation d'un framework CSS spécifique (comme Material-UI).
- **Theming:** Si applicable, décrivez comment le theming est géré dans l'application, par exemple, en utilisant le système de theming de Material-UI..

### Dependencies

Liste des principales dépendances pour le frontend avec leurs versions respectives.

```json
{
  "dependencies": {
    "@emotion/react": "^11.9.0",
    "@emotion/styled": "^11.8.1",
    "@mapbox/mapbox-gl-geocoder": "^5.0.2",
    "@mui/icons-material": "^5.6.1",
    "@mui/material": "^5.6.1",
    "@mui/x-data-grid": "^5.13.1",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.0.1",
    "@testing-library/user-event": "^13.5.0",
    "firebase": "^9.23.0",
    "jwt-decode": "^3.1.2",
    "leaflet": "^1.9.4",
    "mapbox-gl": "^2.15.0",
    "moment": "^2.29.3",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-dropzone": "^14.2.1",
    "react-leaflet": "^4.2.1",
    "react-map-gl": "^7.1.7",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "recharts": "^2.1.12",
    "supercluster": "^7.1.5",
    "swiper": "^8.2.2",
    "uuid": "^8.3.2",
    "web-vitals": "^2.1.4"
  }
}

```

