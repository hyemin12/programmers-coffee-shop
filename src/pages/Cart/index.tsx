import { Button } from 'react-bootstrap';
import Layout from '@/components/Layout';
import CartItem from './CartItem';
import useCartStore from '@/store/cart';
import { ButtonWrapper, CartList, OrderButton, EmptyCart } from './Cart.styles';

const Cart = () => {
	const { cartItems, selectedItems, clearSelectedItem, clearCartItems, addAllSelectedItems } = useCartStore();

	/** 장바구니에 담긴 상품 목록, 선택한 상품 목록 삭제 */
	const deleteItems = () => {
		clearSelectedItem();
		clearCartItems();
	};

	/** 전체 선택 클릭 액션
	 * 전체 선택이 되어 있다면 전체선택 해제시키고,
	 * 전체 선택이 되어 있지않다면 전체선택 활성화시키기 */
	const selectedAllItems = () => {
		if (selectedItems.length !== cartItems.length) {
			addAllSelectedItems();
		} else {
			clearSelectedItem();
		}
	};

	return (
		<Layout $maxWidth>
			<h2>장바구니</h2>
			<ButtonWrapper>
				<Button onClick={selectedAllItems}>전체 선택</Button>
				<div className='delete_button_group'>
					<Button>선택삭제</Button>
					<Button onClick={deleteItems}>전체삭제</Button>
				</div>
			</ButtonWrapper>

			{cartItems.length > 0 ? (
				<>
					<CartList>
						{cartItems.map((item) => (
							<CartItem key={item.id} {...item} />
						))}
					</CartList>
					<OrderButton>
						<Button variant='success' size='lg'>
							주문하기
						</Button>
					</OrderButton>
				</>
			) : (
				<EmptyCart>장바구니가 비어있습니다.</EmptyCart>
			)}
		</Layout>
	);
};
export default Cart;
