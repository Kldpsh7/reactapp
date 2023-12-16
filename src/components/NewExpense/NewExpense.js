import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props)=>{
    const newExpenseHandler = newExpenseData =>{
        const expenseData = {...newExpenseData,date:new Date(newExpenseData.date),id:Math.random()}
        props.onNewExpense(expenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onNewExpense={newExpenseHandler}/>
        </div>
    )
}

export default NewExpense;