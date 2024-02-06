import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { CoffeeProps } from './menu';

export interface ICart extends CoffeeProps {
	quantity: number;
}

interface CartState {
	cartItem: ICart[];
	addCartItem: (item: ICart) => void;
	deleteCartItem: (id: number) => void;
	updateCartItem: (id: number, quantity: number) => void;
}

const useCartStore = create<CartState>()(
	devtools(
		persist(
			(set) => ({
				cartItem: [],
				addCartItem: (newItem: ICart) => set((state) => ({ cartItem: [...state.cartItem, newItem] })),
				deleteCartItem: (id: number) => set((state) => ({ cartItem: state.cartItem.filter((item) => item.id !== id) })),
				updateCartItem: (id: number, quantity: number) =>
					set((state) => ({
						cartItem: state.cartItem.map((item) => (item.id === id ? { ...item, quantity } : item)),
					})),
			}),
			{
				name: 'cart-storage',
			}
		)
	)
);

export default useCartStore;
