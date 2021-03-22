import React from "react";
import ComponentC from "./ComponentC";

class ComponentB extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <div className="card m-4">
                    <div className="card-body bg-danger text-white">
                        <p className="h5">Component B</p>
                        <span>{JSON.stringify(this.props.userInfo)}</span>
                        <ComponentC userInfo={this.props.userInfo}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default ComponentB;
