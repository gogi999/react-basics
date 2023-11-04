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

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler} 
                />
                {/* <p>Data for years {filterInfoText} is hidden.</p> */}
                {expenses.map((expense) => (
                    <ExpenseItem 
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date}
                        key={expense.title} 
                    />
                ))}
            </Card>
        </div>
    );
}

export default Expenses;
