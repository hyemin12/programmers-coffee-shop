import { Button } from 'react-bootstrap';
import styled, { css } from 'styled-components';

const MoreInfoButton = ({ color, marginTop }: { color: string; marginTop: number }) => {
	return (
		<CustomButton $color={color} $marginTop={marginTop}>
			<Button>자세히 보기</Button>
		</CustomButton>
	);
};

const CustomButton = styled.div<{ $color: string; $marginTop: number }>`
	button {
		${({ $color, $marginTop }) => css`
			margin-top: ${$marginTop}em;
			background-color: transparent;
			border: 1px solid ${$color};
			color: ${$color};
			&:hover {
				border-color: ${$color};
				background-color: ${$color};
				color: ${$color === '#fff' ? '#333' : '#fff'};
			}
		`}
	}
`;

export default MoreInfoButton;
