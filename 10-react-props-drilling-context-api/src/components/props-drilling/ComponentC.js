import React from "react";

class ComponentC extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <div className="card m-4">
                    <div className="card-body bg-warning text-white">
                        <p className="h5">Component C</p>
                        <span>{JSON.stringify(this.props.userInfo)}</span>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default ComponentC;
