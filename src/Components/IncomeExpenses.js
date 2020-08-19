import React,{ useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';


export const IncomeExpenses = () => {
    const { transaction } = useContext(GlobalContext)
    const amount = transaction.map(transaction => transaction.amount)

    const income = amount.filter(item => item > 0).reduce((acc, item) => acc += item).toFixed(2)
    const expense = amount.filter(item => item < 0).reduce((acc, item) => acc += item) * 1

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
    <p className="money plus">{income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">{expense}</p>
            </div>
        </div>
    )
}
