import React, { useContext, useState } from 'react';
import ViewBudget from './viewbudget.js';
import ChangeBudget from './changebudget.js';
import { AppContext } from '../context/AppContext.js';

const Budget = () => {

	// going to be sending a budget and dispatch to context
    const { budget, dispatch } = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false);

	// for edit button on budget
    const handleEditClick = () => {
		setIsEditing(true);
	};

	// when saved, send dispatch to context, update isEditing var.
	const handleSaveClick = (value) => {
		dispatch({
			type: 'CHANGE_BUDGET',
			payload: value,
		});
		setIsEditing(false);
	};

	// able to swap between changing budget and viewing budget scenes
    return (
        <div class='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
			{isEditing ? (
				<ChangeBudget handleSaveClick={handleSaveClick} budget={budget} />
			) : (
				<ViewBudget handleEditClick={handleEditClick} budget={budget} />
			)}
		</div>
    );
};

export default Budget;