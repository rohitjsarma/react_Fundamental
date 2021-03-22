import React from "react";

class LoginForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : ''
        }
    }

    // updateInput
    updateInput = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    };

    // login
    login = (event) => {
        // prevent page refresh
        event.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <React.Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header bg-success text-white">
                                    <p className="h4">Login Here</p>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.login}>
                                        <div className="form-group">
                                            <input
                                                name="username"
                                                value={this.state.username}
                                                onChange={this.updateInput}
                                                type="text" className="form-control" placeholder="Username"/>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                name="password"
                                                value={this.state.password}
                                                onChange={this.updateInput}
                                                type="password" className="form-control" placeholder="Password"/>
                                        </div>
                                        <div>
                                            <input type="submit" value="login" className="btn btn-success btn-sm"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default LoginForm;
