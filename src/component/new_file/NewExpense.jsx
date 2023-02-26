import React from 'react';
import ExpenseForm from './expense_form/ExpenseForm';
import './NewExpense.css'

const NewExpense =(props)=>
{ 

    const onSave=(value)=>{
        const newExpense ={
            ...value,
            id:Math.random().toString()
        }
        props.AddExpense(newExpense);

    }
    return ( 
            <div className="new-expense" >        
                
        <ExpenseForm 
        onSave={onSave}/>

            </div>         
            )
}

export default NewExpense;
