import useAudioByRageState from 'hooks/useAudioByRageState';
import useImageByRageState from 'hooks/useImageByRageState';

export default function Viewer() {
	const image = useImageByRageState();
	useAudioByRageState();

	return (
		<div className=" h-[300px] rounded-lg overflow-hidden drop-shadow-lg">
			<img className="w-full h-full" src={image.src} alt={image.name} />
		</div>
	);
}
