import styled from 'styled-components';
import bgImg from '@/assets/images/240126_pc_pick_bg.jpg';

export const Background = styled.section`
	width: auto 87%;
	height: 800px;
	background-image: url(${bgImg});
	background-attachment: fixed;
	background-position: bottom;
	background-size: cover;
	position: relative;
	overflow-x: hidden;
`;
export const TextWrapper = styled.div`
	text-align: end;
	color: #fff;
	position: absolute;
	/* top: 19%; */
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
export const CupsImage = styled.div`
	width: 50vw;
	max-width: 915px;
	position: absolute;
	top: 20%;
	right: 0%;
	img {
		width: 100%;
	}
`;
