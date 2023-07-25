import { useState, useEffect, useRef } from 'react';
import { styled } from 'styled-components';

const AddItemStyles = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;
	justify-content: center;
	padding: 20px;
`;

const EditItemStyles = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;
	justify-content: center;
	
`;

const AddButtonStyles = styled.button`
	color: #0e65a3;
	background-color: white;
	padding: 0 10px;
	border-radius: 10px;
`;



export default function AddItemInput(props) {
	const [input, setInput] = useState(props.edit ? props.edit.value : '')

	const focusRef = useRef(null)

	useEffect(() => {
		focusRef.current.focus()
	})

	const handleChange = (e) => {
		setInput(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault();
		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input
		});
		setInput('')
	}

	return (
		<form onSubmit={handleSubmit}>
			{props.edit ? (<EditItemStyles>
				<input
					type='text'
					id='editItems'
					name='editItems'
					placeHolder=' Edit item'
					value={input}
					onChange={handleChange}
					ref={focusRef}
				></input>
				<AddButtonStyles type='submit'>Edit</AddButtonStyles>
			</EditItemStyles>) : (
				<AddItemStyles>
				<input
					type='text'
					id='addItems'
					name='addItems'
					placeHolder=' New item'
					value={input}
					onChange={handleChange}
					ref={focusRef}
				></input>
				<AddButtonStyles type='submit'>Add</AddButtonStyles>
			</AddItemStyles>
			)}
			
		</form>
	);
}
