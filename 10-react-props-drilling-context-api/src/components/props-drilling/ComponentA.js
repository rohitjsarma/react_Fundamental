import React from "react";
import ComponentB from "./ComponentB";

class ComponentA extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <div className="card m-4">
                    <div className="card-body bg-primary text-white">
                        <p className="h5">Component A</p>
                        <span>{JSON.stringify(this.props.userInfo)}</span>
                        <ComponentB userInfo={this.props.userInfo}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default ComponentA;
