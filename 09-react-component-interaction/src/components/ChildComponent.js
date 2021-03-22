import React from "react";

class ChildComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data : 'Good Morning from Child'
        }
    }

    clickButton = () => {
        this.props.pushData(this.state.data);
    };

    render() {
        return (
            <div>
                <div className="card m-3">
                    <div className="card-body">
                        <p className="h4">Child Component</p>
                        <p className="h3">From Parent : {this.props.message}</p>
                        <button onClick={this.clickButton} className="btn btn-success btn-sm">send</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default ChildComponent;
