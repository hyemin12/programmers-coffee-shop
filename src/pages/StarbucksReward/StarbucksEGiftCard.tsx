import BackgroundImg from '@/components/BackgroundImg';
import bgImg from '@/assets/images/msr_bn02.jpg';
import { TextWrapper } from './StarbucksReward.styles';
import { Button } from 'react-bootstrap';

const StarbucksEGiftCard = () => {
	return (
		<BackgroundImg image={bgImg} height='430px' $basePosition='right'>
			<TextWrapper element='eGift'>
				<h3>
					쉽고 빠르게 스타벅스 카드를 <b>구매하는 방법</b>, <br />
					<b>스타벅스 e-Gift Card</b>를 이용해 보세요.
				</h3>
				<p>
					매장 방문 없이 웹사이트와 모바일 앱에서 <br />
					스타벅스 e-Gift Card를 손쉽게 구매하여 사용해보세요.
				</p>
				<div className='btn-group'>
					<Button variant='outline-dark'>스타벅스 e-Gift Card 소개</Button>
					<Button variant='outline-dark'>이용안내</Button>
					<Button variant='outline-dark'>선물하기</Button>
				</div>
			</TextWrapper>
		</BackgroundImg>
	);
};

export default StarbucksEGiftCard;
