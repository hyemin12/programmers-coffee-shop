import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import bgImg from '@/assets/images/2024_newYear_promotion_bg.jpg';
import coffeeImg from '@/assets/images/2024_newYear_promotion.png';
import TextImg from '@/assets/images/2024_newYear_promotion_txt.png';

const MainPromotion = () => {
	return (
		<Background>
			<CoffeeImg>
				<img src={coffeeImg} alt='과테말라 까시 씨엘로 250g' />
			</CoffeeImg>

			<TextWrapper>
				<img
					src={TextImg}
					alt='과테말라, 그중에서도 고지대로 품질 좋은 커피를 재배하는 안티구아 벨리에서 자라난 우아한 꽃향기 가득한 원두를 소개합니다.'
				/>
				<Button variant='outline-secondary'>자세히 보기</Button>
			</TextWrapper>
		</Background>
	);
};

const Background = styled.div`
	width: 100%;
	height: 572px;
	background-image: url(${bgImg});
	background-position: center;
	background-size: cover;
	position: relative;
	img {
		display: block;
		width: 100%;
	}
`;
const CoffeeImg = styled.div`
	max-width: 290px;
	position: absolute;
	top: 13%;
	left: 30%;
`;
const TextWrapper = styled.div`
	max-width: 400px;
	position: absolute;
	top: 32%;
	left: 55%;
	button {
		margin-top: 2em;
		color: #6a501a;
		border-color: #6a501a;
		&:hover {
			background-color: #6a501a;
			color: #fff;
		}
	}
`;
export default MainPromotion;
