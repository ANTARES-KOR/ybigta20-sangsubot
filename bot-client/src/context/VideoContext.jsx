import React, { useContext, useReducer } from 'react';

function reducer(state, action) {
	switch (action.type) {
		case 'RESET_MAD':
			return { src: '/assets/video/after_tasor.mp4', name: '테이저건' };
		case 'DELETE_VID':
			return null;
		default:
			throw new Error('Unhandled action type: ' + action.type);
	}
}

const VideoContext = React.createContext();
const VideoDispatchContext = React.createContext();

export default function VideoProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, null);
	return (
		<VideoContext.Provider value={state}>
			<VideoDispatchContext.Provider value={dispatch}>
				{children}
			</VideoDispatchContext.Provider>
		</VideoContext.Provider>
	);
}

export function useVideoContext() {
	const context = useContext(VideoContext);
	if (context === undefined) {
		throw new Error('useVideoContext must be used within a VideoProvider');
	}
	return context;
}

export const useVideoDispatchContext = () => {
	const context = useContext(VideoDispatchContext);
	if (!context) {
		throw new Error(
			'useVideoDispatchContext must be used within a VideoProvider'
		);
	}
	return context;
};
