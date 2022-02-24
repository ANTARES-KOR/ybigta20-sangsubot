import { useRageContext } from 'context/RageContext';

const imageList = [
	{
		name: '카운팅스타',
		src: '/assets/img/카운팅스타.gif',
	},
	{
		name: '소노',
		src: '/assets/img/소노.png',
	},
	{
		name: '중노',
		src: '/assets/img/중노.png',
	},
	{
		name: '대노',
		src: '/assets/img/대노.png',
	},
	{
		name: '극대노',
		src: '/assets/img/극대노.png',
	},
	{
		name: '니머라카노',
		src: '/assets/img/니머라카노.gif',
	},
];

export default function useImageByRageState() {
	const rage = useRageContext();
	if (rage <= 0) {
		return imageList[0];
	} else if (rage < 20) {
		return imageList[1];
	} else if (rage < 40) {
		return imageList[2];
	} else if (rage < 60) {
		return imageList[3];
	} else if (rage < 80) {
		return imageList[4];
	} else {
		return imageList[5];
	}
}
