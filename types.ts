export interface Ingredient {
  name: string;
  benefit: string;
}

export interface MenuItem {
  id: string;
  title: string;
  description: string;
  protein: string;
  fat: string;
  fiber: string;
  iconUrl: string;
  imageUrl: string;
  color?: string;
  price: number; // Added price property
  ingredients: Ingredient[];
}

export interface BaseOption {
  id: string;
  title: string;
  tag: string;
  description: string;
  bestFor: string;
  iconUrl: string;
  pricing: string; // Added pricing info
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  title: string;
  items: FaqItem[];
}