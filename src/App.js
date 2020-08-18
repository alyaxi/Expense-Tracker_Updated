import React from 'react';
import './App.css';
import { Header } from './Components/header';
import { Balance } from './Components/Balance'

function App() {
  return (
    <div>
     <Header />
     <div className="container">
       <Balance />

     </div>
    </div>
  );
}

export default App;
