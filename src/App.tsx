
import RouterComponent from './views/components/RouterComponent';
import './styles/Main.scss';
import SoftRingBackgroundEffect from './views/components/fx/SoftRingBackgroundEffect';
import FooterComponent from './views/components/FooterComponent';

function App() {

	return (
		<div className="container">
			<SoftRingBackgroundEffect />
			<RouterComponent />
			<FooterComponent />
		</div>
	)
}

export default App;


