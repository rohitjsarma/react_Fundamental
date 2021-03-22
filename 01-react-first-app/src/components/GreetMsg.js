import React,{Fragment} from "react";
class GreetMsg extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            message:'Hello'
        }

    }
    //update Message
    updateMessage = (value) =>{
        this.setState({
            message:value
        });
    };


    render() {
        return (
            <Fragment>
                <br/>

                <b>----------NEW EXAMPLE GreetMsg Component</b>
                <div className="card">
                    <div className="card-body">
                        <p className="h3">
                            {this.state.message}
                        </p>
                        <button onClick={this.updateMessage.bind(this,"Good Morning")}  className="btn btn-success btn-sm ">Good Morning</button>
                        <button onClick={this.updateMessage.bind(this,"Good AfterNoon")} className="btn btn-warning btn-sm">Good Afternoon</button>
                        <button onClick={this.updateMessage.bind(this,"Good Evening")} className="btn btn-danger btn-sm ">Good Evening</button>

                    </div>
                </div>

            </Fragment>
        );
    }

}
export default GreetMsg;