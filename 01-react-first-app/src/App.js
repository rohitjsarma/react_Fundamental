import React from 'react';

import './App.css';
import WishMessage from "./components/WishMessage";
import GreetingMessage from "./components/GreetingMessage";
import GreetMsg from "./components/GreetMsg";
import ProductItem from "./components/ProductItem";
import FormBinding from "./components/FormBinding";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className='navbar-brand'>React with Event Binding </a>
      </nav>
      <WishMessage/>
      <GreetingMessage/>
      <GreetMsg/>
      <ProductItem/>
      <FormBinding/>
    </div>
  );
}

export default App;
