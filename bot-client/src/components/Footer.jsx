import { useRageDispatchContext } from 'context/RageContext';

export default function Footer() {
	const dispatch = useRageDispatchContext();

	return (
		<footer className="h-15 absolute bottom-0 flex w-full justify-start items-center p-4">
			<span className="text-gray-400">와이빅타 20기 신입기수 프로젝트 5조</span>
			<button
				onClick={() => {
					dispatch({ type: 'ADD_RAGE', payload: 10 });
				}}
			>
				+ 10
			</button>
			<button
				onClick={() => {
					dispatch({ type: 'REMOVE_RAGE', payload: 10 });
				}}
			>
				- 10
			</button>
		</footer>
	);
}
