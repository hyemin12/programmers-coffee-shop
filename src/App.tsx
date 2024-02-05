import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import CoffeePage from './pages/CoffeePage';
import NotFound from './pages/NotFound';

import './assets/css/bootstrap.min.css';

function App() {
	return (
		<>
			<BrowserRouter basename={import.meta.env.BASE_URL}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/coffee' element={<CoffeePage />} />
					<Route path='/coffee/:id' element={<Detail />} />
					<Route path='/*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

