import React from 'react';
import { Animated } from './AnimatedComponent.styles';

interface AnimatedComponentProps {
	children: React.ReactNode;
	direction: string;
	$topPosition: number;
	$delay?: number;
}

const AnimatedComponent = ({ children, direction, $topPosition, $delay = 0 }: AnimatedComponentProps) => {
	return (
		<Animated $topPosition={$topPosition} direction={direction} $delay={$delay}>
			{children}
		</Animated>
	);
};

export default AnimatedComponent;
