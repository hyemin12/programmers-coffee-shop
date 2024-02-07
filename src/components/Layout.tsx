import React from 'react';
import styled from 'styled-components';
import NavComponents from './Nav';

const Layout = ({ children, $maxWidth = false }: { children: React.ReactNode; $maxWidth?: boolean }) => {
	const thisYear = new Date().getFullYear();

	return (
		<>
			<NavComponents />
			<Inner $maxWidth={$maxWidth}>{children}</Inner>
			<Footer>ⓒ {thisYear} starbuck Hyemin. All Rights Reserved. </Footer>
		</>
	);
};

const Inner = styled.div<{ $maxWidth: boolean }>`
	max-width: ${({ $maxWidth }) => ($maxWidth ? '1100px' : '100%')};
	min-height: calc(100vh - 145px);
	margin: 0 auto;
	padding: ${({ $maxWidth }) => ($maxWidth ? '3em 0' : 0)};
`;

const Footer = styled.footer`
	padding: 2em;
	background-color: #2c2a29;
	color: #999;
	text-align: center;
`;

export default Layout;
