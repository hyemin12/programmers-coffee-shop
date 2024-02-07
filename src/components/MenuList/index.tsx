import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import MenuItem from '../MenuItem';
import { MenuProps } from '@/store/menu';

const MenuList = ({ list }: { list: MenuProps[] }) => {
	return (
		<ListContainerStyle>
			<Row>
				{list.map((coffee) => (
					<MenuItem key={coffee.name} {...coffee} />
				))}
			</Row>
		</ListContainerStyle>
	);
};
const ListContainerStyle = styled(Container)`
	padding: 2em 0;
`;
export default MenuList;
