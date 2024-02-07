import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import Layout from '../../components/Layout';

const NotFound = () => {
	return (
		<Layout $maxWidth>
			<NotFoundContainer>
				<h1>Error 404!</h1>
				<h3>페이지를 찾을 수 없습니다.</h3>
				<p>원하시는 결과를 찾을 수 없습니다.</p>
				<p>요청하신 페이지가 사라졌거나, 잘못된 경로입니다.</p>
				<Button href='/' variant='success' size='lg'>
					메인으로 돌아가기
				</Button>
			</NotFoundContainer>
		</Layout>
	);
};

const NotFoundContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	h1,
	h3 {
		font-weight: 800;
		color: #1e3932;
	}
	p {
		margin-bottom: 0;
	}
	a {
		display: block;
		margin-top: 1em;
	}
`;

export default NotFound;
