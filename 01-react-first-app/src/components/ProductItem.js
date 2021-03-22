import React,{Fragment} from "react";
class ProductItem extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            product:{
                sno:101,
                image:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRNks1eVBchcCfooHq-qRhhdRUqmcn7g-X-eF5jznOWyAS-OJeixno&usqp=CAc',
                name:'Apple watch',
                qty:0,
                price:1100

            }
        }

    }
    incrQty = () =>{
        this.setState({
            product:{
                ...this.state.product,
                qty:this.state.product.qty+1,

            }

        });
    };
    decsQty = () =>{
        this.setState({
            product:{
                ...this.state.product,
                qty:(this.state.product.qty-1 >0) ? this.state.product.qty -1:0

            }

        });
    };

    render() {
        return (
            <Fragment>
                <b>----------New Example ProductItem COMPONENT</b>
                <h2>Product Item</h2>
                <div className="container mt-3" >
                    <div className="row">
                        <div className="col">
                            <table className="table table-hover table-light table-striped text-center" >
                                <thead className="bg-dark text-white">
                                <tr>
                                    <th>SNO</th>
                                    <th>Product Image</th>
                                    <th>Product Name</th>
                                    <th>Product Qty</th>
                                    <th>Product Price</th>
                                    <th>Product Total</th>
                                </tr>
                                </thead>
                                    <tbody>
                                    <tr>

                                        <td>{this.state.product.sno}</td>
                                        <td>
                                            <img src={this.state.product.image} width='80' height="80"/>
                                        </td>
                                        <td>{this.state.product.name}</td>
                                        <td>
                                            <i onClick={this.decsQty}className="fa fa-minus-circle mr-2 "/>
                                             {this.state.product.qty}
                                            <i onClick={this.incrQty} className="fa fa-plus-circle ml-2"/>
                                        </td>
                                        <td>{this.state.product.price}</td>
                                        <td>{this.state.product.qty * this.state.product.price}</td>
                                    </tr>
                                    </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

}
export default ProductItem;