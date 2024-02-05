import { Container, Nav, Navbar } from 'react-bootstrap';

const NavComponents = () => {
	return (
		<Navbar bg='dark' data-bs-theme='dark'>
			<Container>
				<Navbar.Brand href='/'>starbuck</Navbar.Brand>
				<Nav className='me-auto'>
					<Nav.Link href='/coffee'>coffee</Nav.Link>
					<Nav.Link href='/members'>Members</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavComponents;
