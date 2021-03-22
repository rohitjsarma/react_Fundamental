import React from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            message : 'Iam from Parent',
            text : ''
        }
    }

    pullData = (data) => {
        this.setState({
            text : data
        });
    };

    render() {
        return (
            <div>
                <div className="card m-3">
                    <div className="card-body">
                        <p className="h4">Parent Component</p>
                        <p>From Child : {this.state.text}</p>
                        <ChildComponent message={this.state.message} pushData={this.pullData}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default ParentComponent;
