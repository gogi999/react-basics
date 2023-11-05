import './Expenses.css';

import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

function Expenses({ expenses }) {
    const [filteredYear, setFilteredYear] = useState('2020');
    /* const [filterInfoText, setFilterInfoText] = useState('2019, 2021, & 2022');

    let filterInfoText = '2019, 2021 & 2022';

    if (filteredYear === '2019') {
        filterInfoText = '2020, 2021 & 2022';
    } else if (filteredYear === '2021') {
        filterInfoText = '2019, 2020 & 2022';
    } else {
        filterInfoText = '2019, 2020 & 2021';
    }
    */
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = expenses.filter((expense) => (
        expense.date.getFullYear().toString() === filteredYear
    ));

    let expensesContent = <p>No expenses found!</p>;

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem 
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date}
                key={expense.id} 
            />
        ));
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler} 
                />
                {/* <p>Data for years {filterInfoText} is hidden.</p> */}
                {expensesContent}
            </Card>
        </div>
    );
}

export default Expenses;
