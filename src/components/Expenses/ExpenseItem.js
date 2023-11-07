import './ExpenseItem.css';

import React from 'react';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem({ amount, date, title }) {
    // const [changeTitle, setChangeTitle] = useState(title);

    // const changeTitleHandler = () => {
    //     setChangeTitle('Updated');
    // }

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${amount}</div>
                </div>
                {/* <button onClick={changeTitleHandler}>
                    Change Title
                </button> */}
            </Card>
        </li>
    );
}

export default ExpenseItem;
