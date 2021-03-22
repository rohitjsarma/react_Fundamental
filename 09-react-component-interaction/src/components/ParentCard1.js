import React from "react";
import ChildCard from "./ChildCard";

class ParentCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            message : '',
            fromChild : ''
        }
    }

    updateInput = (event) => {
        this.setState({
            message : event.target.value
        });
    };

    receiveData = (data) => {
        this.setState({
            fromChild : data
        });
    };

    render() {
        return (
            <React.Fragment>
                <div className="card m-3">
                    <div className="card-header bg-success text-white">
                        <p className="h4">Parent</p>
                        <p>{JSON.stringify(this.state)}</p>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <input
                                    value={this.state.message}
                                    onChange={this.updateInput}
                                    type="text" className="form-control" placeholder="Parent Message"/>
                            </div>
                        </form>
                        <ChildCard message={this.state.message} sendData={this.receiveData}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default ParentCard;
