import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
 from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// 왼쪽에서 오른쪽으로 날아오는 애니메이션
const flyInFromRight = keyframes`
from {
  transform: translateX(100%);
}
to {
  transform: translateX(0);
}
`;

// 오른쪽에서 왼쪽으로 날아오는 애니메이션
const flyInFromLeft = keyframes`
from {
  transform: translateX(-100%);
}
to {
  transform: translateX(0);
}
`;

export const Animated = styled.div<{ direction: string; $topPosition: number; $delay: number }>`
	animation: ${fadeIn} 1s ease-in-out,
		${({ direction }) => (direction === 'right' ? flyInFromLeft : flyInFromRight)} 1s ease-in-out;
	animation-delay: ${({ $delay }) => $delay}s;
	animation-fill-mode: both;
	position: relative;
	top: ${({ $topPosition }) => `${$topPosition}%`};
	opacity: 0;
`;
