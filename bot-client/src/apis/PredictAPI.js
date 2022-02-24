import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://3.38.106.209',
});

export const predict = async (text) => {
	console.log('precict', text);
	const response = instance.post('/predict', {
		text,
	});
	return response.data;
};
