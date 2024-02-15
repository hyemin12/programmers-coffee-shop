import styled from 'styled-components';
import bgImg from '@/assets/images/2024_newYear_promotion_bg.jpg';
import coffeeImg from '@/assets/images/2024_newYear_promotion.png';
import TextImg from '@/assets/images/2024_newYear_promotion_txt.png';

import BackgroundImg from '@/components/BackgroundImg';
import MoreInfoButton from '@/components/MoreInfoButton';
import IntersectionObserverComponent from '@/components/IntersectionObserverComponent';
import AnimatedComponent from '@/components/AnimatedComponent';

const MainPromotion = () => {
	return (
		<BackgroundImg height='572px' image={bgImg}>
			<IntersectionObserverComponent>
				<AnimatedComponent direction='right' $topPosition={13}>
					<CoffeeImg>
						<img src={coffeeImg} alt='과테말라 까시 씨엘로 250g' />
					</CoffeeImg>
				</AnimatedComponent>

				<AnimatedComponent direction='left' $topPosition={32}>
					<TextWrapper>
						<img
							src={TextImg}
							alt='과테말라, 그중에서도 고지대로 품질 좋은 커피를 재배하는 안티구아 벨리에서 자라난 우아한 꽃향기 가득한 원두를 소개합니다.'
						/>
						<MoreInfoButton color='#6a501a' marginTop={1.5} />
					</TextWrapper>
				</AnimatedComponent>
			</IntersectionObserverComponent>
		</BackgroundImg>
	);
};

const CoffeeImg = styled.div`
	max-width: 290px;
	position: absolute;
	/* top: 13%; */
	left: 30%;
`;
const TextWrapper = styled.div`
	max-width: 400px;
	position: absolute;
	/* top: 32%; */
	left: 55%;
`;
export default MainPromotion;
