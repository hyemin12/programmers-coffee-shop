import BackgroundImg from '@/components/BackgroundImg';
import bgImg from '@/assets/images/store_bg.jpg';
import coffeeBeanImg from '@/assets/images/store_exp_img03.png';
import storeImg1 from '@/assets/images/221212_main_story_1.png';
import storeImg2 from '@/assets/images/221212_main_story_2.png';
import storeImg3 from '@/assets/images/store_exp_img04.png';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const Store = () => {
	return (
		<BackgroundImg height='400px' image={bgImg} $maxWidth={false}>
			<TextWrapper>
				<h3>
					전국 어디에서나 <b>스타벅스와 함께!</b>
				</h3>
				<h4>스타벅스와 함께 커피 한잔의 여유를 가져보세요</h4>
				<p>
					나의 취향이 머무는 곳, <b>스타벅스 리저브 매장</b>
				</p>
				<p>
					더욱 편리하게 스타벅스를 만나보는 <b>드라이브 스루 매장</b>
				</p>
				<p>
					함께해서 더 따뜻한 지역 사회 소통 공간, <b>커뮤니티 스토어</b>까지.
				</p>
				<p className='waiting'>다양한 스타벅스 매장이 여러분을 기다립니다.</p>
				<Button variant='outline-dark'>매장 찾기</Button>
			</TextWrapper>

			<CoffeeBean src={coffeeBeanImg} alt='커피콩 이미지' />

			<StoreImg1 className='storeImg1' src={storeImg1} alt='매장 이미지1' />
			<StoreImg2 className='storeImg2' src={storeImg2} alt='매장 이미지2' />

			<StoreImg3 src={storeImg3} alt='일러스트 이미지' />
		</BackgroundImg>
	);
};
const TextWrapper = styled.div`
	position: absolute;
	top: 50%;
	right: 20%;
	transform: translateY(-50%);
	h3 {
		margin-bottom: 0;
	}
	h4 {
		font-size: 1.2em;
	}
	p {
		margin-bottom: 0;
		&.waiting {
			margin: 1em 0;
		}
	}
`;
const CoffeeBean = styled.img`
	position: absolute;
	top: -60px;
	left: 50%;
	transform: translateX(-40%);
`;

const StoreImg1 = styled.img`
	position: absolute;
	left: 19%;
	top: 0;
`;
const StoreImg2 = styled.img`
	position: absolute;
	left: 34%;
	bottom: 30px;
`;
const StoreImg3 = styled.img`
	position: absolute;
	bottom: -10px;
	right: 10%;
`;
export default Store;
