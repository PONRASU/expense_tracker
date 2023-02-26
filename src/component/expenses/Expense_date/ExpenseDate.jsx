import React from 'react';
import './ExpenseDate.css';

const ExpenseDates = (props) => {
    const {date}=props;  
    const year = date.getFullYear();
    const month = date.toLocaleDateString('en-US',{month:'long'});
    const day = date.toLocaleDateString('en-US',{day:'2-digit'});
    

    return(
        <div className="expense-date">
            <div className="expexpense-date__month">
                {month}
            </div>
            <div className="expexpense-date__day">
                {day}
            </div>
            <div className="expexpense-date__year">
                {year}
            </div>
        
        </div>
    )
    
}

export default ExpenseDates;