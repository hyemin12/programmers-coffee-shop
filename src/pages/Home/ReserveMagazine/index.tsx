import styled from 'styled-components';
import bgImg from '@/assets/images/reserve_bg_pc.png';
import collageImg from '@/assets/images/reserve_visual_pc.png';
import textImg from '@/assets/images/reserve_text_pc.png';
import MoreInfoButton from '@/components/MoreInfoButton';

const ReserveMagazine = () => {
	return (
		<Background>
			<TextWrapper>
				<img src={textImg} alt='RESERVE MAGAZINE. 리저브 매거진과 함께 깊어가는 가을을 즐겨보세요.' />
				<MoreInfoButton color='#000' marginTop={1.5} />
			</TextWrapper>
			<CollageImg>
				<img src={collageImg} alt='reserve magazine' />
			</CollageImg>
		</Background>
	);
};
const Background = styled.section`
	width: 100%;
	height: 460px;
	background-color: #fff;
	background-image: url(${bgImg});
	background-position: center;
	background-repeat: no-repeat;
	position: relative;
`;
const TextWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;
	button {
		margin-left: 109px;
	}
`;
const CollageImg = styled.div`
	position: absolute;
	top: 0;
	right: 23%;
`;
export default ReserveMagazine;
