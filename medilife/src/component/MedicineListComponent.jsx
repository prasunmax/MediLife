import React, {Component} from 'react'

class MedicineListComponent extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-12 mt-5'>
                        <h3>All Medicine List</h3>
                    </div>
                </div>
            </div>
            </>
        )
    }

}export default MedicineListComponent;