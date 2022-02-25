import { predict, sentiment } from 'apis/PredictAPI';
import { useCallback } from 'react';
import checkBanmal from 'utils/checkBanmal';
import getMaxSentiment from 'utils/getMaxSentiment';
import useReaction from './useReaction';

// sentiment : 1~5 : 걱정 분노 슬픔 평온 행복

export default function useSubmitHandler(value) {
	const showReaction = useReaction();

	const handleClick = useCallback(
		async (e) => {
			e.preventDefault();
			try {
				// 존댓말 카운트
				const { cnt: honorific_cnt } = await predict(value);
				const { score: sentiment_data } = await sentiment(value);

				const maxSentiment = getMaxSentiment(sentiment_data);
				const isBanmal = checkBanmal(honorific_cnt);

				showReaction(maxSentiment, isBanmal);
			} catch (e) {
				console.error(e);
			}
		},
		[showReaction, value]
	);

	return handleClick;
}
