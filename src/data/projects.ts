export interface Project {
  id: string;
  title: string;
  date: string;
  company?: string;
  techStack: string[];
  stateManagements: string[];
  url?: string;
  playStore?: string;
  appleStore?: string;
  git?: string;
  description?: string;
  overview?: string;
  features?: {
    title: string;
    description: string;
  }[];
  media?: {
    video?: string;
    screenshots?: string[];
  };
}

export const projects: Project[] = [
  {
    id: "minfo",
    title: "Minfo",
    date: "2024-09",
    company: "CodeLab",
    techStack: ["Flutter", "Dart"],
    stateManagements: ["GetX", "SetState", "Notifier"],
    url: "https://app.minfo.com",
    playStore:
      "https://play.google.com/store/apps/details?id=com.gzone.campaign&hl=fr",
    appleStore: "https://apps.apple.com/fr/app/minfo/id562527438",

    description:
      "Application mobile qui vous connecte de manière transparente aux informations et aux interactions dont vous rêvez",
    overview: `Découvrez une façon révolutionnaire d'interagir avec le monde qui vous entoure ! Minfo, abréviation de « Plus d'informations », transforme les moments quotidiens en expériences riches et interactives grâce à notre technologie brevetée AudioQR. Que vous exploriez de nouveaux produits, profitiez de vos médias préférés ou découvriez du contenu exclusif, Minfo vous .

Principales caractéristiques:
AudioQR Magic : découvrez la puissance d'AudioQR – un son invisible et inaudible qui vous connecte instantanément à un monde de contenu. Ouvrez simplement l'application Minfo et laissez la magie opérer.
Intégration transparente : interagissez sans effort avec des émissions de télévision, des programmes de radio et des événements en direct via l'application universelle de Minfo.
Offres et récompenses exclusives : débloquez des promotions spéciales, des remises et des récompenses de fidélité.
Informations éducatives : améliorez votre parcours d'apprentissage avec du contenu éducatif interactif.
Événements et expériences : restez connecté avec vos événements et activités préférés.
Élargissez vos horizons : voyagez plus intelligemment grâce à des informations détaillées sur les attractions touristiques.
Informations Complémentaires:
Minfo vous donne plus d'INFO, facilement et simplement. Notre application universelle transforme les médias, lieux et événements passifs en expériences interactives. Utilisez Minfo partout où vous voyez notre logo pour obtenir instantanément plus d'informations et accéder à un nouveau monde de contenu et d'offres. Minfo est entièrement opt-in, vous donnant le contrôle et vous permettant d'accéder simplement à un nouveau monde d'engagement et d'opportunités.

Minfo... Mes infos... Infos mobiles... Plus d'infos.

Pourquoi Minfo ? :
Minfo est plus qu'une simple application ; c'est votre compagnon pour explorer et interagir avec le monde de manière nouvelle et passionnante. Notre technologie innovante AudioQR et notre application universelle comblent le fossé entre les mondes numérique et physique, rendant chaque instant plus engageant et informatif.

Quoi de neuf:
Performances AudioQR améliorées : connexions plus rapides et plus fiables à votre contenu préféré.
Bibliothèque de contenu étendue : davantage d'offres exclusives, de médias interactifs et de ressources pédagogiques.
Interface utilisateur améliorée : design plus élégant pour une expérience plus fluide et plus intuitive.

`,
    features: [
      {
        title: "Gestion d'évènements",
        description:
          "Minfo permet de gérer des évènements notamment des campagnes en offrant un écosystème pour la gestion des participants (génération de code QR, connection entre participants, création de campagne personnels et professionnels pour les participants, tchat en participants)",
      },
      {
        title: "Encodage de multimédia",
        description:
          "Minfo permet de connecter des utilisateurs à des campagnes créées sur la plateforme à travers des fichiers audio et vidéo encodés spécifiquement pour la campagne",
      },
      {
        title: "Ultrason",
        description:
          "Minfo permet de connecter des utilisateurs à des campagnes créées sur la plateforme à travers des ultrasons générés spécifiquement pour la campagne",
      },

      {
        title: "Discussion instantanné",
        description:
          "Minfo permet intègre une messagerie instantannée permettant une discussion en temps réel",
      },
    ],
    media: {
      screenshots: [],
    },
  },
  {
    id: "pal-learning",
    title: "Pal Learning",
    date: "2024-09",
    company: "CodeLab",
    techStack: ["Next.js", "React", "TypeScript"],
    stateManagements: ["Zustand"],

    description: "Plateforme éducative d'apprentisage",
    overview:
      "Pal Learning est une plateforme qui a pour but de faciliter l'apprentissage de la programmation à travers des cours vidéos.",
    features: [
      {
        title: "Authentification",
        description:
          "L'intégration de l'authentification permettant aux utilisateurs d'accéder à leur dashboard",
      },
      {
        title: "Achat de cours",
        description:
          "L'intégration de systèmes de paiement permettant d'achter ds cours",
      },
      {
        title: "Lecture vidéo",
        description:
          "Intégration de lecteur vidéo permettant aux utilisateurs de suivre leurs cours directement sur la plateforme",
      },
    ],
    media: {
      screenshots: [],
    },
  },
  {
    id: "rst",
    title: "RST",
    date: "2024-01",
    company: "Caisse Codes",
    techStack: [
      "Flutter",
      "Dart",
      "NestJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
    ],
    stateManagements: ["Riverpod"],

    git: "https://github.com/nabilWafick/rst",
    description: "Logiciel de gestion et de suivi d'activité d'épargne",
    overview:
      "RST est une solution complète pour la gestion des activités d'épargne (locale) permettant la gestion, la suivie, l'analyse de l'activité ainsi la prévision des achats des produits par l'entreprise.",
    features: [
      {
        title: "Authentification",
        description:
          "Intégration de l'authentification permettant aux employés uniquement de se connecter et d'utilisr le logiciel",
      },
      {
        title: "Authorisation",
        description:
          "Intégration de de la gestion d'authorisation permettant à l'administrateur de donner des accès à des fonctionnalités et interfaces du logiciel",
      },
      {
        title: "CRUD",
        description:
          "Mise en place d'un système de CRUD permettant la gestions des données ( produits, types, agents, collecteurs, clients, localités, activités économiques, statuts personnels, cartes, règlements (répartitions))",
      },
      {
        title: "Module de Prévision",
        description:
          "Module de prévision SQL pour anticiper les besoins d'achat de produits",
      },
    ],
    media: {
      video: "https://youtube.com/watch?v=rst_demo",
      screenshots: [
        "/images/rst/dashboard.png",
        "/images/rst/analytics.png",
        "/images/rst/forecasting.png",
      ],
    },
  },
  {
    id: "auscuroute",
    title: "AuscuRoute",
    date: "2023-07",
    company: "HERIS Afrique",
    techStack: ["Flutter", "Dart"],
    stateManagements: ["Riverpod"],
    url: "https://auscuroute.herisafrique.com",
    playStore:
      "https://play.google.com/store/apps/details?id=com.herisafrique.auscuroute",
    appleStore: "https://apps.apple.com/app/auscuroute/id1234567893",
    git: "https://gitlab.com/heris-afrique/auscuroute",
    description:
      "Logiciel de visualisation et de stockage des données de dégradation routière traitées par IA",
    overview:
      "AuscuRoute révolutionne la surveillance de l'état des routes en combinant l'IA et la visualisation de données pour une gestion efficace de l'infrastructure routière.",
    features: [
      {
        title: "Intégration IA",
        description:
          "Collaboration avec l'équipe IA pour une intégration fluide des données traitées",
      },
      {
        title: "Visualisation des Données",
        description:
          "Interface intuitive pour visualiser les données de dégradation routière",
      },
      {
        title: "Stockage Optimisé",
        description:
          "Système de stockage efficace pour les données d'analyse routière",
      },
    ],
    media: {
      video: "https://youtube.com/watch?v=auscuroute_demo",
      screenshots: [
        "/images/auscuroute/map-view.png",
        "/images/auscuroute/analysis.png",
        "/images/auscuroute/reports.png",
      ],
    },
  },
  {
    id: "jakiesarl",
    title: "JakieSarl",
    date: "2023-07",
    company: "JackieSarl",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MySQL"],
    stateManagements: ["Riverpod"],
    url: "https://gestion.jakiesarl.bj",
    git: "https://gitlab.com/jakiesarl/gestion",
    description:
      "Site web de gestion locale pour améliorer le suivi des ventes et la productivité des employés",
    overview:
      "Plateforme de gestion complète permettant à JakieSarl de digitaliser ses opérations et d'améliorer l'efficacité de ses processus commerciaux.",
    features: [
      {
        title: "Système d'Authentification",
        description:
          "Développement d'un serveur Node.js avec systèmes d'authentification et d'autorisation",
      },
      {
        title: "Design Responsive",
        description:
          "Implémentation de principes de design responsive pour une expérience utilisateur optimale",
      },
      {
        title: "Gestion des Ventes",
        description: "Système complet de suivi et d'analyse des ventes",
      },
    ],
    media: {
      video: "https://youtube.com/watch?v=jakiesarl_demo",
      screenshots: [
        "/images/jakiesarl/dashboard.png",
        "/images/jakiesarl/sales.png",
        "/images/jakiesarl/employees.png",
      ],
    },
  },
  {
    id: "clean4city",
    title: "Clean4City",
    date: "2022-07",
    company: "Astra Horizon",
    techStack: ["Flutter", "Dart"],
    stateManagements: ["Riverpod"],
    url: "https://clean4city.astrahorizon.com",
    playStore:
      "https://play.google.com/store/apps/details?id=com.astrahorizon.clean4city",
    appleStore: "https://apps.apple.com/app/clean4city/id1234567894",
    git: "https://gitlab.com/astra-horizon/clean4city",
    description:
      "Application contribuant à l'amélioration de la propreté urbaine avec une accélération du développement de 40%",
    overview:
      "Clean4City est une solution innovante pour la gestion de la propreté urbaine, permettant aux citoyens et aux autorités de collaborer pour un environnement plus propre.",
    features: [
      {
        title: "Signalement",
        description: "Système de signalement des problèmes de propreté urbaine",
      },
      {
        title: "Suivi en Temps Réel",
        description: "Monitoring en temps réel des interventions de nettoyage",
      },
      {
        title: "Statistiques",
        description:
          "Tableau de bord analytique pour le suivi des performances",
      },
    ],
    media: {
      video: "https://youtube.com/watch?v=clean4city_demo",
      screenshots: [
        "/images/clean4city/map.png",
        "/images/clean4city/reporting.png",
        "/images/clean4city/stats.png",
      ],
    },
  },
  {
    id: "stacked",
    title: "StackEd",
    date: "2024",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "Prisma",
      "MongoDB",
    ],
    stateManagements: [],
    url: "https://stacked.education",
    git: "https://github.com/nabilWafick/stacked",
    description:
      "Plateforme simulant l'hébergement de cours et de sites d'adhésion style System.io",
    overview:
      "StackEd révolutionne la création et la gestion de cours en ligne en offrant une alternative moderne aux plateformes traditionnelles.",
    features: [
      {
        title: "Gestion de Cours",
        description:
          "Système complet de création et de gestion de cours en ligne",
      },
      {
        title: "Adhésions",
        description: "Gestion avancée des abonnements et des accès",
      },
      {
        title: "Analytics",
        description: "Tableau de bord détaillé pour le suivi des performances",
      },
    ],
    media: {
      video: "https://youtube.com/watch?v=stacked_demo",
      screenshots: [
        "/images/stacked/courses.png",
        "/images/stacked/memberships.png",
        "/images/stacked/analytics.png",
      ],
    },
  },
  {
    id: "armap",
    title: "ARMap",
    date: "2024",
    techStack: ["Flutter", "Dart"],
    stateManagements: [],
    url: "https://armap.navigation.bj",
    playStore:
      "https://play.google.com/store/apps/details?id=bj.navigation.armap",
    appleStore: "https://apps.apple.com/app/armap/id1234567895",
    git: "https://github.com/nabilWafick/armap",
    description:
      "Application de navigation mobile innovante intégrant la réalité augmentée avec Google Map",
    overview:
      "ARMap transforme l'expérience de navigation en combinant la puissance de Google Maps avec la réalité augmentée pour une orientation plus intuitive.",
    features: [
      {
        title: "Navigation AR",
        description:
          "Navigation en réalité augmentée superposée sur le monde réel",
      },
      {
        title: "Intégration Google Maps",
        description:
          "Utilisation des données Google Maps pour une navigation précise",
      },
      {
        title: "Mode Hors Ligne",
        description:
          "Fonctionnalités de base disponibles sans connexion internet",
      },
    ],
    media: {
      video: "https://youtube.com/watch?v=armap_demo",
      screenshots: [
        "/images/armap/ar-view.png",
        "/images/armap/map-view.png",
        "/images/armap/navigation.png",
      ],
    },
  },
  {
    id: "together",
    title: "Together",
    date: "2023",
    techStack: ["Flutter", "Dart", "Firebase"],
    stateManagements: [],
    url: "https://together-chat.app",
    playStore:
      "https://play.google.com/store/apps/details?id=app.together.chat",
    appleStore: "https://apps.apple.com/app/together-chat/id1234567896",
    git: "https://github.com/nabilWafick/together",
    description:
      "Application de chat en temps réel pour la communication entre camarades de classe",
    overview:
      "Together facilite la communication entre étudiants en offrant une plateforme de chat moderne et intuitive spécialement conçue pour le contexte éducatif.",
    features: [
      {
        title: "Authentification",
        description: "Système d'authentification sécurisé des utilisateurs",
      },
      {
        title: "Messagerie en Temps Réel",
        description:
          "Transmission des messages en temps réel pour une communication fluide",
      },
      {
        title: "Groupes de Discussion",
        description:
          "Création et gestion de groupes pour différentes classes ou projets",
      },
    ],
    media: {
      video: "https://youtube.com/watch?v=together_demo",
      screenshots: [
        "/images/together/chat.png",
        "/images/together/groups.png",
        "/images/together/profile.png",
      ],
    },
  },
];
