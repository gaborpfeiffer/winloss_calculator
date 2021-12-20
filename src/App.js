import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppNavigation from './components/AppNavigation'
import CalculatorPage from './pages/CalculatorPage'
import StrategiesPage from './pages/StrategiesPage'
import { AppState } from './AppContext'

function App() {
	return (
		<div className="App">
			<div className="AppContent">
				<Container>
					<BrowserRouter>
						<AppState>
							<AppNavigation />
							<Routes>
								<Route path="/" element={<CalculatorPage />} />
								<Route path="strategies" element={<StrategiesPage />} />
							</Routes>
						</AppState>
					</BrowserRouter>
				</Container>
			</div>
		</div>
	);
}

export default App
