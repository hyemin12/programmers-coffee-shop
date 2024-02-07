import styled from 'styled-components';

export const ItemContainer = styled.li`
	list-style: none;
	form {
		display: flex;
		align-items: center;
		gap: 1.5em;
		padding: 1em 0;
		img {
			width: 150px;
			height: 150px;
			border-radius: 50%;
		}
		p {
			margin-bottom: 0;
		}
	}
`;
export const InfoWrapper = styled.div`
	flex: 2;
`;
export const QuantityAndTotalPrice = styled.div`
	flex: 2;
	display: flex;
	justify-content: space-between;
	> div {
		width: 100%;
		p {
			text-align: center;
		}
	}
`;
export const QuantityWrapper = styled.div`
	display: flex;
	gap: 1.5em;
	font-size: 1.2em;

	button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 25px;
		height: 25px;
		padding: 0;
		&:disabled {
			opacity: 0.5;
		}
	}
`;
export const CheckboxContainer = styled.div`
	input {
		display: none;
	}
	label {
		width: 24px;
		height: 24px;
		border: 1px solid #198754;
		border-radius: var(--bs-border-radius);
		overflow: hidden;
	}

	span {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #198754;
		color: #fff;
		cursor: pointer;
	}
`;
