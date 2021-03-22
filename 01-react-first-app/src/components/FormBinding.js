 import React,{Fragment} from "react";
class FormBinding extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            username:"ROHIT"
        }

    }
    updateUserName = (event) =>{
        this.setState({
            username:event.target.value,
        })
    }
    updateUname = (event) =>{
        this.setState({
            username:event.target.value,
        })
    }

    render() {
        return (
            <Fragment>
                -----------------------------------------------------------------------------------------
                <h5>Tow way data binding</h5>
            <b>............ This is FormBinding Component Example</b>
                <br/><br/>
                <form>
                    <input value={this.state.username} onChange={this.updateUserName} type="text" placeholder="UserName"/>
                    <h2>{this.state.username}</h2>
                </form>
                <br/>
                <b></b>
                <h3>This is Bootstrap Example to create 2 way Form Data Binding</h3>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-success text-white">
                                    <h4>Change user name</h4>
                                </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                                <input value={this.state.username} onChange={this.updateUname} type="text" className="form-control" placeholder="UserName"/>
                                            </div>
                                        </form>
                                        <p className="h3">
                                            {this.state.username}
                                        </p>
                                    </div>

                            </div>
                        </div>
                    </div>
                </div>




            </Fragment>
        );
    }

}
export default FormBinding;