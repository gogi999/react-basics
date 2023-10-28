import './ExpenseItem.css';

import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem({ amount, date, title }) {
    const [changedTitle, setChangedTitle] = useState(title);

    const changeTitleHandler = () => {
        setChangedTitle('Updated');
        console.log(changedTitle);
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{changedTitle}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            <button onClick={changeTitleHandler}>
                Change Title
            </button>
        </Card>
    );
}

export default ExpenseItem;
