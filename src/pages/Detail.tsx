import React from 'react';
import { useParams } from 'react-router-dom';
import { coffeeDB } from '../data';
import Layout from '../components/Layout';
import { Button, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

/** 커피이미지, 커피명, 커피설명, 커피가격, 카드에 담기 버튼 */
const Detail = () => {
	const { id } = useParams();
	const [coffee] = coffeeDB.filter((data) => data.id === Number(id));

	if (!coffee) return <Layout>일치하는 커피가 없음</Layout>;
	return (
		<Layout $maxWidth>
			<Row>
				<CoffeeImgWrapper>
					<img src={coffee.image} alt={coffee.name} />
				</CoffeeImgWrapper>
				<Col>
					<NameWrapper>
						<h3>{coffee.name}</h3>
						<p>{coffee.nameEn}</p>
					</NameWrapper>
					<Description>{coffee.description}</Description>
					<PriceWrapper>
						<li>
							tall<p>￦{handleLocalString(coffee.price)}</p>
						</li>
						<li>
							grande<p>￦{handleLocalString(coffee.price + 500)}</p>
						</li>
						<li>
							venti<p>￦{handleLocalString(coffee.price + 1000)}</p>
						</li>
					</PriceWrapper>
					<div className='d-grid'>
						<Button variant='outline-success' size='lg'>
							장바구니에 담기
						</Button>
					</div>
				</Col>
			</Row>
		</Layout>
	);
};

const handleLocalString = (num: number): string => num.toLocaleString();

const CoffeeImgWrapper = styled(Col)`
	max-width: 400px;
	img {
		display: block;
		width: 100%;
		object-fit: cover;
	}
`;
const NameWrapper = styled.div`
	border-bottom: 2px solid #333;
	h3 {
		font-weight: bold;
		margin-bottom: 0;
	}
	p {
		color: #666;
	}
`;
const Description = styled.p`
	padding: 1em 0;
`;
const PriceWrapper = styled.ul`
	display: flex;
	justify-content: space-between;
	margin: 0;
	margin-bottom: 1em;
	padding: 0.5em 0;
	border-top: 1px solid #ddd;

	li {
		list-style: none;
		width: 100%;
		text-align: center;
		&:first-child {
			border-right: 1px dotted #ddd;
		}
		&:last-child {
			border-left: 1px dotted #ddd;
		}
		p {
			margin-bottom: 0;
		}
	}
`;
export default Detail;
