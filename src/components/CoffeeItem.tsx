import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { CoffeeProps } from '../data';

const CoffeeItem = ({ image, name, id }: CoffeeProps) => {
	const { pathname } = useLocation();
	return (
		<CoffeeItemStyle $isHomeScreen={pathname === '/'} xs={12} sm={6} md={4}>
			<Link to={`/${id}`}>
				<img src={image} alt={name} />
			</Link>

			<h4>{name}</h4>
		</CoffeeItemStyle>
	);
};

const CoffeeItemStyle = styled(Col)<{ $isHomeScreen: boolean }>`
	flex-grow: 1;
	a {
		display: block;
		width: 100%;
		overflow: hidden;
		img {
			width: 100%;
			transition: all 0.3s;
			&:hover {
				transform: scale(1.05);
			}
		}
	}
	h4 {
		font-size: 1.2em;
		text-align: center;
		padding: 0.5em 0;
	}
	@media (min-width: 576px) {
		max-width: 50%;
	}
	@media (min-width: 768px) {
		max-width: 33.333333%;
	}
	/* 홈화면에서는 최대 아이템개수 3으로 고정 */
	${({ $isHomeScreen }) =>
		!$isHomeScreen &&
		`@media (min-width: 1200px) {
		max-width: 25%;
	}`}
`;
export default CoffeeItem;
