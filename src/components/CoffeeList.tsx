import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import CoffeeItem from './CoffeeItem';
import { CoffeeProps } from '../data';

const CoffeeList = ({ list }: { list: CoffeeProps[] }) => {
	return (
		<ListContainerStyle>
			<Row>
				{list.map((coffee) => (
					<CoffeeItem key={coffee.name} {...coffee} />
				))}
			</Row>
		</ListContainerStyle>
	);
};
const ListContainerStyle = styled(Container)`
	padding: 2em 0;
`;
export default CoffeeList;
