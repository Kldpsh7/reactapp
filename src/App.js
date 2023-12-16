import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
import ExpensesFilter from "./components/Expenses/ExpenseFilter";

const App = () => {
  const [expenses,updateExpenses] = useState([
    {
      id:1,
      title:'Car Insurance',
      date:new Date(2023,10,1),
      amount:500,
      place:'Noida'
    },
    {
      id:2,
      title:'Hotel',
      date:new Date(2023,9,20),
      amount:55,
      place:'Greater Noida'
    },
    {
      id:3,
      title:'Food',
      date:new Date(2023,9,28),
      amount:25,
      place:'Dadri'
    },
    {
      id:4,
      title:'Water',
      date:new Date(2023,9,29),
      amount:2,
      place:'Delhi'
    }
  ]);

  const newExpenseHandler = expenseData=>{
      updateExpenses(prevData=>{
        return ([expenseData,...prevData])
      })
  }

  const [filteredYear, setFilteredYear] = useState('2023')
  const filterChangeHandler = selectedYear=>{
    setFilteredYear(selectedYear);
  }

  return (
    <div>
      <NewExpense onNewExpense={newExpenseHandler}/>
      <h2>Let's get started!</h2>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {expenses.map(e=>e.date.getFullYear().toString()===filteredYear && <ExpenseItem key={e.id} title={e.title} date={e.date} amount={e.amount} place={e.place}/>)}
      {(expenses.filter(exp=>exp.date.getFullYear().toString()===filteredYear)).length===0 && <h2>No Expenses to Show for Selected Year</h2>}
      {(expenses.filter(exp=>exp.date.getFullYear().toString()===filteredYear)).length===1 && <h2>Only 1 Expense. Add More  </h2>}
    </div>
  );
}

export default App;
