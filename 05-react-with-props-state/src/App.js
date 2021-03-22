import React from 'react';
import './App.css';
import WishMessage from "./components/WishMessage";
import WishCard from "./components/WishCard";
import StudentCard from "./components/StudentCard";

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <a href="/" className='navbar-brand'>React with Props & State</a>
        </nav>

        {/* Functional components */}
        {/*<WishMessage msg="Good Morning"/>
        <WishMessage msg="Good Afternoon"/>
        <WishMessage msg="Good Evening"/>*/}

        {/* Class based components */}
        {/*<WishCard msg="Good Morning"/>
        <WishCard msg="Good Afternoon"/>
        <WishCard msg="Good Evening"/>*/}

        <StudentCard/>
    </div>
  );
}

export default App;
