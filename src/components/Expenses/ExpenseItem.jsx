import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState("Hello");

    const clickHander = () => {
        console.log("clicked!");
        setTitle('updated!');
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2> {title}</h2>
                <div className="expense-item__price "> Amount</div>
            </div>
            <button onClick={clickHander}> Change Title</button>
        </Card>
    );
}

export default ExpenseItem;