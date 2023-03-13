/** @format */

import { useState } from "react";
import { useDispatch } from "react-redux";
import tickImage from "../assets/images/double-tick.png";
import noteImage from "../assets/images/notes.png";
import plusImage from "../assets/images/plus.png";
import * as actionCreator from "../redux/todos/actionsCreator";
export default function Header() {
	const dispatch = useDispatch();
	const [inputValue, setInputValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue !== "") {
			dispatch(actionCreator.added(inputValue));
		} else {
			console.log(`value is empty`);
		}
		setInputValue("");
	};

	const handleAllComplete = () => {
		dispatch(actionCreator.allComplete());
	};
	const handleClearComplete = () => {
		dispatch(actionCreator.clearComplete());
	};
	return (
		<div>
			<form className='flex items-center bg-gray-100 px-4 py-4 rounded-md'>
				<img src={noteImage} className='w-6 h-6' alt='Add todo' />
				<input
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					type='text'
					placeholder='Type your todo'
					className='w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500'
				/>
				<button
					onClick={handleSubmit}
					type='submit'
					className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}></button>
			</form>

			<ul className='flex justify-between my-4 text-xs text-gray-500'>
				<li className='flex space-x-1 cursor-pointer' onClick={handleAllComplete}>
					<img className='w-4 h-4' src={tickImage} alt='Complete' />
					<span>Complete All Tasks</span>
				</li>
				<li className='cursor-pointer' onClick={handleClearComplete}>
					Clear completed
				</li>
			</ul>
		</div>
	);
}
