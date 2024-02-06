import Layout from '../components/Layout';
import useCartStore from '../store/cart';

const Cart = () => {
	const { cartItems } = useCartStore();
	return (
		<Layout $maxWidth>
			<h2>장바구니</h2>
			{cartItems.length > 0 ? <p></p> : <p>장바구니가 비어있습니다.</p>}
		</Layout>
	);
};

export default Cart;
