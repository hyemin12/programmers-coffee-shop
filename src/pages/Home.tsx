import { useState } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Visual from '../components/Visual';
import Reward from '../components/Reward';
import CoffeeList from '../components/CoffeeList';
import useMenuStore, { CoffeeProps } from '../store/menu';

function Home() {
	const { setMenu, menu, AllMenu } = useMenuStore();
	const [page, setPage] = useState(1);

	console.log(menu, AllMenu);
	const getMoreCoffee = () => {
		const limit = 3;
		const nextPage = page + 1;
		const startItem = nextPage * limit;
		const endItem = startItem + limit;
		const newItems: CoffeeProps[] = AllMenu.slice(startItem, endItem);
		setMenu(newItems);
		setPage(nextPage);
	};

	return (
		<Layout>
			<Visual />
			<Reward />

			<Inner>
				<CoffeeList list={menu} />
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

const Inner = styled.div`
	max-width: 1100px;
	margin: 0 auto;
`;

const ButtonRow = styled.div`
	display: flex;
	justify-content: center;
	padding: 2em;
`;

export default Home;
