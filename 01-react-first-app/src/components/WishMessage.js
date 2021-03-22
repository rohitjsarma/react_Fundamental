import React, {Fragment} from "react";
class WishMessage extends  React.Component{
    constructor(props) {
        super(props);
        this.state={
            msg:'HELLO'
        };

    }

    updateMessagae = () =>{
          this.setState({
              msg:'Good Mornig'
          });

    };
    sayGoodAfternoon = (value) =>{
        this.setState({
            msg:value
        });

    };
    goodEvening = () =>{
        this.setState({
            msg:"Good Evening"
        })
    }


    render() {
        return (
            <Fragment>
                <b>---------- New Example WishMessage component</b>
           <h3>{this.state.msg}</h3>
           <button onClick={this.updateMessagae} className="btn btn-success btn-sm">Good Morning</button>
                <button onClick={this.sayGoodAfternoon.bind(this,'Good Afternoon')} className='btn btn-warning btn-sm'>Good Afternoon</button>
           <button onClick={this.goodEvening} className="btn btn-success btn-sm">Good Evening</button>
            </Fragment>
        );
    }
}
export default WishMessage;