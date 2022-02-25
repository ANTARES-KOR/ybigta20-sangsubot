const sentimentMap = {
	1: 'sad',
	2: 'rage',
	3: 'grief',
	4: 'neutral',
	5: 'happy',
};

export default function getMaxSentiment(sentiment_data) {
	const { 1: sad, 2: rage, 3: grief, 4: neutral, 5: happy } = sentiment_data;
	const sentimentArr = [sad, rage, grief, neutral, happy];

	const max = Math.max(...sentimentArr);
	const max_index = sentimentArr.indexOf(max);

	return {
		sentiment: sentimentMap[max_index + 1],
		value: Math.floor(max * 20),
	};
}
