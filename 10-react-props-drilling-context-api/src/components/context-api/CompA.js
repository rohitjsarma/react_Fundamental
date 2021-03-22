import React from "react";
import CompB from "./CompB";

class CompA extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <div className="card m-4">
                    <div className="card-body bg-primary text-white">
                        <p className="h5">Component A</p>
                        <CompB/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default CompA;
