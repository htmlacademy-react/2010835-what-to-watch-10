type FilmData = {
  id: number,
  src : string,
  title : string,
}

const generateId = () => +Math.random().toString().slice(2).toString();

const films : FilmData[] = [
  {
    id: generateId(),
    src: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
  },
  {
    id: generateId(),
    src: 'img/bohemian-rhapsody.jpg',
    title: 'Bohemian Rhapsody',
  },
  {
    id: generateId(),
    src: 'img/macbeth.jpg',
    title: 'Macbeth',
  },
  {
    id: generateId(),
    src: 'img/aviator.jpg',
    title: 'Aviator',
  },
  {
    id: generateId(),
    src: 'img/we-need-to-talk-about-kevin.jpg',
    title: 'We need to talk about Kevin',
  },
  {
    id: generateId(),
    src: 'img/what-we-do-in-the-shadows.jpg',
    title: 'What We Do in the Shadows',
  },
  {
    id: generateId(),
    src: 'img/revenant.jpg',
    title: 'Revenant',
  },
  {
    id: generateId(),
    src: 'img/johnny-english.jpg',
    title: 'Johnny English',
  },
  {
    id: generateId(),
    src: 'img/shutter-island.jpg',
    title: 'Shutter Island',
  },
  {
    id: generateId(),
    src: 'img/pulp-fiction.jpg',
    title: 'Pulp Fiction',
  },
  {
    id: generateId(),
    src: 'img/no-country-for-old-men.jpg',
    title: 'No Country for Old Men',
  },
  {
    id: generateId(),
    src: 'img/snatch.jpg',
    title: 'Snatch',
  },
  {
    id: generateId(),
    src: 'img/moonrise-kingdom.jpg',
    title: 'Moonrise Kingdom',
  },
  {
    id: generateId(),
    src: 'img/seven-years-in-tibet.jpg',
    title: 'Seven Years in Tibet',
  },
  {
    id: generateId(),
    src: 'img/midnight-special.jpg',
    title: 'Midnight Special',
  },
  {
    id: generateId(),
    src: 'img/war-of-the-worlds.jpg',
    title: 'War of the Worlds',
  },
  {
    id: generateId(),
    src: 'img/dardjeeling-limited.jpg',
    title: 'Dardjeeling Limited',
  },
  {
    id: generateId(),
    src: 'img/orlando.jpg',
    title: 'Orlando',
  },
  {
    id: generateId(),
    src: 'img/mindhunter.jpg',
    title: 'Mindhunter',
  },
  {
    id: generateId(),
    src: 'img/snatch.jpg',
    title: 'Snatch',
  },
];

export { films };
export type { FilmData };

