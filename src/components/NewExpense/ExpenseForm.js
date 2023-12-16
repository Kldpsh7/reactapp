import { useState } from 'react';
import React from "react";
import './ExpenseForm.css'

const ExpenseForm = ()=>{
    // const [enteredTitle,setTitle] = useState('');
    // const [enteredAmount,setAmount] = useState('');
    // const [enteredDate,setDate] = useState('');
    // const [enteredPlace,setPlace] = useState('');

    const [userInput,setInput] = useState({title:"",amount:"",date:"",place:""})

    const titleChangeHandler = e=>{
        //setTitle(e.target.value);
        setInput(prevState=>{
            return {...prevState,title:e.target.value}
        })
    }
    const amountChangeHandler = e=>{
        // setAmount(e.target.value);
        setInput(prevState=>{
            return {...prevState,amount:e.target.value}
        })
    }
    const dateChangeHandler = e=>{
        // setDate(e.target.value);
        setInput(prevState=>{
            return {...prevState,date:e.target.value}
        })
    }
    const placeChangeHandler = e=>{
        // setPlace(e.target.value);
        setInput(prevState=>{
            return {...prevState,place:e.target.value}
        })
    }

    const formSubmit = e=>{
        e.preventDefault()
        console.log(userInput)
    }

    return (
        <form onSubmit={formSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="Date" onChange={dateChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Place</label>
                    <input type="text" onChange={placeChangeHandler}/>
                </div>
                <div className="new-expense__actions">
                    <button type="submit" >Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;