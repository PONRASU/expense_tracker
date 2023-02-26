import React from "react"
import './Expenseitem.css';
import ExpenseDates from '../Expense_date/ExpenseDate';
const ExpenseItem=(props)=>{
 let { title,date=new Date(),amount = 0}=props;
//const [title,setTitle]=useState(props.title);
// const[date,setDate]=useState(props.date);
// const[amount,setAmount]=useState(props.amount);



// function onclickchange(event)
// {
//     setTitle("updated");
//     setAmount(0);
//     setDate(new Date());
    
//     console.log(title);
    
// }
    return(
        <div className="expense-item">
            <div >
                <ExpenseDates date={date} /> 
            </div>
            <div className="expense-item__description">
                <h2> {title}</h2>   
                <div className="expense-item__price"> ${amount}</div>
            </div>
            {/* <button className="expense-item__price" onClick={onclickchange}>change</button> */}
        </div>
    );
}

export default ExpenseItem;