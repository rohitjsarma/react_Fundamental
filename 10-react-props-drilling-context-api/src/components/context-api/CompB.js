import React from "react";
import CompC from "./CompC";

class CompB extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <div className="card m-4">
                    <div className="card-body bg-danger text-white">
                        <p className="h5">Component B</p>
                        <CompC/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default CompB;
