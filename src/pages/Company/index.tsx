import labImg from '../../assets/images/lab.jpg';
import Layout from '../../components/Layout';
import { LabImgStyle, MainImgStyle, PointFont, RowContainer } from './Company.styles';

const Company = () => {
	return (
		<Layout $maxWidth>
			<MainImgStyle />

			<PointFont>“커피 이상의 특별한 경험을 소개합니다.”</PointFont>
			<p>
				세계인들의 생활 속에 스며들어 전 세계의 커피 문화를 선도하고 있는 스타벅스가 일상을 풍요롭게 하는 제3의
				공간으로서
				<br /> 국내에서도 지역사회 속에서 고객 과 함께하며 새로운 커피문화를 정착시키고 있습니다.
			</p>
			<RowContainer>
				<LabImgStyle>
					<img src={labImg} alt='회사 이미지' />
				</LabImgStyle>

				<PointFont>
					스타벅스 프로그래머스는 <br />
					지역사회 속에서 일상을 풍요롭게 하는
					<br />
					특별한 스타벅스 경험을 전달하면서
					<br /> 업계를 선도하는 기업으로 성장해 오고 있습니다.
				</PointFont>
			</RowContainer>
		</Layout>
	);
};
export default Company;
