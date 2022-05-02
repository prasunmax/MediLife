// import React, { Component } from 'react'
// import loginImages from '../Images/login images.jpg'
// import { withRouter, Link} from 'react-router-dom';
// class AdminLoginComponent extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             username:'',
//             password:''

//         }
        
//     }
    
    
//     render() {
//         return (
//             <>
//                 <div className='container-fluid' style={{marginTop:"56px"}}>
//                     <div className='row'>
//                         <div className='col-md-6 card p-0'>
//                             <img src={loginImages} style={{width:"100%", height:"300px"}}></img>
//                         </div>

//                         <div className='col-md-6 card'>
//                             <form>
//                             <div className='from-group'>
//                                 <label>Username</label>
//                                 <input type="text" placeholder='Enter Username' name="username" required="required" className='form-control'></input>
//                             </div>
//                             <div className='from-group'>
//                                 <label>Password</label>
//                                 <input type="password" placeholder='Enter Password' name="password" required="required" className='form-control'></input>
//                             </div>
//                             <div>
//                             <button type="button" className='btn btn-success mt-3 mr-5'>Submit</button>
//                             </div>
                            
                            
//                             </form>
                            
//                         </div>
//                     </div>

//                 </div>
//             </>
//         )
//     }
// }
// export default withRouter(AdminLoginComponent);