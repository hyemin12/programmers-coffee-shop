import styled from 'styled-components';
import bgImg from '@/assets/images/231221_pc_reserve_bg.jpg';
import logoImg from '@/assets/images/231221_pc_reserve_logo.png';

import BackgroundImg from '@/components/BackgroundImg';
import MoreInfoButton from '@/components/MoreInfoButton';

const MainReserve = () => {
	return (
		<BackgroundImg height='400px' image={bgImg}>
			<TextWrapper>
				<img src={logoImg} alt='GUATEMALA H U E H U E  T E N A N G O notes of Bittersweet Chocolate & Red Grape' />
				<MoreInfoButton color='#cd9757' marginTop={0.5} />
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
`;
export default MainReserve;
