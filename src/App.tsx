import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Menu from './pages/Menu';
import NotFound from './pages/NotFound';
import Company from './pages/Company';

import './assets/css/bootstrap.min.css';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/coffee' element={<Menu />} />
					<Route path='/coffee/:id' element={<Detail />} />
					<Route path='/company' element={<Company />} />
					<Route path='/*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

