import React from "react";
import Axios from "axios";
import {Link} from "react-router-dom";

class Employees extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            employees : [],
            errorMessage : ''
        }
    }

    componentDidMount() {
        let dataURL = `https://gist.githubusercontent.com/thenaveensaggam/d8352c4a54447d68f3460bc7672fc307/raw/93c05e26207ff1f9f4f1db617fd496ba1b901abd/employees-20082020.json`;
        Axios.get(dataURL).then((response) => {
            this.setState({
                employees : response.data
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
                            <p className="h3 text-primary">Employees</p>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores, deleniti dolore earum eligendi ex explicabo fugiat fugit maxime modi porro praesentium quos reiciendis sed sunt suscipit totam, vero. Assumenda autem doloremque esse iusto laboriosam maiores mollitia ratione, vel. Modi?</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {
                                this.state.employees.length > 0 ?
                                    <React.Fragment>
                                        <table className="table table-hover text-center table-striped table-light">
                                            <thead className="bg-dark text-white">
                                                <tr>
                                                    <th>Emp Id</th>
                                                    <th>Image</th>
                                                    <th>Name</th>
                                                    <th>Age</th>
                                                    <th>Email</th>
                                                    <th>Address</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.employees.map((employee) => {
                                                        return (
                                                            <tr key={employee.login.uuid}>
                                                                <td>{employee.login.uuid.substr(employee.login.uuid.length - 4)}</td>
                                                                <td>
                                                                    <img src={employee.picture.large} width="50" height="50"/>
                                                                </td>
                                                                <td>
                                                                    <Link to={`/employees/${employee.login.uuid}`} className="text-primary font-weight-bold">{employee.name.first} {employee.name.last}</Link>
                                                                </td>
                                                                <td>{employee.dob.age} Yrs.</td>
                                                                <td>{employee.email}</td>
                                                                <td>{employee.location.city}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </React.Fragment> : null
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Employees;
