export interface Game {
  id: number;
  title: string;
  genre: string;
  image: string;
  desc: string;
  status: 'Released' | 'In Development' | 'Coming Soon';
}