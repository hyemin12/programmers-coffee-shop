import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import Layout from '@/components/Layout';
import CartItem from './CartItem';
import useCartStore from '@/store/cart';

const Cart = () => {
	const { cartItems, clearSelectedItem, clearCartItems } = useCartStore();

	/** 장바구니에 담긴 상품 목록, 선택한 상품 목록 삭제 */
	const deleteItems = () => {
		clearSelectedItem();
		clearCartItems();
	};

	return (
		<Layout $maxWidth>
			<h2>장바구니</h2>
			<div>
				<Button>선택삭제</Button>
				<Button onClick={deleteItems}>전체삭제</Button>
			</div>
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
				<p>장바구니가 비어있습니다.</p>
			)}
		</Layout>
	);
};
const CartList = styled.ul`
	border-bottom: 1px solid #ddd;
`;
const OrderButton = styled.div`
	width: 100%;
	button {
		display: block;
		margin: 0 auto;
	}
`;
export default Cart;
