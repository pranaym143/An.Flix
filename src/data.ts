import { Quote, Character, TrendingAnime, Wallpaper, Stat, InstagramPost } from './types';

import ayanokojiPortrait from './assets/images/ayanokoji_portrait_1780508182835.png';
import heroBg from './assets/images/hero_cinematic_bg_1780508166814.png';
import wallpaper1 from './assets/images/elite_wallpaper_1_1780508201068.png';
import johanPortrait from './assets/images/johan_portrait_1780508990098.png';
import lPortrait from './assets/images/l_portrait_png_1780509697432.png';
import jinwooPortrait from './assets/images/jinwoo_portrait_1780509897695.png';
import gojoPortrait from './assets/images/gojo_portrait_1780509915717.png';
import instagramAvatar from './assets/images/ig_profile_1780510333391.png';
import wpCheckmate from './assets/images/checkmate_strategy_1781600229650.jpg';
import wpSovereign from './assets/images/divine_sovereign_1781600247260.jpg';
import wpCrimson from './assets/images/crimson_justice_1781600269244.jpg';
import wpShadow from './assets/images/shadow_domain_1781600288140.jpg';
import wpLimitless from './assets/images/limitless_blue_1781600308742.jpg';

export const AYANOKOJI_PORTRAIT = ayanokojiPortrait;
export const IMP_CHECKMATE = wpCheckmate;
export const IMP_SOVEREIGN = wpSovereign;
export const IMP_CRIMSON = wpCrimson;
export const IMP_SHADOW = wpShadow;
export const IMP_LIMITLESS = wpLimitless;
export const HERO_BG = heroBg;
export const WALLPAPER_1 = wallpaper1;
export const JOHAN_PORTRAIT = johanPortrait;
export const L_PORTRAIT = lPortrait;
export const JINWOO_PORTRAIT = jinwooPortrait;
export const GOJO_PORTRAIT = gojoPortrait;
export const INSTAGRAM_AVATAR = instagramAvatar;

export const QUOTES: Quote[] = [
  {
    id: '1',
    text: "Coincidence is a terrifying thing. There is no such thing as a coincidence in this world. Everything happens for a reason, directed by someone's invisible hand.",
    author: 'Kiyotaka Ayanokoji',
    anime: 'Classroom of the Elite',
    role: 'The Mastermind'
  },
  {
    id: '2',
    text: "The only thing humans are equal in is death. There is no absolute justice in this world, only the return to silent nothingness.",
    author: 'Johan Liebert',
    anime: 'Monster',
    role: 'The Absolute Evil'
  },
  {
    id: '3',
    text: "No matter how gifted you are, you alone cannot change the world. But that is what makes it beautiful, because we are never truly alone in our pursuit of justice.",
    author: 'L Lawliet',
    anime: 'Death Note',
    role: 'The Ultimate Detective'
  },
  {
    id: '4',
    text: "I am no longer who I used to be. The weak die, the strong survive. I am the one who climbs. I am the Shadow Monarch, and the world is my playground.",
    author: 'Sung Jinwoo',
    anime: 'Solo Leveling',
    role: 'The Shadow Monarch'
  },
  {
    id: '5',
    text: "Don't worry, I'm the strongest. Infinite space, infinite speed, infinite power. Those who think they are superior are merely blind to the actual hierarchy.",
    author: 'Satoru Gojo',
    anime: 'Jujutsu Kaisen',
    role: 'The Honored One'
  }
];

