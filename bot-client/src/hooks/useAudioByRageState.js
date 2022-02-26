import { useRageContext } from 'context/RageContext';
import { useEffect, useMemo } from 'react';

const CountingStars2 = new Audio('/assets/audio/counting_stars_2.mp3');

export default function useAudioByRageState() {
	const rage = useRageContext();

	const isMaxHappyStatus = useMemo(() => rage <= 0, [rage]);

	useEffect(() => {
		if (isMaxHappyStatus) {
			CountingStars2.play();
		}
	}, [isMaxHappyStatus]);
}
