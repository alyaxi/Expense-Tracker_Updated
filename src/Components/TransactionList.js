import React,{ useContext } from 'react'
import {GlobalContext} from '../Context/GlobalState';
import { TransactionComponentList } from './TransactionComponentList';

export const TransactionList = () => {
    const { transaction } = useContext(GlobalContext)
    console.log(transaction);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transaction.map(transaction =>(<TransactionComponentList  key ={transaction.id} transaction={transaction} />))}
                
                
                </ul> 
        </>
    )
}
