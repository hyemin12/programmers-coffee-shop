import styled from 'styled-components';
import RewardImg from '../assets/images/rewards-logo.png';
import { Button, Row } from 'react-bootstrap';

const Reward = () => {
	const alertNoti = () => alert('준비중인 서비스입니다.');
	return (
		<RewardContainer>
			<RewardInner>
				<div className='reward-logo'>
					<img src={RewardImg} alt='스타벅스 리워드' />
				</div>
				<div className='info-container'>
					<RewardInfoContents>
						<div>
							<h2>
								스타벅스만의 특별한 혜택, <Bold>스타벅스 리워드</Bold>
							</h2>

							<div>
								<p>
									<Bold>스타벅스 회원이세요?</Bold> 로그인을 통해 나만의 리워드를 확인해보세요.
								</p>
								<p>
									<Bold>스타벅스 회원이 아니세요?</Bold> 가입을 통해 리워드 혜택을 즐기세요.
								</p>
							</div>
							<Row className='btn-group'>
								<Button variant='success' size='sm' onClick={alertNoti}>
									회원가입
								</Button>
								<Button variant='outline-light ' size='sm' onClick={alertNoti}>
									로그인
								</Button>
							</Row>
						</div>
					</RewardInfoContents>
					<GiftInfoContents>
						<div>
							<p>
								회원 가입 후, 스타벅스 e-Gift Card를 <Bold>"나에게 선물하기"로 구매하시고, 편리하게 등록하세요!</Bold>
							</p>
							<p>카드를 등록하여 스타벅스 리워드 회원이 되신 후, 첫 구매를 하시면 무료 음료쿠폰을 드립니다!</p>
						</div>
						<Button variant='outline-light' size='sm' onClick={alertNoti}>
							e-Gift Card 선물하기
						</Button>
					</GiftInfoContents>
				</div>
			</RewardInner>
		</RewardContainer>
	);
};
const Bold = styled.span`
	font-weight: bold;
`;
const RewardContainer = styled.div`
	background-color: #1e3932;
	padding: 2.5em 0;
	color: #fff;
	.row {
		flex-wrap: nowrap;
		width: auto;
		max-width: auto;
		* {
			width: auto;
			max-width: auto;
		}
	}
	button {
		height: 38px;
	}
`;
const RewardInner = styled(Row)`
	gap: 1.5em;

	width: 100% !important;
	max-width: 1000px !important;
	margin: 0 auto;
	.reward-logo {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 176px;
		flex-shrink: 0;
		img {
			width: 100%;
		}
	}
	.info-container {
		flex-grow: 1;
		h2 {
			font-weight: normal;
		}
		p {
			margin-bottom: 0;
		}
	}
`;
const RewardInfoContents = styled(Row)`
	border-bottom: 1px solid #4b615b;
	padding-bottom: 1em;
	margin-bottom: 1em;
	position: relative;
	h2 {
		font-size: 1.8em;
		margin-bottom: 0.5em;
	}
	p {
		font-size: 1.15em;
	}
	.btn-group {
		gap: 1em;
		width: 180px;
		position: absolute;
		bottom: 22px;
		right: 20px;
		button {
			width: 50%;
		}
	}
`;
const GiftInfoContents = styled(Row)`
	justify-content: space-between;
	align-items: center;
	button {
		width: 180px !important;
	}
`;

export default Reward;
