import cupsImg from '@/assets/images/240126_spring_img.png';
import MoreInfoButton from '@/components/MoreInfoButton';
import { Inner } from '@/components/BackgroundImg';
import { Background, CupsImage, TextWrapper } from './Favorite.styles';

const Favorite = () => {
	return (
		<Background>
			<Inner $maxWidth>
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

export default Favorite;
