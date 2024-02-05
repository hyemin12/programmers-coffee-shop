import React from 'react';
import Backdrop from '../assets/images/2024_spring_top_bg.jpg';

import logo from '../assets/images/2024_spring_top_logo.png';
import Drink1 from '../assets/images/2024_spring_top_drink1.png';
import Drink2 from '../assets/images/2024_spring_top_drink2.png';
import Drink3 from '../assets/images/2024_spring_top_drink3.png';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const Visual = () => {
	return (
		<Container>
			<LogoWrapper>
				<img src={logo} alt='MEET THE HEARTFUL MOMENTS' />
				<Button variant='outline-success'>자세히 보기</Button>
			</LogoWrapper>
			<DrinkGroup>
				<img src={Drink1} alt='화이트 타로 라떼' />
				<img src={Drink2} alt='에스프레소 쿠키 라떼' />
				<img src={Drink3} alt='리프레싱 자몽 캐모마일 티' />
			</DrinkGroup>
		</Container>
	);
};

const Container = styled.div`
	height: 32vw;
	background-image: url(${Backdrop});
	background-position: center;
	background-size: cover;
	position: relative;
`;

const LogoWrapper = styled.div`
	width: 17%;
	position: absolute;
	top: 30%;
	left: 14.5%;
	img {
		display: block;
		width: 100%;
		margin-bottom: 2em;
	}
	button {
		display: block;
		margin: 0 auto;
	}
`;
const DrinkGroup = styled.div`
	img {
		position: absolute;
	}
	img:first-child {
		width: 16.4%;
		top: 22.8%;
		left: 41.2%;
	}
	img:nth-child(2) {
		width: 14.8%;
		top: 17%;
		left: 61.5%;
	}
	img:last-child {
		width: 20.6%;
		top: 51.9%;
		right: 30.7%;
	}
`;
export default Visual;
