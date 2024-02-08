import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { MenuProps } from './menu';

export interface ICart extends MenuProps {
	quantity: number;
}

interface CartState {
	cartItems: ICart[];
	selectedItems: number[];
	addCartItem: (item: ICart) => void;
	deleteCartItem: (deleteItemsId: number[]) => void;
	clearCartItems: () => void;
	updateCartItem: (id: number, quantity: number) => void;
	addSelectedItem: (id: number) => void;
	deleteSelectedItem: (id: number) => void;
	clearSelectedItem: () => void;
}

const useCartStore = create<CartState>()(
	devtools(
		persist(
			(set) => ({
				cartItems: [],
				selectedItems: [],
				addCartItem: (newItem: ICart) =>
					set((state) => {
						const newItemId = newItem.id;
						const isExist = state.cartItems.find((item) => item.id === newItemId);
						if (isExist) {
							return {
								cartItems: state.cartItems.map((item) =>
									item.id === newItemId ? { ...item, quantity: item.quantity + 1 } : item
								),
							};
						} else {
							return {
								cartItems: [...state.cartItems, newItem],
							};
						}
					}),
				deleteCartItem: (deleteItemsId: number[]) =>
					set((state) => ({ cartItems: state.cartItems.filter((item) => !deleteItemsId.includes(item.id)) })),
				clearCartItems: () => set(() => ({ cartItems: [] })),

				updateCartItem: (id: number, quantity: number) =>
					set((state) => ({
						cartItems: state.cartItems.map((item) => (item.id === id ? { ...item, quantity } : item)),
					})),
				addSelectedItem: (id: number) => set((state) => ({ selectedItems: [...state.selectedItems, id] })),
				deleteSelectedItem: (id: number) =>
					set((state) => ({ selectedItems: state.selectedItems.filter((item) => item !== id) })),
				clearSelectedItem: () => set(() => ({ selectedItems: [] })),
			}),
			{
				name: 'cart-storage',
				storage: createJSONStorage(() => sessionStorage),
			}
		)
	)
);

export default useCartStore;
