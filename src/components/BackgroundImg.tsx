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
			{children}
		</Background>
	);
};
const Background = styled.div<{ $bgImg: string; $height: string }>`
	width: 100%;
	height: ${({ $height }) => $height};
	background-image: url(${({ $bgImg }) => $bgImg});
	background-position: center;
	background-size: cover;
	position: relative;
`;
export default BackgroundImg;
