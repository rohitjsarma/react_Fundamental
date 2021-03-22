import React from "react";

class ChangeUserName extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username : ""
        }
    }

    updateUsername = (event) => {
        this.setState({
            username : event.target.value
        });
    };

    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-success text-white">
                                    <h4>Change User Name</h4>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <input
                                                value={this.state.username}
                                                onChange={this.updateUsername}
                                                type="text" className="form-control" placeholder="User Name"/>
                                        </div>
                                    </form>
                                    <p className="h3">{this.state.username}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default ChangeUserName;
