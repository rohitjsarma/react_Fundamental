import React from "react";

class HobbySelectRadio extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            hobby : ""
        }
    }

    // updateInput
    updateInput = (event) => {
        this.setState({
            ...this.state,
            hobby : event.target.value
        });
    };

    render() {
        let {hobby} = this.state;
        return (
            <React.Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    <p className="h4">Hobby Selector Radio</p>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <form>
                                                <div className="form-check">
                                                    <input
                                                        onChange={this.updateInput}
                                                        className="form-check-input" type="radio"
                                                           name="exampleRadios" id="exampleRadios1" value="eating"
                                                           />
                                                        <label className="form-check-label" htmlFor="exampleRadios1">
                                                            Eating
                                                        </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        onChange={this.updateInput}
                                                        className="form-check-input" type="radio"
                                                           name="exampleRadios" id="exampleRadios2" value="coding"/>
                                                        <label className="form-check-label" htmlFor="exampleRadios2">
                                                            Coding
                                                        </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        onChange={this.updateInput}
                                                        className="form-check-input" type="radio"
                                                           name="exampleRadios" id="exampleRadios3" value="sleeping"
                                                           />
                                                        <label className="form-check-label" htmlFor="exampleRadios3">
                                                            Sleeping
                                                        </label>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-8">
                                            {
                                                hobby === 'eating' ? <React.Fragment>
                                                    <div className="card animated jello">
                                                        <div className="card-body bg-success text-white">
                                                            <p className="h4">Eating</p>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                        </div>
                                                    </div>
                                                </React.Fragment> : null
                                            }
                                            {
                                                hobby === 'coding' ? <React.Fragment>
                                                    <div className="card animated jello">
                                                        <div className="card-body bg-warning text-white">
                                                            <p className="h4">Coding</p>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                        </div>
                                                    </div>
                                                </React.Fragment> : null
                                            }
                                            {
                                                hobby === 'sleeping' ? <React.Fragment>
                                                    <div className="card animated jello">
                                                        <div className="card-body bg-danger text-white">
                                                            <p className="h4">Sleeping</p>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                        </div>
                                                    </div>
                                                </React.Fragment> : null
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default HobbySelectRadio;
