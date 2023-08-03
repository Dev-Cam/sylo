// import { useState } from 'react';
// import { RiCloseCircleLine } from 'react-icons/ri';
// import { TiEdit } from 'react-icons/ti';
import '../List-styles/item.css';
// import AddItemInputForm from './AddItemInputForm';

export default function Item({ listItem }) {
	const { title } = listItem;
	// const [edit, setEdit] = useState({
	// 	id: null,
	// 	value: '',
	// });

	// const submitUpdate = (value) => {
	// 	editItem(edit.id, value);
	// 	setEdit({
	// 		id: null,
	// 		value: '',
	// 	});
	// };

	// if (edit.id) {
	// 	return <AddItemInputForm edit={edit} onSubmit={submitUpdate} />;
	// }

	return (
		<div className='shopping-item'>
			<div>{title}</div>

			{/* <div className='shopping-list-edit-remove'>
				<RiCloseCircleLine size={21} onClick={() => removeItem(item.id)} />
				<TiEdit
					size={21}
					onClick={() => setEdit({ id: item.id, value: item.text })}
				/>
			</div> */}
		</div>
	);
}
