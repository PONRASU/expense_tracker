import React from 'react';
import'./ExpenseForm.css';  

const ExpenseForm=(props)=>
{
    const[Etitle,setTitle]=React.useState('');
    const[Eamount,setAmount]=React.useState('');
    const[Edate,setDate]=React.useState('');

    const OntitleChange=(event)=>setTitle(event.target.value);
    const OnamountChange=(event)=>setAmount(event.target.value);
    const OndateChange=(event)=>setDate(event.target.value);
    const OnExpenseSubmit=(event)=>
    {
            event.preventDefault();
            const new_expense={
                title:Etitle,
                amount:Eamount,
                date:new Date(Edate)
            
            }
            props.onSave(new_expense);
            // console.log('submit');
            
    }
    return(
        <div>
            <form onSubmit={OnExpenseSubmit}>
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label htmlFor="title">TITLE</label>
                            <input type="text" name="title" id="title" onChange={OntitleChange} value={Etitle} />
                        </div>
                        <div className="new-expense__control">
                            <label htmlFor="amount">Amount</label>
                            <input type="number" name="amount"id="amount" min="0" onChange={OnamountChange} value={Eamount}/>
                        </div>
                   
                    
                    <div className="new-expense__control">
                        <label htmlFor="date">Date</label>
                        <input type="date" name="date" id="date" onChange={OndateChange} value={Edate} />
                    </div>
                    </div>
                    <div className="new-expense__actions">
                        <button>cancel</button>
                        <button type="submit">ADD</button>
                    </div>
                </form>
        </div>
    )
}


export default ExpenseForm;