import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Layout from '@/components/Layout';
import Visual from '@/components/Visual';
import MenuList from '@/components/MenuList';
import Reward from './Reward';
import useMenuStore, { MenuProps } from '@/store/menu';
import { ButtonRow, Inner } from './Home.styles';
import MainPromotion from './MainPromotion';

function Home() {
	const { setMenu, menu, AllMenu } = useMenuStore();
	const [page, setPage] = useState(1);

	const getMoreCoffee = () => {
		const limit = 3;
		const nextPage = page + 1;
		const startItem = nextPage * limit;
		const endItem = startItem + limit;
		const newItems: MenuProps[] = AllMenu.slice(startItem, endItem);
		setMenu(newItems);
		setPage(nextPage);
	};

	return (
		<Layout>
			<Visual />
			<Reward />
			<MainPromotion />

			<Inner>
				<MenuList list={menu} />
			</Inner>

			{menu.length < AllMenu.length && (
				<ButtonRow>
					<Button variant='outline-success' onClick={getMoreCoffee}>
						더보기
					</Button>
				</ButtonRow>
			)}
		</Layout>
	);
}

export default Home;
