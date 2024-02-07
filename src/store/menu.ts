import { create } from 'zustand';
import { coffeeDB } from '@/data';

export type CategoryType = 'coffee' | 'blended' | 'seasonalMenu';

export interface MenuProps {
	id: number;
	image: string;
	name: string;
	nameEn: string;
	price: number;
	description: string;
	category: CategoryType;
}

interface MenuState {
	AllMenu: MenuProps[];
	menu: MenuProps[];
	categories: CategoryType[];
	setMenu: (items: MenuProps[]) => void;
}

const initialState = coffeeDB.slice(0, 6);
console.log('initialState', initialState);
const useMenuStore = create<MenuState>((set) => ({
	AllMenu: coffeeDB,
	menu: initialState,
	categories: ['coffee', 'blended', 'seasonalMenu'],
	setMenu: (items: MenuProps[]) => set((state) => ({ menu: [...state.menu, ...items] })),
}));

export default useMenuStore;
