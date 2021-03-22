import React from 'react';
import './App.css';
import UserMessage from "./components/UserMessage";
import HobbySelector from "./components/HobbySelector";
import HobbySelectRadio from "./components/HobbySelectRadio";
import EmployeeList from "./components/EmployeeList";
import CustomerList from "./components/CustomerList";

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <a href="/" className='navbar-brand'>React with Conditional & List Rendering</a>
        </nav>

      {/*  <UserMessage/>*/}
      {/*<HobbySelector/>*/}
     {/* <HobbySelectRadio/>*/}
     {/*<EmployeeList/>*/}
     <CustomerList/>
    </div>
  );
}

export default App;
