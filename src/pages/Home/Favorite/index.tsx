import styled from 'styled-components';
import bgImg from '@/assets/images/240126_pc_pick_bg.jpg';
import cupsImg from '@/assets/images/240126_spring_img.png';
import TextImg1 from '@/assets/images/fav_prod_txt01.png';
import TextImg2 from '@/assets/images/fav_prod_txt02.png';
import MoreInfoButton from '@/components/MoreInfoButton';

const Favorite = () => {
	return (
		<Background>
			<TextWrapper>
				<div className='text1'>
					<img src={TextImg1} alt='PICK YOUR FAVORITE' />
				</div>
				<div className='text2'>
					<img
						src={TextImg2}
						alt='다양한 메뉴를 스타벅스에서 즐겨보세요. 스타벅스만의 특별함을 경험할 수 있는 최상의 선택 음료. 스타벅스 커피와 완벽한 어울림을 자랑하는 푸드. 다양한 시도와 디자인으로 가치를 더하는 상품. 소중한 사람에게 마음을 전하는 가장 좋은 방법 스타벅스 카드'
					/>
				</div>

				<MoreInfoButton color='#fff' marginTop={2.5} />
			</TextWrapper>
			<CupsImage>
				<img src={cupsImg} alt='starbucks menu' />
			</CupsImage>
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
	max-width: 362px;
	text-align: end;
	position: absolute;
	top: 20%;
	left: 10%;
	img {
		display: block;
	}
	.text1 {
		height: 200px;
		margin-bottom: 3em;
		img {
			float: right;
		}
	}
	.text2 {
		height: 156px;
	}
`;
const CupsImage = styled.div`
	width: 915px;
	position: absolute;
	top: 20%;
	right: 0%;
`;
export default Favorite;
