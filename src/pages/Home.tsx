import { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import Layout from '../components/Layout';
import Visual from '../components/Visual';
import Reward from '../components/Reward';
import CoffeeList from '../components/CoffeeList';
import { CoffeeProps, coffeeDB } from '../data';

function Home() {
	const limit = 3;
	const [page, setPage] = useState(0);
	const [list, setList] = useState<CoffeeProps[]>(coffeeDB.slice(0, 6));

	const getMoreCoffee = () => {
		const nextPage = page + 1;
		const offset = limit * (nextPage + 1) + 3;
		const startItem = page === 0 ? 6 : nextPage * limit;

		const newItems: CoffeeProps[] = coffeeDB.slice(startItem, offset);
		setList([...list, ...newItems]);
		setPage(nextPage);
	};

	return (
		<Layout>
			<Visual />
			<Reward />

			<Inner>
				<CoffeeList list={list} />
			</Inner>

			{list.length < coffeeDB.length && (
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
