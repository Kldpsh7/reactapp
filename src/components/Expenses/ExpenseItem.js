import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import { useState } from 'react';

const ExpenseItem = (props) => {

    const [title,setTitle] = useState(props.title);
    const [amount,setAmount] = useState(props.amount);
    
    const deleteItem = e=>{
        e.target.parentElement.remove()
    }

    const updateTitle = ()=>{
        setTitle('Updated');
    }

    const make100 = ()=>{
        setAmount(100)
    }

    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <ExpenseDetails title={title} amount={amount} place={props.place} />
            <button onClick={updateTitle}>Update Title</button>
            <button onClick={make100}>$100</button>
            <button onClick={deleteItem}>Delete</button>
        </div>
    );
}

export default ExpenseItem;