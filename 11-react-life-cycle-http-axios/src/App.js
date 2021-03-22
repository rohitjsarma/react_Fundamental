import React from 'react';
import './App.css';
import DigitalWatch from "./components/DigitalWatch";
import UserList from "./components/UserList";

class App extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                    <a href="/" className='navbar-brand'>React Examples</a>
                </nav>

                {/*<DigitalWatch/>*/}
                <UserList/>
            </div>
        );
    }

}
export default App;
