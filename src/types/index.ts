import type { ReactNode } from 'react';

export interface MenuItem {
  name: string;
  desc: string;
  price: string | number;
  img: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export interface ValueItem {
  icon: ReactNode;
  title: string;
  desc: string;
}
