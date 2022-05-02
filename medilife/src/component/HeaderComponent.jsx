import React, { Component } from 'react';
import { withRouter, Link} from 'react-router-dom';


class HeaderComponent extends Component{
    constructor(props) {
        super(props)
        this.state = {
        }
     
        // console.log(this.props.user.userName)
    }
    render(){
        return (
            <>
                <div class='container-fluid'>
                    <div className='row'>
                        <div className='col-md-12 p-0'>
                        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                            <Link class="navbar-brand" to="/">MediLife</Link>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav mx-auto">
                                    <li class="nav-item active">
                                        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/about">About</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/contact">Contact</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/medicine-list">Medicine</Link>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Category
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link class="dropdown-item" to="/category">Add Category</Link>
                                            <Link class="dropdown-item" to="/addStudent">Add Student</Link>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                    
                                    <li>
                                        <form class="form-inline my-2 mt-2 my-lg-0">
                                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                        </form>
                                    </li>

                                    

                                </ul>
                                <ul class="navbar-nav">
                                <li class="nav-item">
                                        <Link class="nav-link" to="/user-login">Login</Link>
                                    </li>
                                </ul>

                                

                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            </>
        )


    }
}
export default withRouter(HeaderComponent);
