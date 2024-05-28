import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, remaining, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const expenses = budget - remaining;
    const handleBudgetChange = (event) => {
        const value = event.target.value;
        if (value > 20000) {
            alert("Input exceeds maximum value!");
        } else if (value < expenses) {
            alert("Budget is less than spent amount!");
        } else {
            setNewBudget(value);
        }
    }
    return (
        <div className='alert alert-secondary'>
            <p>{expenses}</p>
            <span>Budget: {currency}{budget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} max={20000}></input>
        </div>
    );
};

export default Budget;
