import React, {Fragment} from "react";
import card1 from '../assets/img/card_1.jpg';
import card2 from '../assets/img/card_2.jpg';
import card3 from '../assets/img/card_3.jpg';
import card4 from '../assets/img/card_4.jpg';

class Cards extends React.Component{
    render() {
        return (
            <Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card">
                                <img src={card1} className="img-fluid" alt=""/>
                                <div className="card-body">
                                    <h4 className="card-title">Paris</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt fugit maiores officia saepe. Assumenda fuga, iste qui sapiente temporibus vel.</p>
                                    <button className="btn btn-dark btn-sm">Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <img src={card2} className="img-fluid" alt=""/>
                                <div className="card-body">
                                    <h4 className="card-title">Bangkok</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt fugit maiores officia saepe. Assumenda fuga, iste qui sapiente temporibus vel.</p>
                                    <button className="btn btn-dark btn-sm">Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <img src={card3} className="img-fluid" alt=""/>
                                <div className="card-body">
                                    <h4 className="card-title">Indonesia</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt fugit maiores officia saepe. Assumenda fuga, iste qui sapiente temporibus vel.</p>
                                    <button className="btn btn-dark btn-sm">Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <img src={card4} className="img-fluid" alt=""/>
                                <div className="card-body">
                                    <h4 className="card-title">Malaysia</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt fugit maiores officia saepe. Assumenda fuga, iste qui sapiente temporibus vel.</p>
                                    <button className="btn btn-dark btn-sm">Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default Cards;
