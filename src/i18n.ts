export type Language = "fr" | "en";

const content = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      experience: "Expérience",
      projects: "Projets",
      contact: "Contact",
      menuOpen: "Ouvrir le menu",
      menuClose: "Fermer le menu",
      language: "Langue du site",
    },
    hero: {
      eyebrow: "DÉVELOPPEUR WEB & MOBILE",
      title: "Je conçois des expériences web utiles et robustes.",
      description:
        "Développeur web et mobile, je crée des applications avec React, Node.js et Flutter, avec une attention particulière à la sécurité et à la fiabilité des systèmes.",
      contact: "Parlons de votre projet",
      cv: "Télécharger mon CV",
      imageAlt: "Portrait de Florent Kolani",
      index: "01 — PROFIL",
    },
    about: {
      eyebrow: "À PROPOS",
      title: "Du produit au réseau, je pense le système dans son ensemble.",
      description:
        "Titulaire d’une Licence professionnelle en Génie logiciel, j’interviens sur le développement d’applications, la sécurité informatique et l’administration des infrastructures.",
      specialties: [
        {
          number: "01",
          title: "Développement web",
          description:
            "JavaScript, TypeScript, React, Node.js et Flutter.",
        },
        {
          number: "02",
          title: "Sécurité & systèmes",
          description:
            "Sécurisation de services réseau, administration de bases de données et optimisation d’applications web.",
        },
        {
          number: "03",
          title: "Réseaux & support",
          description:
            "Déploiement d’infrastructures, maintenance des postes et accompagnement des utilisateurs.",
        },
      ],
    },
    experience: {
      eyebrow: "PARCOURS",
      title: "Expérience professionnelle",
      skillsTitle: "Technologies pratiquées",
      entries: [
        {
          role: "Développeur Web",
          company: "NOVALEAD",
          period: "Sept. 2024 — Aujourd’hui",
          description: [
            "Développement d’une plateforme d’assistance en ligne pour les clients.",
            "Conception d’une API REST de gestion des utilisateurs et des tickets avec Node.js.",
            "Intégration de l’API à une interface réactive développée avec flutter",
            "Optimisation des performances de l’application.",
          ],
        },
        {
          role: "Administrateur systèmes et réseaux",
          company: "SOLUTECH INFORMATIQUE",
          period: "Janv. 2024 — Août 2024",
          description: [
            "Supervision de l’installation de nouveaux systèmes de câblage.",
            "Configuration et maintenance des infrastructures informatiques.",
            "Installation des systèmes d’exploitation sur les postes de travail.",
            "Installation et configuration de caméras IP et de téléphones IP.",
          ],
        },
        {
          role: "Technicien informatique",
          company: "USMECS",
          period: "Juin 2023 — Août 2023",
          description: [
            "Supervision du réseau informatique de la société.",
            "Installation et configuration des postes de travail.",
            "Assistance technique aux utilisateurs.",
            "Configuration des imprimantes, routeurs et périphériques.",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "SÉLECTION",
      title: "Projets choisis",
      items: [
        {
          title: "Plateforme d’assistance client",
          description:
            "Une plateforme de support en ligne pour centraliser les incidents et demandes des utilisateurs, et faciliter le suivi des tickets d'assistance.",
          category: "APPLICATION WEB",
          url: "https://support.novalead.dev/",
        },
        {
          title: "MonRépétiteur",
          description:
            "Une plateforme d’apprentissage qui met en relation les familles et des enseignants, afin de trouver un accompagnement adapté aux besoins scolaires.",
          category: "ÉDUCATION",
          url: "https://monrepetiteurtg.com/",
        },
        {
          title: "W-INSPIRATIONS",
          description:
            "Une plateforme qui transforme votre intérieur avec des meubles de chambre haut de gamme, fabriqués sur mesure. Design moderne, qualité artisanale et service clé en main.",
          category: "DESIGN D’INTÉRIEUR",
          url: "https://winspirationdesign.com/",
        },
        {
          title: "Portfolio web dynamique",
          description:
            "Un portfolio conçu pour présenter mes compétences, mes projets et mon parcours dans une interface responsive.",
          category: "SITE PERSONNEL",
        },
      ],
      technologies: [
        ["Flutter", "Node.js"],
        ["React", "Tailwind CSS", "Node.js"],
        ["React", "Node.js", "Tailwind CSS"],
        ["React", "Tailwind CSS"],
      ],
      unavailable: "Lien à renseigner",
      websiteLabel: "Visiter le site",
      source: "Code source",
      demo: "Démo",
    },
    contact: {
      eyebrow: "CONTACT",
      title: "Un projet en tête ?",
      description:
        "Décrivez votre besoin et je vous répondrai dès que possible.",
      name: "Nom",
      email: "Adresse e-mail",
      message: "Votre message",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "nom@exemple.com",
      messagePlaceholder: "Parlez-moi de votre projet…",
      send: "Envoyer le message",
      sending: "Envoi en cours…",
      success: "Votre message a bien été envoyé. Merci !",
      failure: "L’envoi du message a échoué. Réessayez ou contactez-moi par e-mail.",
      directEmail: "Ou écrivez-moi directement",
    },
    footer: {
      role: "Développeur web et mobile",
      rights: "Tous droits réservés.",
      phone: "Téléphone",
      email: "E-mail",
      backToTop: "Retour en haut",
    },
    meta: {
      title: "Florent Kolani — Développeur web et mobile",
      description:
        "Portfolio de Florent Kolani, développeur web et mobile spécialisé en React, Node.js, Vue.js et systèmes réseau.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      language: "Site language",
    },
    hero: {
      eyebrow: "WEB & MOBILE DEVELOPER",
      title: "I build useful, reliable web experiences.",
      description:
        "As a web and mobile developer, I build applications with React, Node.js, TypeScript and Vue.js, with a focus on security and dependable systems.",
      contact: "Let’s talk about your project",
      cv: "Download my CV",
      imageAlt: "Portrait of Florent Kolani",
      index: "01 — PROFILE",
    },
    about: {
      eyebrow: "ABOUT",
      title: "From product to network, I think about the whole system.",
      description:
        "With a professional degree in Software Engineering, I work across application development, information security and infrastructure administration.",
      specialties: [
        {
          number: "01",
          title: "Web development",
          description:
            "JavaScript, TypeScript, React, Node.js and Flutter.",
        },
        {
          number: "02",
          title: "Security & systems",
          description:
            "Network service security, database administration and web application optimisation.",
        },
        {
          number: "03",
          title: "Networks & support",
          description:
            "Infrastructure deployment, workstation maintenance and user support.",
        },
      ],
    },
    experience: {
      eyebrow: "BACKGROUND",
      title: "Professional experience",
      skillsTitle: "Technologies in practice",
      entries: [
        {
          role: "Web Developer",
          company: "NOVALEAD",
          period: "Sep 2024 — Present",
          description: [
            "Developed an online support platform for customers.",
            "Built a REST API for user and support-ticket management with Node.js.",
            "Integrated the API with a responsive Vue.js and Tailwind CSS interface.",
            "Optimised application performance.",
          ],
        },
        {
          role: "Systems and Network Administrator",
          company: "SOLUTECH INFORMATIQUE",
          period: "Jan 2024 — Aug 2024",
          description: [
            "Oversaw the installation of new cabling systems.",
            "Configured and maintained IT infrastructure.",
            "Installed operating systems on workstations.",
            "Installed and configured IP cameras and IP phones.",
          ],
        },
        {
          role: "IT Technician",
          company: "USMECS",
          period: "Jun 2023 — Aug 2023",
          description: [
            "Monitored the company’s computer network.",
            "Installed and configured workstations.",
            "Provided technical support to users.",
            "Configured printers, routers and peripherals.",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "SELECTED WORK",
      title: "Selected projects",
      items: [
        {
          title: "Customer support platform",
          description:
            "An online support platform to centralise user incidents and requests and make ticket tracking easier.",
          category: "WEB APPLICATION",
            url: "https://support.novalead.dev/",
        },
        {
          title: "MonRépétiteur",
          description:
            "An education platform connecting families with teachers to find support suited to each student’s academic needs.",
          category: "EDUCATION",
            url: "https://monrepetiteurtg.com/",
        },
        {
          title: "W-INSPIRATIONS",
          description:
            "A platform that transforms your interior with premium, custom-made bedroom furniture. Modern design, artisan craftsmanship, and end-to-end service.",
          category: "INTERIOR DESIGN",
          url: "https://winspirationdesign.com/",
        },
        {
          title: "Dynamic web portfolio",
          description:
            "A portfolio built to present my skills, projects and experience in a responsive interface.",
          category: "PERSONAL WEBSITE",
        },
      ],
      technologies: [
        ["Flutter", "Node.js"],
        ["React", "Tailwind CSS", "Node.js"],
        ["React", "Tailwind CSS", "Node.js"],
        ["React", "Tailwind CSS"],
      ],
      unavailable: "Link to be provided",
      websiteLabel: "Visit website",
      source: "Source code",
      demo: "Live demo",
    },
    contact: {
      eyebrow: "CONTACT",
      title: "Have a project in mind?",
      description: "Tell me what you’re working on and I’ll get back to you.",
      name: "Name",
      email: "Email address",
      message: "Your message",
      namePlaceholder: "Your name",
      emailPlaceholder: "name@example.com",
      messagePlaceholder: "Tell me about your project…",
      send: "Send message",
      sending: "Sending…",
      success: "Your message has been sent. Thank you!",
      failure: "The message could not be sent. Try again or email me directly.",
      directEmail: "Or email me directly",
    },
    footer: {
      role: "Web and mobile developer",
      rights: "All rights reserved.",
      phone: "Phone",
      email: "Email",
      backToTop: "Back to top",
    },
    meta: {
      title: "Florent Kolani — Web and mobile developer",
      description:
        "Portfolio of Florent Kolani, a web and mobile developer working with React, Node.js, Vue.js and network systems.",
    },
  },
} as const;

export const getContent = (language: Language) => content[language];