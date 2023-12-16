import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

const ExpenseItem = (props) => {
    
    const clickHandler = e=>{
        e.target.parentElement.remove()
    }

    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <ExpenseDetails title={props.title} amount={props.amount} place={props.place} />
            <button onClick={clickHandler}>Delete</button>
        </div>
    );
}

export default ExpenseItem;