import React from "react";

class ChildCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          text : ''
        }
    }

    updateInput = (event) => {
        this.setState({
            text : event.target.value
        });
    };

    updateParent = (event) => {
        this.props.sendData(this.state.text);
    };

    render() {
        return (
            <React.Fragment>

                <div className="card m-3">
                    <div className="card-header bg-danger text-white">
                        <p className="h4">Child</p>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <input
                                    value={this.state.text}
                                    onChange={this.updateInput}
                                    onInput={this.updateParent}
                                    type="text" className="form-control" placeholder="Child Message"/>
                            </div>
                        </form>
                        <p>From Parent : {this.props.message}</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default ChildCard;
