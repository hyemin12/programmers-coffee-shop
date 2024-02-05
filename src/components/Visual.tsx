import styled, { css, keyframes } from 'styled-components';
import { Button } from 'react-bootstrap';
import Backdrop from '../assets/images/2024_spring_top_bg.jpg';

import logo from '../assets/images/2024_spring_top_logo.png';
import Drink1 from '../assets/images/2024_spring_top_drink1.png';
import Drink2 from '../assets/images/2024_spring_top_drink2.png';
import Drink3 from '../assets/images/2024_spring_top_drink3.png';

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

const fadeIn = keyframes`
  0%{opacity:0}
  100%{opacity:1}
`;

const fadeInAnimation = css`
	animation: ${fadeIn} 1s ease-out;
	animation-fill-mode: both;
`;

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
		${fadeInAnimation};
		animation-delay: 0.2s;
	}
	button {
		display: block;
		margin: 0 auto;
		${fadeInAnimation}
		animation-delay:1.5s;
	}
`;
const DrinkGroup = styled.div`
	img {
		position: absolute;
		${fadeInAnimation};
	}
	img:first-child {
		width: 16.4%;
		top: 22.8%;
		left: 41.2%;
		animation-delay: 0.5s;
	}
	img:nth-child(2) {
		width: 14.8%;
		top: 17%;
		left: 61.5%;
		animation-delay: 0.8s;
	}
	img:last-child {
		width: 20.6%;
		top: 51.9%;
		right: 30.7%;
		animation-delay: 1.2s;
	}
`;

export default Visual;
