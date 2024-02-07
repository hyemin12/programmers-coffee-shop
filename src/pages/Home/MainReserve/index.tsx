import styled from 'styled-components';
import bgImg from '@/assets/images/231221_pc_reserve_bg.jpg';
import logoImg from '@/assets/images/231221_pc_reserve_logo.png';
import BackgroundImg from '@/components/BackgroundImg';
import { Button } from 'react-bootstrap';

const MainReserve = () => {
	return (
		<BackgroundImg height='400px' image={bgImg}>
			<TextWrapper>
				<img src={logoImg} alt='GUATEMALA H U E H U E  T E N A N G O notes of Bittersweet Chocolate & Red Grape' />
				<Button>자세히 보기</Button>
			</TextWrapper>
		</BackgroundImg>
	);
};
const TextWrapper = styled.div`
	width: 100%;
	max-width: 400px;
	text-align: center;
	position: absolute;
	top: 20%;
	left: 27%;
	img {
		display: block;
	}
	button {
		display: inline-block;
		margin-top: 1%.5em;
		background-color: transparent;
		border: 1px solid #cd9757;
		color: #cd9757;
		&:hover {
			border-color: #cd9757;
			background-color: #cd9757;
			color: #fff;
		}
	}
`;
export default MainReserve;
