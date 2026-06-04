export interface Quote {
  id: string;
  text: string;
  author: string;
  anime: string;
  role: string;
}

export interface CharacterMetric {
  label: string;
  value: number; // 0-100 scale
}

export interface Character {
  id: string;
  name: string;
  anime: string;
  description: string;
  imageUrl: string;
  metrics: CharacterMetric[];
  quote: string;
  rank: string;
  archtype: string;
}

export interface TrendingAnime {
  id: string;
  title: string;
  rating: string;
  genre: string[];
  description: string;
  coverUrl: string;
  trendingRank: number;
  episodes: string;
  status: string;
}

export interface Wallpaper {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  aspect: 'landscape' | 'portrait';
}

export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix: string;
  subtext: string;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  likes: string;
  comments: string;
  caption: string;
  date: string;
}
