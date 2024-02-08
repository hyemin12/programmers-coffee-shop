import styled from 'styled-components';
import bgImg from '@/assets/images/240126_pc_pick_bg.jpg';
import cupsImg from '@/assets/images/240126_spring_img.png';
import MoreInfoButton from '@/components/MoreInfoButton';
import { Inner } from '@/components/BackgroundImg';

const Favorite = () => {
	return (
		<Background>
			<Inner>
				<TextWrapper>
					<h1>
						<span>PICK</span>
						<br />
						YOUR
					</h1>
					<h2>FAVORITE</h2>

					<h3>
						<b>다양한 메뉴</b>를
						<br /> <b>스타벅스</b>에서 즐겨보세요.
					</h3>
					<p>
						스타벅스만의 특별함을 경험할 수 있는 최상의 선택 음료
						<br /> 스타벅스 커피와 완벽한 어울림을 자랑하는 푸드
						<br />
						다양한 시도와 디자인으로 가치를 더하는 상품
						<br /> 소중한 사람에게 마음을 전하는 가장 좋은 방법 스타벅스 카드
					</p>

					<MoreInfoButton color='#fff' marginTop={1} />
				</TextWrapper>
				<CupsImage>
					<img src={cupsImg} alt='starbucks menu' />
				</CupsImage>
			</Inner>
		</Background>
	);
};
const Background = styled.section`
	width: auto 87%;
	height: 800px;
	background-image: url(${bgImg});
	background-attachment: fixed;
	background-position: bottom;
	background-size: cover;
	position: relative;
	overflow-x: hidden;
`;
const TextWrapper = styled.div`
	width: 25vw;
	max-width: 380px;
	text-align: end;
	color: #fff;
	position: absolute;
	top: 19%;
	left: 97px;
	h1 {
		margin-bottom: 0;
		font-size: 6em;
		font-weight: 600;
		line-height: 1em;
		span {
			letter-spacing: 0.1em;
		}
	}
	h2 {
		margin-bottom: 0.5em;
		letter-spacing: 0.05em;
		font-size: 3em;
	}
	h3 {
		font-weight: normal;
	}
`;
const CupsImage = styled.div`
	width: 50vw;
	max-width: 915px;
	position: absolute;
	top: 20%;
	right: 0%;
	img {
		width: 100%;
	}
`;
export default Favorite;
