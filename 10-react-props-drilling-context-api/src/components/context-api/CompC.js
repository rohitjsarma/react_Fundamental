import React from "react";
import UserContext from "./UserContext";

class CompC extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <div className="card m-4">
                    <div className="card-body bg-warning text-white">
                        <p className="h5">Component C</p>
                        <UserContext.Consumer>
                            {
                                (userInfo) => (
                                    <span>{JSON.stringify(userInfo)}</span>
                                )
                            }
                        </UserContext.Consumer>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default CompC;
