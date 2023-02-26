import React from 'react';
import'./Expense.css'
import ExpenseItem from './expense_item/Expenseitem';
const Expenses=(props)=>
{
    const expenses=props.expenses;

    return(
        <div className="expenses">
        {
            expenses.map((expense)=>(
            <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
            ))
        }      
        </div>
    )
        
}



export default Expenses;