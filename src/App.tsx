import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import CoffeePage from './pages/CoffeePage';
import NotFound from './pages/NotFound';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<>
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/coffee' element={<CoffeePage />} />
					<Route path='/:id' element={<Detail />} />
					<Route path='/*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

