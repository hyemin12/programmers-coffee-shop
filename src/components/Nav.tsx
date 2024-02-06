import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavComponents = () => {
	const menu = [
		{ path: '/coffee', name: 'MENU' },
		{ path: '/company', name: 'starbucks' },
		{ path: '/members', name: 'starbucks rewards' },
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

export default NavComponents;
