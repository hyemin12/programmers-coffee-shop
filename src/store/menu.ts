import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { coffeeDB } from '../data';

export type CategoryType = 'coffee' | 'blended' | 'seasonalMenu';

export interface CoffeeProps {
	id: number;
	image: string;
	name: string;
	nameEn: string;
	price: number;
	description: string;
	category: CategoryType;
}

interface CoffeeState {
	AllMenu: CoffeeProps[];
	menu: CoffeeProps[];
	categories: CategoryType[];
	setMenu: (items: CoffeeProps[]) => void;
}

const useMenuStore = create<CoffeeState>()(
	devtools(
		persist(
			(set) => ({
				AllMenu: coffeeDB,
				menu: [],
				categories: ['coffee', 'blended', 'seasonalMenu'],
				setMenu: (items: CoffeeProps[]) => set((state) => ({ menu: [...state.menu, ...items] })),
			}),
			{
				name: 'menu-storage',
			}
		)
	)
);

export default useMenuStore;
