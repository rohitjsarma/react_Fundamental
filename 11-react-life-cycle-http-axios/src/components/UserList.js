import React from "react";
import Axios from "axios";

class UserList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            users : null,
            errorMessage : null
        }
    }

    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            this.setState({
                users : response.data
            });
        }).catch((err) => {
            this.setState({
                errorMessage : err
            });
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-primary">Users Information</p>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, corporis deserunt dicta dolore hic ipsa iure laborum maiores mollitia necessitatibus nobis, odio omnis quae quas quasi quisquam reiciendis sapiente temporibus?</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <table className="table table-primary table-hover text-center table-striped">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th>ID</th>
                                        <th>NAME</th>
                                        <th>USERNAME</th>
                                        <th>EMAIL</th>
                                        <th>ADDRESS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.users ? <React.Fragment>
                                        {
                                            this.state.users.map((user) => {
                                                return(
                                                    <tr>
                                                        <td>{user.id}</td>
                                                        <td>{user.name}</td>
                                                        <td>{user.username}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.address.city}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </React.Fragment> : null
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default UserList;
