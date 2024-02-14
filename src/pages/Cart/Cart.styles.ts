import styled from 'styled-components';

export const EmptyCart = styled.p`
	padding-top: 3em;
`;

export const CartList = styled.ul`
	border-bottom: 1px solid #ddd;
`;
export const OrderButton = styled.div`
	width: 100%;
	button {
		display: block;
		margin: 0 auto;
	}
`;
export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	button {
		font-size: 1rem;
		background-color: transparent !important;
		border: none !important;
		color: #555;
		padding: 0;
		&:hover {
			background-color: transparent;
			border: none;
			color: #555;
		}
		&:active {
			background-color: transparent;
			border: none;
			color: #555 !important;
		}
	}
	.delete_button_group {
		button {
			margin-right: 1em;
		}
		button:first-child {
			color: #198754;
			font-weight: bold;
		}
		button:last-child {
			margin-left: 1em;
			margin-right: 0;
			position: relative;
			&::before {
				content: '';
				width: 2px;
				height: 12px;
				background-color: #777;
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				left: -1em;
			}
		}
	}
`;
