import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://3.38.106.209',
});

export const predict = async (text) => {
	const response = await instance.post('/predict', {
		text,
	});
	return response.data;
};

export const sentiment = async (text) => {
	const response = await instance.post('/sentiment', { text });
	return response.data;
};
