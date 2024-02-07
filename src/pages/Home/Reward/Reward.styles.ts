import { Row } from 'react-bootstrap';
import styled from 'styled-components';

export const Bold = styled.span`
	font-weight: bold;
`;
export const RewardContainer = styled.div`
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
export const RewardInner = styled(Row)`
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
export const RewardInfoContents = styled(Row)`
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
export const GiftInfoContents = styled(Row)`
	justify-content: space-between;
	align-items: center;
	button {
		width: 180px !important;
	}
`;
