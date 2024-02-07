import Layout from '@/components/Layout';
import MenuList from '@/components/MenuList';
import useMenuStore, { CategoryType } from '@/store/menu';
import decafImg from '@/assets/images/logo_decaf.png';
import { CategoryTitleStyle } from './Menus.styles';

const Menus = () => {
	const { categories, AllMenu } = useMenuStore();
	return (
		<Layout $maxWidth>
			{categories.map((category) => (
				<section key={category}>
					<CategoryTitle category={category} />
					<MenuList list={AllMenu.filter((data) => data.category === category)} />
				</section>
			))}
		</Layout>
	);
};

const CategoryTitle = ({ category }: { category: CategoryType }) => {
	const categoryName = { coffee: '에스프레소', seasonalMenu: '시즌 메뉴', blended: '블렌디드' };
	return (
		<CategoryTitleStyle>
			<h4>{categoryName[category]}</h4>
			<img src={decafImg} alt='디카페인' />
			<p>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</p>
		</CategoryTitleStyle>
	);
};

export default Menus;