export const CHARACTERS: Character[] = [
  {
    id: 'ayanokoji',
    name: 'Kiyotaka Ayanokoji',
    anime: 'Classroom of the Elite',
    quote: "All people are nothing but tools. It doesn't matter how its's done. As long as I win in the end, that's all that matters.",
    imageUrl: AYANOKOJI_PORTRAIT,
    archtype: 'Strategic Shadow',
    rank: 'S+ Rank',
    description: 'An enigma who weaponizes human psychology and group dynamics while maintaining a facade of total mediocrity. A masterpiece created of the mysterious White Room.',
    metrics: [
      { label: 'Intelligence (IQ)', value: 99 },
      { label: 'Strategic Manipulation', value: 100 },
      { label: 'Emotional Control', value: 100 },
      { label: 'Physical Mastery', value: 94 }
    ]
  },
  {
    id: 'johan',
    name: 'Johan Liebert',
    anime: 'Monster',
    quote: "The only thing humans are equal in is death. Everything else is just an illusion we construct to feel important.",
    imageUrl: JOHAN_PORTRAIT,
    archtype: 'Enigmatic Monster',
    rank: 'S+ Rank',
    description: 'A charisma-driven master of psychological manipulation who can dismantle human minds and orchestrate absolute chaos with a simple whisper. He represents pure, cold mastermind intelligence.',
    metrics: [
      { label: 'Intelligence (IQ)', value: 99 },
      { label: 'Psychological Manipulation', value: 100 },
      { label: 'Emotional Control', value: 100 },
      { label: 'Charismatic Authority', value: 100 }
    ]
  },
  {
    id: 'l',
    name: 'L Lawliet',
    anime: 'Death Note',
    quote: "Justice will prevail, no matter what. I am the justice that stands against the darkness of crime.",
    imageUrl: L_PORTRAIT,
    archtype: 'World’s Greatest Detective',
    rank: 'S+ Rank',
    description: 'An eccentric but peerless genius detective who solves files using unmatched inductive reasoning, meticulous observation, and bold psychological traps.',
    metrics: [
      { label: 'Intelligence (IQ)', value: 100 },
      { label: 'Strategic Manipulation', value: 98 },
      { label: 'Emotional Control', value: 99 },
      { label: 'Deductive Logic', value: 100 }
    ]
  },
  {
    id: 'jinwoo',
    name: 'Sung Jinwoo',
    anime: 'Solo Leveling',
    quote: "Arise. My shadow army will march until every threat is conquered, and the Monarchs are returned to the void.",
    imageUrl: JINWOO_PORTRAIT,
    archtype: 'Shadow God',
    rank: 'S+ Rank',
    description: 'Once declared the weakest hunter of all mankind, he unlocked a double dungeon system to Solo Level and became the ultimate sovereign of command and death.',
    metrics: [
      { label: 'Intelligence (IQ)', value: 88 },
      { label: 'Strategic Manipulation', value: 90 },
      { label: 'Emotional Control', value: 95 },
      { label: 'Combat Overlord', value: 100 }
    ]
  },
  {
    id: 'gojo',
    name: 'Satoru Gojo',
    anime: 'Jujutsu Kaisen',
    quote: "Throughout heaven and earth, I alone am the honored one. Strength alone commands supreme respect in an era of curses.",
    imageUrl: GOJO_PORTRAIT,
    archtype: 'Aesthetic Limitless',
    rank: 'God Tier',
    description: 'The strongest sorcerer of modern times possessing the visual marvel of the Six Eyes and the Limitless curse technique, creating natural authority and tactical immunity.',
    metrics: [
      { label: 'Intelligence (IQ)', value: 95 },
      { label: 'Strategic Manipulation', value: 92 },
      { label: 'Emotional Control', value: 89 },
      { label: 'Limitless Sorcery', value: 100 }
    ]
  }
];

export const TRENDING: TrendingAnime[] = [
  {
    id: 't1',
    title: 'Classroom of the Elite',
    rating: '9.6',
    genre: ['Psychological', 'Thriller', 'Drama'],
    description: 'Students at the prestigious Tokyo Metropolitan Advanced Nurturing High School engage in brutal strategic classroom warfare where exams are life-altering psychological matches.',
    coverUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=800', // Stylized neon arcade cyberpunk anime style
    trendingRank: 1,
    episodes: '38 Episodes (Ongoing)',
    status: 'Trending #1'
  },
  {
    id: 't2',
    title: 'Monster',
    rating: '9.9',
    genre: ['Psychological', 'Thriller', 'Mystery', 'Seinen'],
    description: 'A brilliant brain surgeon gets sucked into a dark web of horror and psychological chess after saving a young boy who grows up to be a charismatic, cold mastermind.',
    coverUrl: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=800', // Dark mystery crimson corridor look
    trendingRank: 2,
    episodes: '74 Episodes (Complete)',
    status: 'All-Time Masterpiece'
  },
  {
    id: 't3',
    title: 'Solo Leveling',
    rating: '9.5',
    genre: ['Dark Fantasy', 'Action', 'Monarch Core'],
    description: 'In a world plagued by dangerous interdimensional dungeons, an underdog survivor rises as the ultimate King of the Shadows, fighting ancient rulers.',
    coverUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800', // Epic mysterious portal
    trendingRank: 3,
    episodes: '12 Episodes (Season 1)',
    status: 'Popular High-Demand'
  }
];

