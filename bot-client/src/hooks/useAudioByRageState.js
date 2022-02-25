import { useRageContext } from 'context/RageContext';
import { useEffect, useMemo } from 'react';

const CountingStars1 = new Audio('/assets/audio/counting_stars_1.mp3');
const CountingStars2 = new Audio('/assets/audio/counting_stars_2.mp3');

export default function useAudioByRageState() {
	const rage = useRageContext();

	const isHappyStatus = useMemo(() => {
		if (rage > 0 && rage <= 20) {
			return true;
		}
		return false;
	}, [rage]);
	const isMaxHappyStatus = useMemo(() => rage <= 0, [rage]);

	useEffect(() => {
		if (isHappyStatus) {
			CountingStars1.play();
		} else if (isMaxHappyStatus) {
			CountingStars2.play();
		}
	}, [isHappyStatus, isMaxHappyStatus]);
}
