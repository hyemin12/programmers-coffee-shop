import { create } from 'zustand';
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

const initialState = coffeeDB.slice(0, 6);
console.log('initialState', initialState);
const useMenuStore = create<CoffeeState>((set) => ({
	AllMenu: coffeeDB,
	menu: initialState,
	categories: ['coffee', 'blended', 'seasonalMenu'],
	setMenu: (items: CoffeeProps[]) => set((state) => ({ menu: [...state.menu, ...items] })),
}));

export default useMenuStore;
