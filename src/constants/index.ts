const navLinks = [
  {
    name: 'Интро',
    link: '#hero',
  },
  {
    name: 'Проекты',
    link: '#projects',
  },
  {
    name: 'Опыт',
    link: '#experience',
  },
  {
    name: 'Подход',
    link: '#approach',
  },
  {
    name: 'Навыки',
    link: '#skills',
  },
  {
    name: 'Связь',
    link: '#contact',
  },
];

const words = [
  { text: 'Идеи', imgPath: '/images/ideas.svg' },
  { text: 'Концепты', imgPath: '/images/concepts.svg' },
  { text: 'Дизайны', imgPath: '/images/designs.svg' },
  { text: 'Код', imgPath: '/images/code.svg' },
  { text: 'Фантазии', imgPath: '/images/ideas.svg' },
  { text: 'Креатив', imgPath: '/images/concepts.svg' },
  { text: 'Наброски', imgPath: '/images/designs.svg' },
  { text: 'Желания', imgPath: '/images/code.svg' },
];

const expCards = [
  {
    review:
      'Опыт работы с Павлом был потрясающим. Он быстро адаптировался к нашей команде и внес значительный вклад в наши проекты.',
    imgPath: '/images/exp1.png',
    logoPath: '/images/logo1.png',
    title: 'Frontend Developer',
    date: 'Февраль 2024 - Настоящее время',
    responsibilities: [
      'Оптимизировал производительность.',
      'Идентифицировал и устранил критические баги.',
      'Разработал модуль AI.',
    ],
  },
  {
    review: 'Вторая рекомендация Вторая рекомендация Вторая рекомендация Вторая рекомендация',
    imgPath: '/images/exp2.png',
    logoPath: '/images/logo2.png',
    title: 'Full Stack Developer',
    date: 'Октябрь 2021 - Февраль 2024',
    responsibilities: [
      'Переработал и улучшил существующий код.',
      'Разработал и внедрил новые функции для улучшения пользовательского опыта.',
      'Реализовал интеграцию с внешними сервисами.',
    ],
  },
  {
    review: 'Третья рекомендация Третья рекомендация Третья рекомендация Третья рекомендация',
    imgPath: '/images/exp3.png',
    logoPath: '/images/logo3.png',
    title: 'Web Developer',
    date: 'Сентябрь 2020 - Октябрь 2021',
    responsibilities: [
      'Создал лендинг с использованием React.',
      'Реализовал интеграцию с внешними сервисами.',
      'Разработал модуль аналитики.',
    ],
  },
];

const featureLists = ['Удобство пользователя', 'Сила команды', 'Постоянное развитие'];

const goodLists = ['Ценность для бизнеса', 'Качество кода', 'Соблюдение сроков'];

export { words, navLinks, expCards, featureLists, goodLists };
