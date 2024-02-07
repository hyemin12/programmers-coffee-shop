import styled from 'styled-components';
import { Col } from 'react-bootstrap';

export const CannotFind = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	h3 {
		margin-bottom: 1em;
	}
`;
export const CoffeeImgWrapper = styled(Col)`
	max-width: 400px;
	img {
		display: block;
		width: 100%;
		object-fit: cover;
	}
`;
export const NameWrapper = styled.div`
	border-bottom: 2px solid #333;
	h3 {
		font-weight: bold;
		margin-bottom: 0;
	}
	p {
		color: #666;
	}
`;
export const Description = styled.p`
	padding: 1em 0;
`;
export const PriceWrapper = styled.ul`
	display: flex;
	justify-content: space-between;
	margin: 0;
	margin-bottom: 1em;
	padding: 0.5em 0;
	border-top: 1px solid #ddd;

	li {
		list-style: none;
		width: 100%;
		text-align: center;
		&:first-child {
			border-right: 1px dotted #ddd;
		}
		&:last-child {
			border-left: 1px dotted #ddd;
		}
		p {
			margin-bottom: 0;
		}
	}
`;
