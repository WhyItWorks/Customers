import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppFrame from '../components/AppFrame';
import CustomerList from '../components/CustomerList';
import CustomersActions from '../components/CustomersActions';


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
    renderBody = customers => (
        <div>
            <CustomerList customers={customers} urlPath={'customer/'} />
            <CustomersActions>
                <button onClick={this.handleAddNew}></button>
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

}

export default CustomerContainer
