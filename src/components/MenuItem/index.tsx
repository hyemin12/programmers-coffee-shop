import { Link, useLocation } from 'react-router-dom';
import { MenuProps } from '../../store/menu';
import { MenuItemStyle } from './MenuItem.styles';

const MenuItem = ({ image, name, id }: MenuProps) => {
	const { pathname } = useLocation();
	return (
		<MenuItemStyle $isHomeScreen={pathname === '/'} xs={12} sm={6} md={4}>
			<Link to={`/coffee/${id}`}>
				<img src={image} alt={name} />
			</Link>

			<h4>{name}</h4>
		</MenuItemStyle>
	);
};

export default MenuItem;
