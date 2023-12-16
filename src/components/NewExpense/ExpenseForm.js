import React from "react";
import './ExpenseForm.css'

const ExpenseForm = ()=>{
    const changeHandler = e=>{
        console.log(e.target.value)
    }
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={changeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" onChange={changeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="Date" onChange={changeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Place</label>
                    <input type="text" onChange={changeHandler}/>
                </div>
                <div className="new-expense__actions">
                    <button type="submit" >Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;