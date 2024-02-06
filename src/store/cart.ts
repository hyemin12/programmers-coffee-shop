import { create } from 'zustand';
import { CoffeeProps } from './menu';

export interface ICart extends CoffeeProps {
	quantity: number;
}

interface CartState {
	cartItems: ICart[];
	addCartItem: (item: ICart) => void;
	deleteCartItem: (id: number) => void;
	updateCartItem: (id: number, quantity: number) => void;
}

const useCartStore = create<CartState>((set) => ({
	cartItems: [],
	addCartItem: (newItem: ICart) => set((state) => ({ cartItems: [...state.cartItems, newItem] })),
	deleteCartItem: (id: number) => set((state) => ({ cartItems: state.cartItems.filter((item) => item.id !== id) })),
	updateCartItem: (id: number, quantity: number) =>
		set((state) => ({
			cartItems: state.cartItems.map((item) => (item.id === id ? { ...item, quantity } : item)),
		})),
}));

export default useCartStore;
