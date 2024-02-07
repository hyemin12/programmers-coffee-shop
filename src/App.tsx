import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Menus from './pages/Menus';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound/NotFound';
import Company from './pages/Company';

import './assets/css/bootstrap.min.css';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/coffee' element={<Menus />} />
					<Route path='/coffee/:id' element={<Detail />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/company' element={<Company />} />
					<Route path='/*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

