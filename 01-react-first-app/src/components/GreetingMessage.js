import React,{Fragment} from "react";
class GreetingMessage extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            message:'Hello'
        }

    }
     //say Goodmornig
    sayGoodmorning = () =>{
        this.setState({
            message:"Good Morning"
        });
    };
    //say Good Afternoon
    sayAfterNoon = () =>{
        this.setState({
            message:"Good Afternoon"
        });
    };
    //say Good Evening
    sayGoodEvening = () =>{
        this.setState({
            message:"Good Evening"
        });
    };

    render() {
        return (
            <Fragment>
                <br/>

                <b>----------NEW EXAMPLE GreetingMessage Component</b>
                <div className="card">
                    <div className="card-body">
                        <p className="h3">
                            {this.state.message}
                        </p>
                        <button onClick={this.sayGoodmorning} className="btn btn-success btn-sm ">Good Morning</button>
                        <button onClick={this.sayAfterNoon} className="btn btn-warning btn-sm">Good Afternoon</button>
                        <button onClick={this.sayGoodEvening} className="btn btn-danger btn-sm ">Good Evening</button>

                    </div>
                </div>

            </Fragment>
        );
    }

}
export default GreetingMessage;