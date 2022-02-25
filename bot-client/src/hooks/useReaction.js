import { useRageDispatchContext } from 'context/RageContext';
import { useCallback } from 'react';

const banmalAudio1 = new Audio('/assets/audio/banmal1.mp3');
const banmalAudio2 = new Audio('/assets/audio/banmal2.mp3');

export default function useReaction() {
	const dispatch = useRageDispatchContext();

	const showReaction = useCallback(
		(maxSentiment, isBanmal) => {
			const { sentiment, value } = maxSentiment;

			console.log(sentiment, value, isBanmal);

			if (isBanmal) {
				if (value % 2 === 0) {
					banmalAudio1.play();
				} else {
					banmalAudio2.play();
				}
			}

			switch (sentiment) {
				case 'sad':
					break;
				case 'rage':
					dispatch({ type: 'ADD_RAGE', payload: isBanmal ? value * 2 : value });
					break;
				case 'grief':
					break;
				case 'neutral':
					dispatch({
						type: 'REMOVE_RAGE',
						payload: isBanmal ? Math.floor(value / 2) : value,
					});
					break;
				case 'happy':
					dispatch({
						type: 'REMOVE_RAGE',
						payload: isBanmal ? Math.floor(value / 2) : value,
					});
					break;
				default:
					break;
			}
		},
		[dispatch]
	);

	return showReaction;
}
