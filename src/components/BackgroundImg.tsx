import React from 'react';
import styled from 'styled-components';

interface BackgroundImgProps {
	image: string;
	height: string;
	children: React.ReactNode;
}

const BackgroundImg = ({ image, height, children }: BackgroundImgProps) => {
	return (
		<Background $bgImg={image} $height={height}>
			<Inner>{children}</Inner>
		</Background>
	);
};
const Background = styled.section<{ $bgImg: string; $height: string }>`
	width: 100%;
	height: ${({ $height }) => $height};
	background-image: url(${({ $bgImg }) => $bgImg});
	background-position: center;
	background-size: cover;
	overflow: hidden;
`;
export const Inner = styled.div`
	width: 100%;
	max-width: 1200px;
	height: 100%;
	margin: 0 auto;
	position: relative;
	@media screen and (min-width: 1200px) {
		max-width: 85%;
	}
`;
export default BackgroundImg;
