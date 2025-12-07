import { Game } from '@/types';

export const games: Game[] = [
  {
    id: 1,
    title: "Shadow Legends",
    genre: "Action RPG",
    image: "🗡️",
    desc: "Petualangan epik di dunia fantasi gelap dengan combat system yang intens",
    status: "Released"
  },
  {
    id: 2,
    title: "Cyber Rush",
    genre: "Racing",
    image: "🏎️",
    desc: "Balapan futuristik dengan kecepatan tinggi di kota neon cyberpunk",
    status: "Released"
  },
  {
    id: 3,
    title: "Mystic Realms",
    genre: "Strategy",
    image: "🏰",
    desc: "Bangun kerajaan magis dan taklukkan realm musuh dengan strategi",
    status: "In Development"
  },
  {
    id: 4,
    title: "Space Odyssey",
    genre: "Adventure",
    image: "🚀",
    desc: "Jelajahi galaksi yang luas dan temukan misteri peradaban kuno",
    status: "Coming Soon"
  }
];