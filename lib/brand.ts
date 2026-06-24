export const brand = {
  name: "Cazul Fit",
  coachName: "Yadiel Casul",
  instagram: "@cazul.fit",
  instagramUrl: "https://instagram.com/cazul.fit",
  hero: {
    eyebrow: "Coaching 1 a 1 por Cazul",
    headline: "CONSTRUYE TU MEJOR VERSIÓN",
    headlineAccent: "POR DENTRO Y POR FUERA.",
    coachingLine:
      "Coaching 1 a 1 con estructura real de entrenamiento y nutrición, adaptado a tu vida y no a la de un influencer.",
    applyCta: "Aplica para coaching",
    includedCta: "Mira qué incluye",
    protocolCta: "Protocolo de 90 días",
    protocolHref: "/protocolo",
    guideCta: "Guía de entrenamiento y nutrición",
    guideHref: "/guia",
  },
  about: {
    title: "Sobre mí",
    quote: "El gym no me cambió el cuerpo, me cambió a mí.",
    copy: "Fui el gordito gracioso, el que usaba el humor para que no le dolieran las cosas. Me obsesioné con cómo me veía, perdí la confianza y me volví callado por años. Hago esto porque sé exactamente cómo se siente estar del otro lado, y sé el camino para salir.",
    photo: "/images/transformacion/sobre-mi-cult.jpg",
  },
  included: {
    title: "Qué incluye",
    cards: [
      {
        title: "Entrenamiento personalizado",
        description: "para tu nivel y tu equipo",
      },
      {
        title: "Nutrición real",
        description: "adaptada a tu vida, no a la de un influencer",
      },
      {
        title: "Ajustes semanales",
        description: "cambiamos según cómo vas",
      },
      {
        title: "Check-in semanal",
        description: "por llamada o video",
      },
      {
        title: "Acceso directo",
        description: "me escribes cuando lo necesites",
      },
      {
        title: "El proceso explicado",
        description: "aprendes para no necesitarme para siempre",
      },
    ],
  },
  howItWorks: {
    title: "Cómo funciona",
    steps: [
      {
        step: "01",
        title: "Aplicas",
        description: "Llenas el cuestionario y vemos si encajamos",
      },
      {
        step: "02",
        title: "Armamos tu plan",
        description:
          "Hablamos y te construyo entrenamiento y nutrición a tu medida",
      },
      {
        step: "03",
        title: "Ejecutamos y ajustamos",
        description: "Cada semana revisamos y corregimos",
      },
    ],
  },
  truth: {
    title: "La verdad",
    stats: [
      {
        value: "1",
        label: "Transformación real (la mía, no inventada)",
      },
      {
        value: "100%",
        label: "De mi atención, porque eres de los primeros",
      },
      {
        value: "0",
        label: "Testimonios falsos. Lo que ves es lo que hay.",
      },
      {
        value: "∞",
        label: "Ganas de que te vaya bien",
      },
    ],
    copy: "Te voy a ser claro: eres de los primeros. No tengo cien testimonios ni capturas de clientes. Lo que tengo es mi propia transformación y un sistema que yo mismo viví. Estás aplicando para entrar desde el principio, cuando más hambre tengo de que te vaya bien. Esa es la ventaja de entrar temprano: más atención, más pendiente, y un coach que quiere que te vaya bien tanto como tú.",
  },
  apply: {
    title: "¿Listo para dar el paso?",
    subtitle:
      "Los cupos son limitados. Responde unas preguntas para ver si encajamos.",
    submit: "Enviar aplicación",
    confirmationTitle: "Aplicación recibida",
    confirmationMessage:
      "Revisaré tus respuestas y te escribo en las próximas 48 horas.",
  },
  footer: {
    copyright: "© 2026 Cazul Fit by Yadiel Casul. Todos los derechos reservados.",
  },
} as const;

export const heroPhotos = [
  {
    src: "/images/transformacion/antes-hero.png",
    alt: "Yadiel Casul antes",
    label: "ANTES",
  },
  {
    src: "/images/transformacion/despues-hero.png",
    alt: "Yadiel Casul ahora",
    label: "AHORA",
  },
] as const;
