
import RouterComponent from './views/components/RouterComponent';
import FooterComponent from './views/components/FooterComponent';
import PageTransitionComponent from './views/components/fx/PageTransitionComponent';

import './styles/GlobalFonts.css'
import './styles/Main.scss';


function App() {

	return (
		<>
		<RouterComponent />
		<FooterComponent />
		<PageTransitionComponent />
		</>
	)
}

export default App;


