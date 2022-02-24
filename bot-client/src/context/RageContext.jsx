import React, { useReducer } from 'react';

const DEFAULT_RAGE = 70;

function reducer(state, action) {
	switch (action.type) {
		case 'ADD_RAGE':
			return state + action.payload;
		case 'REMOVE_RAGE':
			return state - action.payload;
		case 'RESET_RAGE':
			return DEFAULT_RAGE;
		default:
			throw new Error('Unhandled action type: ' + action.type);
	}
}

const RageContext = React.createContext();
const RageDispatchContext = React.createContext();

export default function RageProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, DEFAULT_RAGE);

	return (
		<RageContext.Provider value={state}>
			<RageDispatchContext.Provider value={dispatch}>
				{children}
			</RageDispatchContext.Provider>
		</RageContext.Provider>
	);
}

export function useRageContext() {
	const context = React.useContext(RageContext);
	if (context === undefined) {
		throw new Error('useRageContext must be used within a RageProvider');
	}
	return context;
}

export function useRageDispatchContext() {
	const context = React.useContext(RageDispatchContext);
	if (!context) {
		throw new Error(
			'useRageDispatchContext must be used within a RageProvider'
		);
	}
	return context;
}
