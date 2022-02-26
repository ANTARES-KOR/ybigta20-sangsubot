import { useCallback, useState } from 'react';
import { useRageContext, useRageDispatchContext } from 'context/RageContext';
import useSubmitHandler from 'hooks/useHandleSubmit';
import { useVideoDispatchContext } from 'context/VideoContext';
import toast from 'react-hot-toast';

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
				maxLength={30}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder="할 말을 입력하세요.. (최대 40자)"
				className="h-12 px-2 w-full border-2 rounded-lg  border-violet-300 focus:outline-none focus:border-violet-500"
			/>
			<button
				onClick={async (e) => {
					await toast.promise(submit(e), {
						loading: '이해하는 중...',
						success: '이해완료!',
						error: '실패',
					});
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

	const handleClick = useCallback(
		(e) => {
			e.preventDefault();
			dispatch({ type: 'RESET_RAGE' });
		},
		[dispatch]
	);

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
	const vidDispatch = useVideoDispatchContext();
	const handleClick = useCallback(
		(e) => {
			e.preventDefault();
			vidDispatch({ type: 'RESET_MAD' });
			setTimeout(() => {
				vidDispatch({ type: 'DELETE_VID' });
				dispatch({ type: 'RESET_RAGE' });
			}, 5000);
		},
		[dispatch, vidDispatch]
	);

	return (
		<button
			onClick={handleClick}
			className="bg-red-600 hover:bg-red-700 focus:bg-red-500 drop-shadow-lg rounded-lg h-12 w-full text-white text-md font-bold"
		>
			테이저건으로 제압하기
		</button>
	);
};
