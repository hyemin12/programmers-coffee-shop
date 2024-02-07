import { Row } from 'react-bootstrap';
import styled from 'styled-components';

export const CategoryTitleStyle = styled(Row)`
	flex-wrap: nowrap;
	align-items: center;
	background-color: #f4f4f2;
	padding: 20px;
	> * {
		width: auto;
		padding-left: 0;
		padding-right: 0;
		margin-top: 0;
	}
	h4 {
		margin-bottom: 0;
	}
	img {
		margin-left: 1em;
		width: 60px;
	}
	p {
		margin-bottom: 0;
		color: #444;
	}
`;
