import React from 'react';
import { Clock, Heart, ChefHat } from 'lucide-react';
import type { ValueItem } from '../types';

export const VALUES: ValueItem[] = [
  {
    icon: <Clock className="w-8 h-8 text-brand-pink" />,
    title: "Rapidité",
    desc: "Livraison efficace partout en Île-de-France."
  },
  {
    icon: <Heart className="w-8 h-8 text-brand-pink" />,
    title: "Générosité",
    desc: "Des plats complets, savoureux et rassasiants."
  },
  {
    icon: <ChefHat className="w-8 h-8 text-brand-pink" />,
    title: "Secret de famille",
    desc: "Nos fameuses sauces secrètes inimitables."
  }
];
