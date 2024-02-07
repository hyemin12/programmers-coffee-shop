import { useParams } from 'react-router-dom';
import { Button, Col, Row } from 'react-bootstrap';
import Layout from '../../components/Layout';
import useMenuStore from '../../store/menu';
import useCartStore from '../../store/cart';
import { handleLocalString } from '../../util/handleLocalString';
import { CannotFind, CoffeeImgWrapper, Description, NameWrapper, PriceWrapper } from './Detail.styles';

/** 커피이미지, 커피명, 커피설명, 커피가격, 카드에 담기 버튼 */
const Detail = () => {
	const { id } = useParams();
	const { AllMenu } = useMenuStore();
	const { addCartItem } = useCartStore();
	const [coffee] = AllMenu.filter((data) => data.id === Number(id));

	const addCartItemHandler = () => {
		const item = { ...coffee, quantity: 1 };
		addCartItem(item);
	};

	if (!coffee)
		return (
			<Layout>
				<CannotFind>
					<h3>일치하는 커피가 없음</h3>
					<Button href='/' variant='success'>
						메인으로 돌아가기
					</Button>
				</CannotFind>
			</Layout>
		);

	return (
		<Layout $maxWidth>
			<Row>
				<CoffeeImgWrapper>
					<img src={coffee.image} alt={coffee.name} />
				</CoffeeImgWrapper>
				<Col>
					<NameWrapper>
						<h3>{coffee.name}</h3>
						<p>{coffee.nameEn}</p>
					</NameWrapper>
					<Description>{coffee.description}</Description>
					<PriceWrapper>
						<li>
							tall<p>￦{handleLocalString(coffee.price)}</p>
						</li>
						<li>
							grande<p>￦{handleLocalString(coffee.price + 500)}</p>
						</li>
						<li>
							venti<p>￦{handleLocalString(coffee.price + 1000)}</p>
						</li>
					</PriceWrapper>
					<div className='d-grid'>
						<Button variant='outline-success' size='lg' onClick={addCartItemHandler}>
							장바구니에 담기
						</Button>
					</div>
				</Col>
			</Row>
		</Layout>
	);
};

export default Detail;
