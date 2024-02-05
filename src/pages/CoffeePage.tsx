import { coffeeDB } from '../data';
import Layout from '../components/Layout';
import CoffeeList from '../components/CoffeeList';
import styled from 'styled-components';

const CoffeePage = () => {
	const categories = ['seasonalMenu', 'coffee', 'blended'];
	return (
		<Layout $maxWidth>
			{categories.map((category) => (
				<section key={category}>
					<FilterItem category={category === 'seasonalMenu' ? '시즌 메뉴' : category} />
					<CoffeeList list={coffeeDB.filter((data) => data.category === category)} />
				</section>
			))}
		</Layout>
	);
};

const FilterItem = ({ category }: { category: string }) => {
	return (
		<CategoryTitle>
			<h4>{category}</h4>
		</CategoryTitle>
	);
};
const CategoryTitle = styled.div`
	background-color: #f4f4f2;
	padding: 20px;
`;

export default CoffeePage;
