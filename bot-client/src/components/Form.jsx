import { useCallback, useState } from 'react';
import { useRageContext, useRageDispatchContext } from 'context/RageContext';
import useSubmitHandler from 'hooks/useHandleSubmit';

export default function Form() {
	const rage = useRageContext();

	return (
		<form>
			{rage <= 0 && <HappyForm />}
			{rage < 100 && rage > 0 && <NormalForm />}
			{rage >= 100 && <MadForm />}
		</form>
	);
}

const NormalForm = () => {
	const [value, setValue] = useState('');

	const submit = useSubmitHandler(value);

	return (
		<div className="flex flex-col gap-4">
			<input
				type="text"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder="할 말을 입력하세요.."
				className="h-12 px-2 w-full border-2 rounded-lg  border-violet-300 focus:outline-none focus:border-violet-500"
			/>
			<button
				onClick={async (e) => {
					await submit(e);
					setValue('');
				}}
				className="bg-violet-600 hover:bg-violet-700 focus:bg-violet-500 drop-shadow-lg rounded-lg h-12 w-full text-white text-md font-bold"
			>
				입력
			</button>
		</div>
	);
};

const HappyForm = () => {
	const dispatch = useRageDispatchContext();

	const handleClick = useCallback(() => {
		dispatch({ type: 'RESET_RAGE' });
	}, [dispatch]);

	return (
		<button
			onClick={handleClick}
			className="bg-pink-400 hover:bg-pink-500 focus:bg-pink-300 drop-shadow-lg rounded-lg h-12 w-full text-white text-md font-bold"
		>
			처음으로
		</button>
	);
};

const MadForm = () => {
	const dispatch = useRageDispatchContext();
	const handleClick = useCallback(() => {
		dispatch({ type: 'RESET_RAGE' });
		// TODO : 제압 영상 및 음원 효과
	}, [dispatch]);

	return (
		<button
			onClick={handleClick}
			className="bg-red-600 hover:bg-red-700 focus:bg-red-500 drop-shadow-lg rounded-lg h-12 w-full text-white text-md font-bold"
		>
			테이저건으로 제압하기
		</button>
	);
};
