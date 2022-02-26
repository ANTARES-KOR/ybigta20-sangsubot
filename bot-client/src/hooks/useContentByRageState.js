import { useRageContext } from 'context/RageContext';

const contentList = [
	{
		type: 'img',
		name: '카운팅스타',
		src: '/assets/img/카운팅스타.gif',
	},
	{
		type: 'vid',
		name: '댄스',
		src: '/assets/video/happy_dance.mp4',
		muted: true,
	},
	{
		type: 'img',
		name: '중노',
		src: '/assets/img/중노.png',
	},
	{
		type: 'img',
		name: '대노',
		src: '/assets/img/대노.png',
	},
	{
		type: 'img',
		name: '극대노',
		src: '/assets/img/극대노.png',
	},
	{
		type: 'img',
		name: '니머라카노',
		src: '/assets/img/니머라카노.gif',
	},
	{
		type: 'vid',
		name: '테이저건맞기전',
		src: '/assets/video/before_tasor.mp4',
		loop: true,
	},
];

export default function useContentByRageState() {
	const rage = useRageContext();
	if (rage <= 0) {
		return contentList[0];
	} else if (rage < 20) {
		return contentList[1];
	} else if (rage < 40) {
		return contentList[2];
	} else if (rage < 60) {
		return contentList[3];
	} else if (rage < 80) {
		return contentList[4];
	} else if (rage < 100) {
		return contentList[5];
	} else {
		return contentList[6];
	}
}
