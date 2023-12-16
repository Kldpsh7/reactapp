import { useState } from 'react';
import React from "react";
import './ExpenseForm.css'

const ExpenseForm = (props)=>{
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
        e.preventDefault();
        props.onNewExpense(userInput);
        setInput(prevState=>{
            return({title:'',amount:'',date:'',place:''})
        });
        e.target.firstElementChild.className='new-expense__controls hide';
        e.target.lastElementChild.firstElementChild.className='';
    }

    const cancelExpense = e=>{
        e.target.parentElement.parentElement.className='new-expense__controls hide';
        e.target.parentElement.parentElement.parentElement.lastElementChild.firstElementChild.className='';
    }

    const showFrom = e =>{
        e.target.parentElement.className='hide';
        e.target.parentElement.parentElement.parentElement.firstElementChild.className='new-expense__controls';
    }

    return (
        <form onSubmit={formSubmit}>
            <div className="new-expense__controls hide">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={userInput.title}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" onChange={amountChangeHandler} value={userInput.amount}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="Date" onChange={dateChangeHandler} value={userInput.date}/>
                </div>
                <div className="new-expense__control">
                    <label>Place</label>
                    <input type="text" onChange={placeChangeHandler} value={userInput.place}/>
                </div>
                <div className="new-expense__actions">
                    <button type="submit" >Add Expense</button>
                    <button type='button' onClick={cancelExpense}>Cancel</button>
                </div>
            </div>

            <div>
                <div>
                    <button type='button' onClick={showFrom}>Add New Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;