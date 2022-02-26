import Footer from 'components/Footer';
import Header from 'components/Header';
import Main from 'components/Main';
import RageProvider from 'context/RageContext';
import VideoProvider from 'context/VideoContext';
import { isMobile } from 'react-device-detect';
import { Toaster } from 'react-hot-toast';

function App() {
	return (
		<RageProvider>
			<VideoProvider>
				<Toaster />
				<div
					className={`container overflow-hidden bg-white min-w-sm 
				max-w-md my-auto mx-auto max-h-[900px] min-h-[700px] drop-shadow-2xl h-screen 
				${isMobile ? '' : 'rounded-2xl'}`}
				>
					<Header />
					<Main />
					<Footer />
				</div>
			</VideoProvider>
		</RageProvider>
	);
}

export default App;
