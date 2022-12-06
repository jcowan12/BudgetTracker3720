import React, { useState } from 'react';

const ChangeBudget = (props) => {
	// need current value and value we want
	const [value, setValue] = useState(props.budget);
	
	// outlines input for new value, button for saving
	// pretty simple due to context api
	return (
		<>
			<input
				required='required'
				type='number'
				class='form-control mr-3'
				id='name'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
			<button
				type='button'
				class='btn btn-dark'
				onClick={() => props.handleSaveClick(value)}
			>
				Save
			</button>
		</>
	);
};

export default ChangeBudget;