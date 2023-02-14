
import RouterComponent from './views/components/RouterComponent';
import './styles/Main.scss';
import SoftRingBackgroundEffect from './views/components/fx/SoftRingBackgroundEffect';
import FooterComponent from './views/components/FooterComponent';
import BackgroundScrollEffect from './views/components/fx/BackgroundScrollEffect';

function App() {

	return (
		<div className="container">
			<RouterComponent />
			<FooterComponent />
		</div>
	)
}

export default App;


