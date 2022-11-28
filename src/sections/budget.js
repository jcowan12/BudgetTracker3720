import React, { useContext, useState } from 'react';
import ViewBudget from './viewbudget.js';
import ChangeBudget from './changebudget.js';
import { AppContext } from '../context/AppContext.js';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = (value) => {
		dispatch({
			type: 'CHANGE_BUDGET',
			payload: value,
		});
		setIsEditing(false);
	};

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