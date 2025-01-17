import Blobs from './components/Blobs';
import StaticOverlay from './components/StaticOverlay';
import SearchBar from './components/SearchBar';

// TODO: Make the background effect go from top-bottom instead of left-right for smaller screens (mobile)

function App() {
	const blobColors = ['#B33630', '#AD4C45', '#AA736E', '#6D9293', '#127277'];

	return (
		<div className="h-screen w-screen -z-10 flex justify-center items-center bg-gradient-to-r from-[#5c1c19] via-black to-[#062e30]">
			<Blobs count={5} colors={blobColors} />
			<StaticOverlay />
			<SearchBar />
		</div>
	)
}

export default App;
