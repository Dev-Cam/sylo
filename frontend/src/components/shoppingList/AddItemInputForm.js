import { useState, useEffect, useRef } from 'react';

export default function AddItemInput(props) {
	const [input, setInput] = useState(props.edit ? props.edit.value : '');

	const focusRef = useRef(null);

	useEffect(() => {
		focusRef.current.focus();
	});

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input,
		});
		setInput('');
	};

	return (
		<form onSubmit={handleSubmit}>
			{props.edit ? (
				<div className='edit-item-styles'>
					<input
						type='text'
						id='editItems'
						name='editItems'
						placeHolder=' Edit item'
						value={input}
						onChange={handleChange}
						ref={focusRef}
					></input>
					<button type='submit'>Edit</button>
				</div>
			) : (
				<div className='add-item-styles'>
					<input
						type='text'
						id='addItems'
						name='addItems'
						placeHolder=' New item'
						value={input}
						onChange={handleChange}
						ref={focusRef}
					></input>
					<button type='submit'>Add</button>
				</div>
			)}
		</form>
	);
}
