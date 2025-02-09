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
  gitFrontEnd?: string;
  gitBackEnd?: string;
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
    id: "masjid",
    title: "Masjid (En cours)",
    date: "2025-02",
    company: "Personnel",
    techStack: ["NextJS", "React", "TypeScript", "Prisma", "MongoDB"],
    stateManagements: [],
    gitFrontEnd: "https://github.com/nabilWafick/masjid",
    url: "https://masjid-one.vercel.app/",
    description:
      "Site Web pour une mosquée pour faciliter la collaboration avec les fidèles",
    overview:
      "Le but du site est de pourvoir partager avec les fidèles les informations, les actualités, les activités de la mosquée et leur permettre de contribuer à travers des aumônes et dons",
    features: [
      {
        title: "Thème",
        description: "Mise en place des thèmes clair et sombre",
      },
      {
        title: "Internationalisation",
        description:
          "L'intégration de l'internationalisation afin de permttre l'accessibilité du site web en français, en arabe et en anglais",
      },
      {
        title: "Administration",
        description:
          "Mise en place d'une page d'administration pour ajouter des activités, des actualités et gérer les données du site",
      },
    ],
    media: {
      screenshots: [
        "/masjid/masjid1.png",
        "/masjid/masjid2.png",
        "/masjid/masjid3.png",
        "/masjid/masjid4.png",
        "/masjid/masjid5.png",
        "/masjid/masjid6.png",
        "/masjid/masjid7.png",
        "/masjid/masjid8.png",
        "/masjid/masjid9.png",
        "/masjid/masjid10.png",
      ],
    },
  },

  {
    id: "portfolio",
    title: "Portfolio",
    date: "2025-01",
    company: "Personnel",
    techStack: ["NextJS", "React", "TypeScript"],
    stateManagements: [],
    gitFrontEnd: "https://github.com/nabilWafick/portfolio",
    description: "Portfolio détaillant mes expériences et compétances",
    overview:
      "Mon site web détaillant mon expérience et les projets sur lesquels j'ai travaillé",
    features: [
      {
        title: "Thème",
        description: "Utilisation d'un thème et couleur doux",
      },
      {
        title: "Animation",
        description: "Utilisation de framer motion pour faire des animations",
      },
      {
        title: "Détails",
        description:
          "Ajout d'une section pour détailler les projets sur lesquels j'ai déjà travaillé",
      },
    ],
    media: {
      screenshots: [
        "/portfolio/portfolio1.png",
        "/portfolio/portfolio2.png",
        "/portfolio/portfolio3.png",
        "/portfolio/portfolio4.png",
      ],
    },
  },
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
      screenshots: [
        "/minfo/minfo1.png",
        "/minfo/minfo2.png",
        "/minfo/minfo3.png",
        "/minfo/minfo4.png",
        "/minfo/minfo5.png",
      ],
    },
  },
  // {
  //   id: "pal-learning",
  //   title: "Pal Learning",
  //   date: "2024-09",
  //   company: "CodeLab",
  //   techStack: ["Next.js", "React", "TypeScript"],
  //   stateManagements: ["Zustand"],

  //   description: "Plateforme éducative d'apprentisage",
  //   overview:
  //     "Pal Learning est une plateforme qui a pour but de faciliter l'apprentissage de la programmation à travers des cours vidéos.",
  //   features: [
  //     {
  //       title: "Authentification",
  //       description:
  //         "L'intégration de l'authentification permettant aux utilisateurs d'accéder à leur dashboard",
  //     },
  //     {
  //       title: "Achat de cours",
  //       description:
  //         "L'intégration de systèmes de paiement permettant d'achter ds cours",
  //     },
  //     {
  //       title: "Lecture vidéo",
  //       description:
  //         "Intégration de lecteur vidéo permettant aux utilisateurs de suivre leurs cours directement sur la plateforme",
  //     },
  //   ],
  //   media: {
  //     screenshots: [],
  //   },
  // },
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
    gitFrontEnd: "https://github.com/nabilWafick/rst",
    gitBackEnd: "https://github.com/nabilWafick/communitybankapi",
    description: "Logiciel de gestion et de suivi d'activité d'épargne",
    overview:
      "RST est une solution complète permettant la gestion, le suivi, l'analyse des activités d'épargne d'une PME (Caisse Codes). Les clients épargnent pour recevoir à la fin des produits (ménagers, vivriers, ...).  L'entreprise offre plusieurs games d'épargne qui se resument en des combinaisons de produits (types). Une mise est définie par l'entreprise pour chaque type. Les client reçoivent des cartes en fonction du type choisi. Chaque carte comporte 372 règlements (paiements) soit au moins un règlement pour chaque jour de l'année. Un client peut avoir plusieurs cartes de types distincts. Chaque carte peut contenir plusieurs instances du même type. L'activité met en relation les clients et les collecteurs de l'entreprise. L'agence met à la disposition de ses clients ses collecteurs chargés de collecter les paiements journaliers des clients. Une fois à l'agence, les collecteurs mettent à la disposition des agents de l'entreprise la fiche de collecte permettant à ces derniers à travers le logiciel de répartir dans la base de données les collectes. Les clients reçoivent à l'échéance de leur carte, les produits auxquels ils ont souscrits.",
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
        title: "Filtrage basé sur PRISMA",
        description: `Le filtrage basé prisma permet à travers un formulaire qui est généré|construit en se basant sur le model prisma et génére une map(dictionnaire) comme 
          { skip: 0, take: 20, where: { AND: [{ name: { contains: 'pro', mode: insensitive } }, { price: { gte: 50 } }] } }
           `,
      },
      {
        title: "Module de Prévision",
        description:
          "Module de prévision SQL pour anticiper les besoins d'achat de produits par l'entreprise en prenant en compte les clients ayant atteint une marge donnée",
      },
    ],
    media: {
      screenshots: [
        "/rst/rst2.png",
        "/rst/rst1.png",
        "/rst/rst3.png",
        "/rst/rst4.png",
        "/rst/rst5.png",
        "/rst/rst6.png",
        "/rst/rst7.png",
        "/rst/rst8.png",
        "/rst/rst9.png",
        "/rst/rst10.png",
        "/rst/rst11.png",
        "/rst/rst12.png",
        "/rst/rst13.png",
        "/rst/rst14.png",
        "/rst/rst15.png",
        "/rst/rst16.png",
        "/rst/rst17.png",
        "/rst/rst18.png",
        "/rst/rst19.png",
        "/rst/rst20.png",
        "/rst/rst21.png",
        "/rst/rst22.png",
        "/rst/rst23.png",
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
    description:
      "Logiciel de visualisation et de stockage des données de dégradation routière traitées par IA",
    overview:
      "AuscuRoute révolutionne la surveillance de l'état des routes en combinant l'IA et la visualisation de données pour une gestion efficace de l'infrastructure routière. Grâce aux données recueillies des capteurs placés sur les camionnettes (Lidar, Caméra, GPS), l'IA utilisant la vision par ordinateur permet de visualiser à travers une vidéo les fissures, dégradations, nids de poule détectés en les encadrants. Les données collectées par le Lidar et le GPS sont traitées, utiliser pour faire des calculs. Les résultats sont ensuite envoyées au logiciel qui permet à l'utilisateur de les visualisés.",
    features: [
      {
        title: "Intégration IA",
        description:
          "Collaboration avec l'équipe IA pour une collection et intégration fluide des données traitées",
      },
      {
        title: "Visualisation des Données",
        description:
          "Interface intuitive pour visualiser les données de dégradation routière via une vidéo et des graphes",
      },
      {
        title: "Stockage",
        description:
          "Les résultats des traitements peuvent être exportés via un fichier excel ou pdf",
      },
    ],
    media: {
      screenshots: [
        "/auscuroute/auscuroute1.png",
        "/auscuroute/auscuroute2.png",
        "/auscuroute/auscuroute3.png",
        "/auscuroute/auscuroute4.png",
        "/auscuroute/auscuroute5.png",
        "/auscuroute/auscuroute6.png",
        "/auscuroute/auscuroute7.png",
        "/auscuroute/auscuroute8.png",
        "/auscuroute/auscuroute9.png",
        "/auscuroute/auscuroute10.png",
        "/auscuroute/auscuroute12.png",
        "/auscuroute/auscuroute13.png",
        "/auscuroute/auscuroute14.png",
        "/auscuroute/auscuroute15.png",
        "/auscuroute/auscuroute16.png",
        "/auscuroute/auscuroute17.png",
        "/auscuroute/auscuroute18.png",
        "/auscuroute/auscuroute19.png",
      ],
    },
  },
  {
    id: "jakiesarl",
    title: "JakieSarl",
    date: "2023-07",
    company: "JackieSarl",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MySQL"],
    stateManagements: ["Zustand"],
    gitFrontEnd: "https://github.com/nabilWafick/jackiesarl",
    gitBackEnd: "https://github.com/nabilWafick/jackiesarl_api",
    description:
      "Site web de gestion locale pour améliorer le suivi des ventes et la productivité des employés",
    overview:
      "Plateforme de gestion complète permettant à JakieSarl de digitaliser ses opérations et d'améliorer l'efficacité de ses processus commerciaux. Elle permet aux employés d'enregister et suivre les ventes de l'entreprise en fonction des permissions qui leurs sont accordées",
    features: [
      {
        title: "Système d'Authentification",
        description:
          "Développement d'un serveur Node.js avec systèmes d'authentification et d'autorisation",
      },
      {
        title: "Design Responsive",
        description:
          "Mise en place de la responsivité pour faciler l'usage sur ordinateurs et mobiles",
      },
      {
        title: "Gestion des Ventes",
        description: "Système complet de suivi et d'analyse des ventes",
      },
    ],
    media: {
      screenshots: [
        "/jackiesarl/jackiesarl2.png",
        "/jackiesarl/jackiesarl1.png",
        "/jackiesarl/jackiesarl3.png",
        "/jackiesarl/jackiesarl4.png",
        "/jackiesarl/jackiesarl5.png",
        "/jackiesarl/jackiesarl6.png",
        "/jackiesarl/jackiesarl7.png",
        "/jackiesarl/jackiesarl8.png",
        "/jackiesarl/jackiesarl9.png",
        "/jackiesarl/jackiesarl10.png",
        "/jackiesarl/jackiesarl11.png",
        "/jackiesarl/jackiesarl12.png",
        "/jackiesarl/jackiesarl13.png",
        "/jackiesarl/jackiesarl14.png",
        "/jackiesarl/jackiesarl15.png",
        "/jackiesarl/jackiesarl16.png",
        "/jackiesarl/jackiesarl17.png",
        "/jackiesarl/jackiesarl18.png",
      ],
    },
  },
  /* {
    id: "clean4city",
    title: "Clean4City",
    date: "2022-07",
    company: "Astra Horizon",
    techStack: ["Flutter", "Dart"],
    stateManagements: ["Riverpod"],

    git: "",
    description:
      "Application contribuant à l'amélioration de la propreté urbaine.",
    overview:
      "Clean4City est une solution innovante pour la gestion de la propreté urbaine. Elle a pour but d'aider les éboueurs à retrouver via l'application les poubelles (équipées de GPS, les plus proches d'eux).",
    features: [
      {
        title: "Signalement",
        description:
          "Système de signalement du niveau de remplissage de la capteur intégré à la poubelle",
      },
      {
        title: "Suivi en Temps Réel",
        description: "Monitoring en temps réel des interventions de nettoyage",
      },
    ],
    media: {
      screenshots: [
        "/images/clean4city/map.png",
        "/images/clean4city/reporting.png",
        "/images/clean4city/stats.png",
      ],
    },
  },*/
  /*  {
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
 */
];
