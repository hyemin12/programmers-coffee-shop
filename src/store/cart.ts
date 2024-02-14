import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { MenuProps } from './menu';

export interface ICart extends MenuProps {
	quantity: number;
}

/** 장바구니 스테이트
 * cartItems: 장바구니에 담겨있는 아이템 목록 (아이템의 모든 정보를 담고 있음)
 * selectedItems: 장바구니에 담겨있는 아이템 목록 중에 사용자가 선택한 아이템 목록 (선택한 아이템의 id만 담고 있음)
 * addCartItem, deleteCartItem, clearCartItems, updateCartItem : 장바구니 내역 변경 액션
 * addSelectedItem, deleteSelectedItem, clearSelectedItem : 장바구니에 담겨있는 아이템 중 선택한 아이템들의 목록 변경 액션
 */
interface CartState {
	cartItems: ICart[];
	selectedItems: number[];
	addCartItem: (item: ICart) => void;
	deleteCartItem: (deleteItemsId: number[]) => void;
	clearCartItems: () => void;
	updateCartItem: (id: number, quantity: number) => void;
	addSelectedItem: (id: number) => void;
	addAllSelectedItems: () => void;
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
					set((state) => ({
						cartItems: addItemToCart(state.cartItems, newItem),
					})),
				deleteCartItem: (deleteItemsId: number[]) =>
					set((state) => ({
						cartItems: deleteItemsFromCart(state.cartItems, deleteItemsId),
					})),
				clearCartItems: () => set(() => ({ cartItems: [] })),
				updateCartItem: (id: number, quantity: number) =>
					set((state) => ({
						cartItems: updateCartItemQuantity(state.cartItems, id, quantity),
					})),
				addSelectedItem: (id: number) => set((state) => ({ selectedItems: [...state.selectedItems, id] })),
				addAllSelectedItems: () => set((state) => ({ selectedItems: state.cartItems.map((item) => item.id) })),
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

function addItemToCart(cartItems: ICart[], newItem: ICart): ICart[] {
	const newItemId = newItem.id;
	const isExist = cartItems.find((item) => item.id === newItemId);
	if (isExist) {
		return cartItems.map((item) => (item.id === newItemId ? { ...item, quantity: item.quantity + 1 } : item));
	} else {
		return [...cartItems, { ...newItem, quantity: 1 }];
	}
}

function deleteItemsFromCart(cartItems: ICart[], deleteItemsId: number[]): ICart[] {
	return cartItems.filter((item) => !deleteItemsId.includes(item.id));
}

function updateCartItemQuantity(cartItems: ICart[], id: number, quantity: number): ICart[] {
	return cartItems.map((item) => (item.id === id ? { ...item, quantity } : item));
}

export default useCartStore;
