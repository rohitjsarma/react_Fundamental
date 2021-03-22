import React from "react";

class SMSApplication extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            maxLimit : 100,
            count : 100
        }
    }

    // updateCount
    updateCount = (event) => {
        this.setState({
            count : this.state.maxLimit - event.target.value.length
        });
    };

    render() {
        return (
            <React.Fragment>
               {/* <pre>{JSON.stringify(this.state)}</pre>*/}
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-warning text-white">
                                    <p className="h4">SMS Application</p>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <textarea onChange={this.updateCount} maxLength={this.state.maxLimit} rows="4" className="form-control" placeholder="Your Message Here"/>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer">
                                    <p className="h4">Characters Remaining :
                                        <span className="font-weight-bold">{this.state.count}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default SMSApplication;
