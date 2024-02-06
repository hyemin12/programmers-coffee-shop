import { Container, Nav, Navbar } from 'react-bootstrap';

const NavComponents = () => {
	return (
		<Navbar bg='dark' data-bs-theme='dark'>
			<Container>
				<Navbar.Brand href='/'>스타벅스 프로그래머스</Navbar.Brand>
				<Nav className='me-auto'>
					<Nav.Link href='/coffee'>coffee</Nav.Link>
					<Nav.Link href='/company'>company</Nav.Link>
					<Nav.Link href='/members'>Members</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavComponents;
