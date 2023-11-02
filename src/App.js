import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      title:'Car Insurance',
      date:new Date(2023,10,1),
      amount:500,
      place:'Noida'
    },
    {
      title:'Hotel',
      date:new Date(2023,9,20),
      amount:55,
      place:'Greater Noida'
    },
    {
      title:'Food',
      date:new Date(2023,9,28),
      amount:25,
      place:'Dadri'
    },
    {
      title:'Water',
      date:new Date(2023,9,29),
      amount:2,
      place:'Delhi'
    }
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      {expenses.map(e=><ExpenseItem title={e.title} date={e.date} amount={e.amount} place={e.place}></ExpenseItem>)}
    </div>
  );
}

export default App;
