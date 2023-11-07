import './Expenses.css';

import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

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

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler} 
                />
                {/* <p>Data for years {filterInfoText} is hidden.</p> */}
                <ExpensesList expenses={filteredExpenses} /> 
            </Card>
        </div>
    );
}

export default Expenses;
