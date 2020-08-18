import React from 'react';
import './App.css';
import { Header } from './Components/header';
import { Balance } from './Components/Balance';
import { IncomeExpenses } from './Components/IncomeExpenses';
import { TransactionList } from './Components/TransactionList';
import { Transaction } from './Components/Transaction';

function App() {
  
  return (
    <div>
     <Header />
     <div className="container">
       <Balance />
       <IncomeExpenses />
       <TransactionList />
       <Transaction />

     </div>
    </div>
  );
}

export default App;
