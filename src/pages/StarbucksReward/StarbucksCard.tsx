import bgImg from '@/assets/images/msr_bn01.jpg';
import BackgroundImg from '@/components/BackgroundImg';
import { TextWrapper } from './StarbucksReward.styles';
import { Button } from 'react-bootstrap';

const StarbucksCard = () => {
	return (
		<BackgroundImg image={bgImg} height='430px' $basePosition='20% 50%'>
			<TextWrapper element='card'>
				<h3>
					스타벅스만의 특별함, <br />
					<b>스타벅스 카드</b>를 <b>소개</b>합니다.
				</h3>
				<p>
					스타벅스 카드는 기본적인 FreeExtra 혜택을 드리며,
					<br /> 카드 고객 대상으로 다양한 이벤트를 지속적으로 진행하고 있습니다.
				</p>
				<div className='btn-group'>
					<Button variant='outline-light'>스타벅스 카드 소개</Button>
					<Button variant='outline-light'>등록 및 조회</Button>
					<Button variant='outline-light'>충전 및 이용안내</Button>
					<Button variant='outline-light'>My 스타벅스 카드 확인</Button>
				</div>
			</TextWrapper>
		</BackgroundImg>
	);
};

export default StarbucksCard;