export const WALLPAPERS: Wallpaper[] = [
  {
    id: 'w1',
    title: 'The Elite Horizon',
    category: 'Minimal Mastermind',
    imageUrl: WALLPAPER_1,
    aspect: 'landscape'
  },
  {
    id: 'w2',
    title: 'Checkmate Strategy',
    category: 'Monochrome Checkmate',
    imageUrl: IMP_CHECKMATE,
    aspect: 'landscape'
  },
  {
    id: 'w3',
    title: 'Divine Sovereign',
    category: 'Abstract Royal',
    imageUrl: IMP_SOVEREIGN,
    aspect: 'portrait'
  },
  {
    id: 'w4',
    title: 'Crimson Justice',
    category: 'Vigilante Neon',
    imageUrl: IMP_CRIMSON,
    aspect: 'landscape'
  },
  {
    id: 'w5',
    title: 'Shadow Domain',
    category: 'Monarch Shadows',
    imageUrl: IMP_SHADOW,
    aspect: 'portrait'
  },
  {
    id: 'w6',
    title: 'Limitless Blue',
    category: 'Universe Sorcerer',
    imageUrl: IMP_LIMITLESS,
    aspect: 'landscape'
  }
];

export const STATS: Stat[] = [
  {
    id: 's1',
    label: 'Anime Elites Joined',
    value: 84200,
    suffix: '+',
    subtext: 'Global loyal strategy fans'
  },
  {
    id: 's2',
    label: 'Daily Cinematic Impressions',
    value: 1250000,
    suffix: '+',
    subtext: 'Rapid visual engagements'
  },
  {
    id: 's3',
    label: 'Elite Viral Edits Published',
    value: 360,
    suffix: '+',
    subtext: 'Cinematic masterworks'
  },
  {
    id: 's4',
    label: 'Audience Weekly Interaction',
    value: 24.8,
    suffix: '%',
    subtext: 'Industry-leading commitment'
  }
];

export const INSTAGRAM_MOCKS: InstagramPost[] = [
  {
    id: 'ig1',
    imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600', // Elegant neon workspace mastermind look
    likes: '14.2K',
    comments: '428',
    caption: '“There is no such thing as a coincidence in this world. Every move is calculated.” - Kiyotaka Ayanokoji strategy breakdown. Hit follow if you understand the board. ♟️♟️ #anflix #classroomoftheelite #ayanokoji #animeedit #animerecommendation',
    date: '1 day ago'
  },
  {
    id: 'ig2',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600', // Luxury gold watches representing elite precision and high status timing
    likes: '18.9K',
    comments: '632',
    caption: 'Johan Liebert vs L Lawliet: The absolute height of mastermind intellect and strategic deduction. The ultimate manipulator faces the world’s greatest detective. Swipe left to see our analytical breakdown of their supreme tactical stats. ♛ #johanliebert #llawliet #monster #deathnote #animecomparisons',
    date: '3 days ago'
  },
  {
    id: 'ig3',
    imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600', // Gaming/neon controller dark moody style - Solo Leveling style level up
    likes: '22.5K',
    comments: '891',
    caption: 'The absolute monarch rises. Sung Jinwoo solo leveled from the bottom to supremacy. Discipline is the only currency of the elite. Join our broadcast channel on Instagram for daily growth strategies. #sololeveling #sungjinwoo #arise #discipline',
    date: '5 days ago'
  }
];
