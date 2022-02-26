import { useVideoContext } from 'context/VideoContext';
import useAudioByRageState from 'hooks/useAudioByRageState';
import useContentByRageState from 'hooks/useContentByRageState';

export default function Viewer() {
	const content = useContentByRageState();
	const resetVideo = useVideoContext();
	useAudioByRageState();

	if (!!resetVideo) {
		return (
			<div className=" h-[300px] rounded-lg overflow-hidden drop-shadow-lg">
				<video className="w-full h-full" src={resetVideo.src} autoPlay />
			</div>
		);
	}

	return (
		<div className=" h-[300px] rounded-lg overflow-hidden drop-shadow-lg">
			{content.type === 'img' && (
				<img className="w-full h-full" src={content.src} alt={content.name} />
			)}
			{content.type === 'vid' && (
				<video
					className="w-full h-full"
					src={content.src}
					alt={content.name}
					autoPlay
					loop={content.loop}
					muted={content.muted}
				/>
			)}
		</div>
	);
}
