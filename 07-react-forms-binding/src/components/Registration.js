import React from "react";

class Registration extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user : {
                username : '',
                email : '',
                password : ''
            }
        }
    }

    // updateInput
    updateInput = (event) => {
        this.setState({
            user : {
                ...this.state.user,
                [event.target.name] : event.target.value
            }
        });
    };

    // register
    register = (event) => {
        event.preventDefault();
        console.log(this.state.user);
    };

    render() {
        return (
            <React.Fragment>
              {/*  <pre>{JSON.stringify(this.state)}</pre>*/}
               <div className="container mt-3">
                   <div className="row">
                       <div className="col-md-4">
                           <div className="card">
                               <div className="card-header bg-secondary text-white">
                                   <p className="h4">Register Here</p>
                               </div>
                               <div className="card-body">
                                   <form onSubmit={this.register}>
                                       <div className="form-group">
                                           <input
                                               name="username"
                                               value = {this.state.user.username}
                                               onChange={this.updateInput}
                                               type="text" className="form-control" placeholder="Username"/>
                                       </div>
                                       <div className="form-group">
                                           <input
                                               name="email"
                                               value={this.state.user.email}
                                               onChange={this.updateInput}
                                               type="email" className="form-control" placeholder="Email"/>
                                       </div>
                                       <div className="form-group">
                                           <input
                                               name="password"
                                               value={this.state.user.password}
                                               onChange={this.updateInput}
                                               type="password" className="form-control" placeholder="Password"/>
                                       </div>
                                       <div>
                                           <input type="submit" value="Register" className="btn btn-secondary btn-sm"/>
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
export default Registration;
