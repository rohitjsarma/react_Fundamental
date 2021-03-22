import React from 'react';
import './App.css';
import ChangeUserName from "./components/ChangeUserName";
import ChangeSelectBox from "./components/ChangeSelectBox";
import SMSApplication from "./components/SMSApplication";
import ShowPassword from "./components/ShowPassword";
import LoginForm from "./components/LoginForm";
import Registration from "./components/Registration";
import RegistrationNew from "./components/RegistrationNew";

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <a href="/" className='navbar-brand'>React with Forms Binding</a>
        </nav>

        <ChangeUserName/>
       <ChangeSelectBox/>
       <SMSApplication/>
        <ShowPassword/>
       <LoginForm/>
       <Registration/>
      <RegistrationNew/>
    </div>
  );
}

export default App;
