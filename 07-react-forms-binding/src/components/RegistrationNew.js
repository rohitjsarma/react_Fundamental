import React from "react";

class RegistrationNew extends React.Component{
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


    // register
    register = (event) => {
        event.preventDefault();
        console.log(this.state.user);
    };

    render() {
        let {username , email , password} = this.state.user;
        return (
            <React.Fragment>
               {/* <pre>{JSON.stringify(this.state)}</pre>*/}
               <div className="container mt-3">
                   <div className="row">
                       <div className="col-md-4">
                           <div className="card">
                               <div className="card-header bg-danger text-white">
                                   <p className="h4">Register Here</p>
                               </div>
                               <div className="card-body">
                                   <form onSubmit={this.register}>
                                       <div className="form-group">
                                           <input
                                               value = {username}
                                               onChange={(e) => {this.setState({user : {...this.state.user, 'username' : e.target.value}})}}
                                               type="text" className="form-control" placeholder="Username"/>
                                       </div>
                                       <div className="form-group">
                                           <input
                                               name="email"
                                               value={email}
                                               onChange={(e) => {this.setState({user : {...this.state.user, 'email' : e.target.value}})}}
                                               type="email" className="form-control" placeholder="Email"/>
                                       </div>
                                       <div className="form-group">
                                           <input
                                               name="password"
                                               value={password}
                                               onChange={(e) => {this.setState({user : {...this.state.user, 'password' : e.target.value}})}}
                                               type="password" className="form-control" placeholder="Password"/>
                                       </div>
                                       <div>
                                           <input type="submit" value="Register" className="btn btn-danger btn-sm"/>
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
export default RegistrationNew;
