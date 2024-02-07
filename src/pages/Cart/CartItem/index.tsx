import { Button } from 'react-bootstrap';
import useCartStore, { ICart } from '@/store/cart';
import { InfoWrapper, ItemContainer, QuantityAndTotalPrice, QuantityWrapper } from './CartItem.styles';
import Checkbox from './Checkbox';
import { handleLocalString } from '@/util/handleLocalString';

const CartItem = ({ id, image, name, nameEn, quantity, price }: ICart) => {
	const { updateCartItem, deleteCartItem } = useCartStore();

	const deleteCartItemHandler = () => {
		deleteCartItem([id]);
	};
	const updateCartItemHandler = (newQuantity: number) => {
		updateCartItem(id, newQuantity);
	};

	return (
		<ItemContainer>
			<form>
				<Checkbox id={id} />

				<img src={image} alt={name} />
				<InfoWrapper>
					<h4>{name}</h4>
					<p>{nameEn}</p>
				</InfoWrapper>
				<p>{handleLocalString(price)}원</p>

				<QuantityAndTotalPrice>
					<QuantityWrapper>
						<Button
							variant='outline-secondary'
							onClick={() => updateCartItemHandler(quantity - 1)}
							disabled={quantity === 1}
						>
							-
						</Button>
						<p>{quantity}</p>
						<Button
							variant='outline-secondary'
							onClick={() => updateCartItemHandler(quantity + 1)}
							disabled={quantity >= 5}
						>
							+
						</Button>
					</QuantityWrapper>
					<div>
						<p>{handleLocalString(price * quantity)}원</p>
					</div>
				</QuantityAndTotalPrice>
				<Button type='submit' variant='outline-secondary' onClick={deleteCartItemHandler}>
					삭제
				</Button>
			</form>
		</ItemContainer>
	);
};

export default CartItem;
