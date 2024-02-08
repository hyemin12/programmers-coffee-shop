import styled, { css } from 'styled-components';

const ColumnCenter = css`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
`;

export const MainBannerTextWrapper = styled.div`
	${ColumnCenter};
	left: 10%;
	.btn-group {
		gap: 10px;
		> button {
			width: 180px;
		}
	}
`;

export const TextWrapper = styled.div<{ element: string }>`
	${ColumnCenter};
	.btn-group {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		width: calc((200px * 2) + 10px);
		> button {
			flex-grow: 0;
			width: 200px;
			font-size: 0.9em;
		}
	}

	${({ element }) =>
		element === 'card'
			? css`
					color: #fff;
					right: 17%;
			  `
			: css`
					left: 12%;
			  `}
`;
