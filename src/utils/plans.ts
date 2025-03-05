import { EMAIL } from "./personalInfo";

export interface Plan {
  type: PlanType;
  name: string;
  active: boolean;
  priceId: string;
  monthlyPrice: number;
  annualPrice?: number;
  baseAnnualPrice?: number;
  description: string;
  features: string[];
  threeMonthPrice?: number;
  baseThreeMonthPrice?: number;
  details?: {
    title: string;
    caption: string;
    picture: string;
    features: string[];
  };
  faq: { question: string; response: string }[];
}

export enum PlanType {
  FORMATION_HTC = "FORMATION_HTC",
  LE_CLUB_PRIVE = "private_club",
  MENTORAT = "mentorship",
}

export const plans: Plan[] = [
  {
    type: PlanType.FORMATION_HTC,
    name: "Formation HTC ™",
    active: true,
    priceId: import.meta.env.VITE_STRIPE_PRICE_SMART_SIGNALS,
    monthlyPrice: 49.9,
    annualPrice: 0,
    baseAnnualPrice: 0,
    description: "Découvre mon plan de formation basée sur la Smart Money.",

    features: [
      "Accès aux modules vidéos (tous niveaux)",
      "Accès E-books et supports",
      "Études de cas pratiques sur des trades réussis et ratés",
    ],
    details: {
      title: "Formation Honma Trading Club",
      caption:
        "La formation complète contenant tous les outils pour trader sereinement sur les marchés.",
      picture: "assets/formation_htc.png",
      features: [
        "Accès aux modules vidéos (tous niveaux)",
        "Accès E-books et supports",
        "Études de cas pratiques sur des trades réussis et ratés",
        "Checklist quotidienne de prépa trading",
        "Analyse technique et fondamentale",
      ],
    },
    faq: [
      {
        question: "Les signaux sont-ils envoyés avec les analyses ?",
        response:
          "Oui, 80% du temps j'envoie les signaux avec les analyses qui suivent, car ca aide à mieux comprendre et ne pas laisser place à des prises de positions 'hasardeuses'. Comme ça, tu sauras POURQUOI j'ai prit ce trade !",
      },
      {
        question: "Les signaux sont-ils 100% gagnants ?",
        response:
          "Alors tu sais bien qu'il n'y a aucune méthode miracle en trading, mais avec un money management strict, tu auras 70% de taux de réussite, et par conséquent, positif la plupart du temps.",
      },

      {
        question:
          "En combien de temps puis-je valider les prop firms avec Honma Trading Club?",
        response:
          " Tout dépend de ton risque, je conseille de risquer 0,5% / signaux, et ainsi survivre le plus longtemps possible pour ne pas cramer ton capital.Mais généralement entre 2 semaines à 1 mois !",
      },

      {
        question: "Que faire si je veux annuler mon abonnement ?",
        response: `C'est très simple, envoies moi un message à ${EMAIL}, mon équipe et moi annulerons l'abonnement. Tu auras cependant l'accès jusqu'à la date du mois suivant où tu as effectué ton paiement.`,
      },

      {
        question: "Quelles sessions trades-tu ?",
        response:
          "Mes trades se déroulent généralement pendant la session de Londres et le chevauchement de Londres/New York !",
      },

      {
        question: "Quel capital minimum pour débuter ?",
        response:
          "Tu n'as pas besoin d'un capital élevé pour débuter. Généralement l'idéal est de 500€, mais sinon tu peux utiliser les prop firms comme moyen de levier, c'est plus rentable.",
      },
    ],
  },
  {
    type: PlanType.LE_CLUB_PRIVE,
    name: "Le Club Privé ™",
    active: true,
    priceId: "price_1Q8mnAJ4HMnfuly583NQ8VIo",
    monthlyPrice: 89.9,
    //  annualPrice: 490,
    //  baseAnnualPrice: 599,

    description: "Rejoins le Club, une communauté de traders aguerris.",
    features: [
      "Accès à la formation HTC (complète)",
      "Accès au groupe privé Discord d'apprentissage",
      "Accès à 4 lives exclusif par mois",
      "Checklist quotidienne de prépa trading",
    ],
    details: {
      title: "Le Club Privé",
      caption:
        "L'offre VIP, avec un accès à la formation Honma Trading Club et un accès VIP au Club, un canal Discord où se retrouvent tous les traders prêts à optimiser leur stratégie et améliorer leur psychologie face aux marchés.",
      picture: "assets/discord.png",
      features: [
        "Accès à tout les modules vidéos (débutant/intermédiaire/avancé)",
        "Études de cas pratiques sur des trades réussis et ratés",
        "Outils exclusifs de backtesting pour affiner vos stratégies",
        "Checklist quotidienne de préparation pour optimiser chaque session de trading en PDF",
        "Analyse technique et fondamentale : maîtrisez les deux aspects du marché",
        "Accès à un groupe Discord d'apprentissage pour échanger avec d'autres membres",
        "2 LIVE/mois pour répondre à vos questions, vous proposer mes analyses du moment",
      ],
    },
    faq: [
      {
        question:
          "Est ce que la Formation Honma Trading est faite pour tout le monde ?",
        response:
          "Que tu sois expert, novice ou trader à temps partiel avec un travail/étude à côté, le contenu est applicable sur toutes les timeframes et tous les marchés donc adaptable à tout type de profils. Ma méthode permet de valider des challenges peut importe ta situation, si tu t'y met sérieusement !",
      },
      {
        question: "La statégie est applicable qu'au forex ?",
        response:
          "Non, elle est applicable également aux indices, NASDAQ, DOWJONES et même la Crypto ! Tu pourras vérifier par toi-même, elle a fait ses preuves en crypto et aux indices pour ma part et également pour de nombreux élèves.",
      },
      {
        question: "Combien de temps vais-je mettre avant d'être rentable ?",
        response:
          "La rentabilité dépend de chacun, certains peuvent mettre 3 mois tandis que d'autres 2 ans ou plus. Tout dépend de ton niveau d'implication et ton organisation.. car oui , l'emploi du temps n'est pas une excuse si tu veux réellement la liberté financière !",
      },
      {
        question: "Est-ce que je peux payer par crypto ?",
        response:
          "Oui, seulement en annuel, envoie moi un message privé sur télégram à https://telegram.me/alxqng je t'expliquerais les démarches à suivre.",
      },
      {
        question: "Mon paiement ne passe pas, que faire ?",
        response: `Si tu reçois un message d'erreur lors du paiement désactive bien ton VPN et change de navigateur, ça a toujours fonctionné. Si tu as besoin d'aide supplémentaire, n'hésite pas à me contacter à l'adresse suivante : ${EMAIL}`,
      },
    ],
  },
  {
    type: PlanType.MENTORAT,
    name: "Mentorat VIP ™",
    active: true,
    priceId: "price_1Q8mp9J4HMnfuly5N59m8sJ3",
    monthlyPrice: 0,
    threeMonthPrice: 0,
    baseThreeMonthPrice: 0,
    description:
      "Accélère ton parcours de trader avec un mentorat personnalisé.",
    features: [
      "Accès à la formation HTC (complète)",
      "Accès au Club privé, canal privé sur Discord",
      "Coaching individuel 1-on-1 , 4x/mois",
      "Revue mensuelle de votre portefeuille",
      "Développement d’un mindset de trader pro",
      "Suivi des performances",
      "Accès à des outils premium pour une analyse plus fine des marchés ",
    ],
    details: {
      title: "Offre de mentorat",
      caption:
        "Notre programme de mentorat est notre offre la plus premium.  Vous serez accompagné personnellement pour atteindre vos objectifs en trading, en suivant une méthodologie éprouvée.",
      picture: "assets/mentorship.png",
      features: [
        "Coaching individuel 1-on-1 , 4x par mois (Session d'1 heure)",
        "Plan d’action personnalisé pour développer vos compétences et améliorer vos performances",
        "L'offre 'Formation HTC' OFFERT en Support",
        "Accès VIP à moi même",
        "Optimisation des stratégies de trading en fonction de vos objectifs personnels",
        " Accès à des stratégies avancées exclusives utilisées pour gérer 1 million d'€ en gestion prop firm.",
        " Revue mensuelle de votre portefeuille pour ajuster les objectifs de performance",
        " Développement d’un mindset de trader pro : gestion des émotions et discipline",
        " Accès à des outils premium pour une analyse plus fine des marchés",
        " Suivi des performances et ajustements continus pour maximiser vos profits",
      ],
    },
    faq: [
      {
        question:
          "En quoi consiste le programme de coaching privé en trading ?",
        response:
          "Le programme est conçu pour vous accompagner de manière personnalisée dans votre parcours de trader. Il inclut des sessions individuelles pour travailler sur votre stratégie, gérer vos émotions, et maîtriser les outils de trading. Mon approche est basée sur la patience et la pédagogie pour m'assurer que vous comprenez chaque étape avant d'avancer.",
      },
      {
        question:
          "Quels sont les principaux avantages de ce programme par rapport à d'autres formations ?",
        response:
          "Contrairement aux formations en ligne standard, ce coaching privé est entièrement adapté à votre niveau et à vos besoins. Nous avançons à votre rythme, et je suis disponible pour répondre à toutes vos questions. Mon objectif est de vous voir réussir en tant que trader indépendant. Mon accompagnement est intensif, avec une vraie implication dans votre progression.",
      },

      {
        question: "Comment se déroulent les séances de coaching ?",
        response:
          "Les séances sont planifiées en fonction de vos disponibilités et se déroulent via visioconférence. Chaque session dure généralement entre 1h et 1h30. Nous abordons des sujets variés : analyse technique, gestion des émotions, gestion des risques, et stratégie de trading. Entre les sessions, vous aurez également des exercices pratiques pour consolider vos acquis.",
      },

      {
        question: "Est-ce que ce programme est adapté aux débutants ?",
        response:
          "Oui, le programme est adapté aux traders de tous niveaux, y compris les débutants. Mon approche pédagogique permet d’introduire progressivement les concepts essentiels du trading. Vous n'avez pas besoin d'expérience préalable : je vous guiderai pas à pas pour que vous puissiez progresser en toute confiance.",
      },

      {
        question:
          "Combien de temps faut-il pour commencer à voir des résultats ?",
        response:
          "Les résultats dépendent de votre implication et de votre capacité d'apprentissage. En général, mes clients constatent des améliorations dans leur compréhension du marché et leur discipline de trading dès les premières semaines. Cependant, le trading est une compétence à long terme : l’objectif est de bâtir des bases solides pour une progression durable.",
      },

      {
        question: "Je peux payer en plusieurs fois ?",
        response:
          "Oui, je propose une formule qui permet d'étalonner le paiement sur 3 mois. Le prix est de 500€ par mois, avec résultats garantis si vous appliquer à la lettre ma stratégie et mes conseils.",
      },
      {
        question:
          "Si je rencontre des difficultés, est-il possible de demander des conseils supplémentaires entre les sessions ?",
        response:
          "Absolument ! Mon engagement est de vous voir réussir, et je comprends que le trading peut poser des défis uniques. Je reste disponible par messagerie ou e-mail pour répondre à vos questions ou vous guider en cas de besoin entre les sessions programmées.",
      },
      {
        question: "Quels résultats pouvez-vous garantir avec ce programme ?",
        response:
          "En trading, il est impossible de garantir des gains financiers, car cela dépend de nombreux facteurs, dont le marché et votre discipline personnelle. Cependant, je vous garantis un accompagnement de qualité, avec des conseils pratiques et une méthodologie solide qui vous aideront à développer les compétences et la mentalité nécessaires pour réussir dans le trading.",
      },
      {
        question:
          "Comment puis-je être sûr que le programme correspondra à mes attentes ?",
        response:
          "Avant de vous engager, nous pouvons organiser un appel gratuit pour discuter de vos objectifs et de vos attentes. Cet échange nous permettra de mieux comprendre si ce programme répond à vos besoins et vous donnera un aperçu de ma méthode d’accompagnement.",
      },
      {
        question:
          "Que faire si je souhaite arrêter le coaching en cours de programme ?",
        response:
          "Le programme est un engagement de trois mois pour des résultats optimaux. Cependant, si vous rencontrez des difficultés ou avez besoin de suspendre les sessions pour des raisons personnelles, nous pourrons trouver une solution ensemble pour adapter l’accompagnement à votre situation.",
      },
    ],
  },
];
