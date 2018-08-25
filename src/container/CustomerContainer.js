import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import AppFrame from '../components/AppFrame';
import CustomerList from '../components/CustomerList';
import CustomersActions from '../components/CustomersActions';

import { fetchCustomers } from './../actions/fetchCustomers';



const customers = [
    {
        "dni": "11.111.111",
        "name": "test_1",
        "age": 1
    },
    {
        "dni": "22.222.222",
        "name": "test_2",
        "age": 2
    }
];

class CustomerContainer extends Component {

    componentDidMount = () => {
        this.props.fetchCustomers();
    }
    

    renderBody = customers => (
        
        <div>
            <CustomerList customers={customers} urlPath={'customer/'} />
            <CustomersActions>
                <button onClick={this.handleAddNew}>Añadir</button>
            </CustomersActions>

        </div>)


    render() {
        return (
            <div>
                <AppFrame
                    header='Listado'
                    body={this.renderBody(customers)}
                />
            </div>
        )
    }
}

CustomerContainer.proptypes = {
    fetchCustomers: PropTypes.func.isRequired,
}


export default withRouter(connect(null,  { fetchCustomers })(CustomerContainer)) 
