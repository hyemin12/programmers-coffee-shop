import { Button } from 'react-bootstrap';
import BackgroundImg from '@/components/BackgroundImg';
import mainBnImg from '@/assets/images/msr_bn_bg1.jpg';

import Layout from '@/components/Layout';
import StarbucksCard from './StarbucksCard';
import StarbucksEGiftCard from './StarbucksEGiftCard';
import { MainBannerTextWrapper } from './StarbucksReward.styles';

const StarbucksRewards = () => {
	return (
		<Layout>
			<BackgroundImg image={mainBnImg} height='400px'>
				<MainBannerTextWrapper>
					<h2>
						스타벅스만의 <b>특별한 혜택</b>, <br />
						<b>스타벅스 리워드</b>를 만나보세요.
					</h2>
					<p>
						스타벅스를 사랑해주시는 고객님을 위해 별★을 적립하여 <br />
						혜택으로 돌려드리는 특별한 리워드 서비스입니다.
					</p>
					<div className='btn-group'>
						<Button variant='outline-dark'>스타벅스 리워드 소개</Button>
						<Button variant='outline-dark'>My 리워드 확인</Button>
					</div>
				</MainBannerTextWrapper>
			</BackgroundImg>
			<StarbucksCard />
			<StarbucksEGiftCard />
		</Layout>
	);
};
export default StarbucksRewards;
