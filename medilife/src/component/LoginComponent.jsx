import React, { Component } from 'react'
import loginImages from '../Images/login images.jpg'
import { withRouter, Link } from 'react-router-dom';
import AddressService from '../service/AddressService';
import axios from 'axios';

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            userPassword: '',
            
        }

        this.usernameHandler = this.usernameHandler.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);
        this.login = this.login.bind(this);

    }

    usernameHandler = (event) => {
        this.setState({ userName: event.target.value });
    }

    passwordHandler = (event) => {
        this.setState({ userPassword: event.target.value });
    }

    login = (event) => {
        event.preventDefault();

        let datas = { userName: this.state.userName, userPassword: this.state.userPassword };
        AddressService.createLogin(datas).then(res => {

            //Store userToken detail in localStorage
            localStorage.setItem('jwtToken', res.data.jwtToken);

            //Store userDetail in localStorage
            localStorage.setItem("id", JSON.stringify(res.data.user));

            // console.log(JSON.parse(localStorage.getItem('id')))
            // console.log(localStorage.getItem('userData'));
            // console.log(localStorage.getItem('jwtToken'));
            

            const config = {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('jwtToken')
                }
            };
            axios.get('http://localhost:9090/forUser', config).then(
                response => {
                    alert(response.data);
                    // this.state = ({ userData: response.data})
                    this.props.history.push("/");
                }
            )



        })



    }

    render() {
        return (
            <>
                <div className='container-fluid' style={{ marginTop: "56px" }}>
                    <div className='row'>
                        <div className='col-md-6 card p-0'>
                            <img src={loginImages} style={{ width: "100%", height: "300px" }}></img>
                        </div>

                        <div className='col-md-6 card'>
                            <form>
                                <div className='from-group'>
                                    <label>Username</label>
                                    <input type="text" placeholder='Enter Username' name="userName" required className='form-control' onChange={this.usernameHandler} value={this.state.userName} />
                                </div>
                                <div className='from-group'>
                                    <label>Password</label>
                                    <input type="password" placeholder='Enter Password' name="userPassword" required className='form-control' onChange={this.passwordHandler} value={this.state.userPassword}></input>
                                </div>
                                <div>
                                    <button type="button" className='btn btn-success mt-3 mr-5' onClick={this.login}>Submit</button>

                                    <Link className='btn btn-primary mt-3' to="/user-signup">Create a account</Link>

                                </div>


                            </form>

                        </div>
                    </div>

                </div>
                


            </>
        )
    }
}
export default withRouter(LoginComponent);