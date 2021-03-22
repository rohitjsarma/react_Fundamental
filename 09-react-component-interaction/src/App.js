import React from 'react';
import './App.css';
import ParentComponent from "./components/ParentComponent";
import ChildComponent from "./components/ChildComponent";
import ParentCard from "./components/ParentCard";

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <a href="/" className='navbar-brand'>React with Component Interaction</a>
        </nav>

       {/* <ParentComponent/>*/}

    <ParentCard/>
    </div>
  );
}

export default App;
