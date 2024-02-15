import React, { useEffect, useRef, useState } from 'react';

const IntersectionObserverComponent = ({ children }: { children: React.ReactNode }) => {
	const [isVisible, setIsVisible] = useState(false);
	const targetRef = useRef(null);

	useEffect(() => {
		const targetCopyRef = targetRef.current;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (!isVisible && entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{
				root: null,
				rootMargin: '0px',
				threshold: 0.5,
			}
		);
		if (targetCopyRef) {
			observer.observe(targetCopyRef);
		}

		return () => {
			if (targetCopyRef) {
				observer.unobserve(targetCopyRef);
			}
		};
	}, []);
	return (
		<div style={{ width: '100%', height: '100%' }} ref={targetRef}>
			{isVisible && children}
		</div>
	);
};

export default IntersectionObserverComponent;
