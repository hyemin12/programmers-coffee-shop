import React from 'react';
import styled from 'styled-components';

interface BackgroundImgProps {
	$maxWidth?: boolean;
	$basePosition?: string;
	image: string;
	height: string;
	children: React.ReactNode;
}

const BackgroundImg = ({ $basePosition = 'center', image, height, children, $maxWidth = true }: BackgroundImgProps) => {
	return (
		<Background $bgImg={image} $height={height} $basePosition={$basePosition}>
			<Inner $maxWidth={$maxWidth}>{children}</Inner>
		</Background>
	);
};
const Background = styled.section<{ $bgImg: string; $basePosition: string; $height: string }>`
	width: 100%;
	height: ${({ $height }) => $height};
	background-image: url(${({ $bgImg }) => $bgImg});
	background-position: ${({ $basePosition }) => $basePosition};
	background-size: cover;
	overflow: hidden;
`;
export const Inner = styled.div<{ $maxWidth: boolean }>`
	width: 100%;
	max-width: ${({ $maxWidth }) => ($maxWidth ? '1200px' : '100%')};
	height: 100%;
	margin: 0 auto;
	position: relative;
	@media screen and (min-width: 1200px) {
		max-width: ${({ $maxWidth }) => ($maxWidth ? '85%' : '100%')};
	}
`;
export default BackgroundImg;
