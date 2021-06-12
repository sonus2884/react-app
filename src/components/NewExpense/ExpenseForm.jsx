
import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    // mutiple state for each change..

    // const [title, setTitle] = useState('');
    // const [amount, setAmount] = useState('');
    // const [date, setDate] = useState('');

    // Have one state for every update
    const [userInput, setUserInput] = useState({
        title: "",
        amount: '',
        date: ''
    });

    const [showFormcomp, setShowFormComp] = useState(false);

    const titleChangeHandler = (event) => {

        // we can use this, but this not right approach for user single state
        // setUserInput({
        //     ...userInput,
        //     title: event.target.value,
        // });

        // this right approach for use single state for multiple value.
        setUserInput((prevState) => {
            return { ...prevState, title: event.target.value }
        })
    }

    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, amount: event.target.value }
        });
    }

    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, date: event.target.value }
        });
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (userInput.date !== '') {
            userInput.date = new Date(userInput.date);
        }
        // console.log({ userInput: userInput });
        props.onSaveExpenseData(userInput);

        setUserInput({ title: '', amount: '', date: '' });
    }

    const showHideFormHandler = () => {
        setShowFormComp(true);
    }

    const hideFormHandler = () => {
        setShowFormComp(false);
    }

    if (showFormcomp === false) {
        return (
            <div className="new-expense__control">
                <button onClick={showHideFormHandler}> Add New Expense</button>
            </div>
        );
    }


    return (

        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type='text'
                        value={userInput.title}
                        onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01"
                        value={userInput.amount}
                        onChange={amountChangeHandler} />
                </div>

                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2023-12-31"
                        value={userInput.date}
                        onChange={dateChangeHandler} />
                </div>

            </div>

            <div className="new-expense__control">
                <button onClick={hideFormHandler}> Cancel</button>
                <button type='submit'> Add Expense</button>

            </div>
        </form>
    );
}

export default ExpenseForm;