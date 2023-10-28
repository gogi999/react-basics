import './Expenses.css';

import React from 'react';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

function Expenses({ expenses }) {
    return (
        <Card className="expenses">
            {expenses.map((expense) => (
                <ExpenseItem 
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date}
                    key={expense.title} 
                />
            ))}
        </Card>
    );
}

export default Expenses;
