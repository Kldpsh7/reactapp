import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props)=>{
    const [isEditing,setIsEditing] = useState(false);

    const newExpenseHandler = newExpenseData =>{
        const expenseData = {...newExpenseData,date:new Date(newExpenseData.date),id:Math.random()}
        props.onNewExpense(expenseData);
    }

    const isEditingHandler = ()=>{
        setIsEditing(true)
    }

    const endEditing = ()=>{
        setIsEditing(false)
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={isEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onNewExpense={newExpenseHandler} onCancel={endEditing}/>}
        </div>
    )
}

export default NewExpense;