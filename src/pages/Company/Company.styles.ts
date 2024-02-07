import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import mainImg from '@/assets/images/coffeebg.jpg';
import bgImg from '@/assets/images/cp_infomt_bg.png';

export const MainImgStyle = styled.div`
	width: 100%;
	height: 200px;
	overflow: hidden;
	background-image: url(${mainImg});
	background-position: center;
	background-size: cover;
	margin-bottom: 1em;
`;
export const LabImgStyle = styled.div`
	width: 300px;
	height: 300px;
	border-radius: 50%;
	overflow: hidden;
	position: absolute;
	top: 20%;
	left: 8%;
	img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
export const RowContainer = styled(Row)`
	flex-wrap: nowrap;
	width: 1100px;
	height: 440px;
	background-image: url(${bgImg});
	background-position: center;
	background-size: cover;
	margin: 0 auto;
	position: relative;
	> * {
		width: auto;
		padding-right: 0;
		padding-left: 0;
		margin-top: 0;
	}
	h4 {
		position: absolute;
		top: 40%;
		left: 48%;
	}
`;
export const PointFont = styled.h4`
	color: #006633;
	font-style: italic;
`;
