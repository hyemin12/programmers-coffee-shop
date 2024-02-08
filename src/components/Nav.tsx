import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import cartIcon from '@/assets/images/shopping-cart.png';
import useCartStore from '@/store/cart';

const NavComponents = () => {
	const { cartItems } = useCartStore();
	const menu = [
		{ path: '/coffee', name: 'MENU' },
		{ path: '/company', name: 'starbucks' },
		{ path: '/rewards', name: 'starbucks rewards' },
	];
	return (
		<NavBarStyle data-bs-theme='dark'>
			<Container>
				<Navbar.Brand href='/'>스타벅스 프로그래머스</Navbar.Brand>
				<Nav className='me-auto'>
					{menu.map(({ path, name }: { path: string; name: string }) => (
						<LinkStyle className={({ isActive }) => (isActive ? 'active' : '')} key={path} to={path}>
							{name}
						</LinkStyle>
					))}
				</Nav>
				<CartBtn to='/cart'>
					<img src={cartIcon} alt='장바구니' />
					{cartItems.length > 0 && <span>{cartItems.length}</span>}
				</CartBtn>
			</Container>
		</NavBarStyle>
	);
};
const NavBarStyle = styled(Navbar)`
	background-color: #2c2a29;
	a.navbar-brand {
		font-size: 1.3em;
		font-weight: 600;
		margin-right: 2em;
	}
`;
const LinkStyle = styled(NavLink)`
	margin-right: 1em;
	color: #999;
	font-size: 0.96em;
	font-weight: normal;
	text-transform: uppercase;
	transition: all 0.3s;
	&.active,
	&:hover {
		color: #f6f5ef;
		text-decoration: underline;
	}
`;
const CartBtn = styled(Link)`
	position: relative;
	cursor: pointer;
	img {
		width: 24px;
		height: 24px;
	}
	span {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 16px;
		height: 16px;
		background-color: tomato;
		border-radius: 50%;
		color: #fff;
		font-size: 0.7em;
		position: absolute;
		top: -5px;
		right: -13px;
	}
`;

export default NavComponents;
