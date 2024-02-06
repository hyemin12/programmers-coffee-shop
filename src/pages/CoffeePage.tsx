import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import Layout from '../components/Layout';
import CoffeeList from '../components/CoffeeList';
import useMenuStore, { CategoryType } from '../store/menu';
import decafImg from '../assets/images/logo_decaf.png';

const CoffeePage = () => {
	const { categories, AllMenu } = useMenuStore();
	return (
		<Layout $maxWidth>
			{categories.map((category) => (
				<section key={category}>
					<FilterItem category={category} />
					<CoffeeList list={AllMenu.filter((data) => data.category === category)} />
				</section>
			))}
		</Layout>
	);
};

const FilterItem = ({ category }: { category: CategoryType }) => {
	const categoryName = { coffee: '에스프레소', seasonalMenu: '시즌 메뉴', blended: '블렌디드' };
	return (
		<CategoryTitle>
			<h4>{categoryName[category]}</h4>
			<img src={decafImg} alt='디카페인' />
			<p>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</p>
		</CategoryTitle>
	);
};

const CategoryTitle = styled(Row)`
	flex-wrap: nowrap;
	align-items: center;
	background-color: #f4f4f2;
	padding: 20px;
	> * {
		width: auto;
		padding-left: 0;
		padding-right: 0;
		margin-top: 0;
	}
	h4 {
		margin-bottom: 0;
	}
	img {
		margin-left: 1em;
		width: 60px;
	}
	p {
		margin-bottom: 0;
		color: #444;
	}
`;

export default CoffeePage;
