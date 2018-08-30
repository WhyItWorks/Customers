import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import AppFrame from '../components/AppFrame';
import CustomerList from '../components/CustomerList';
import CustomersActions from '../components/CustomersActions';

import { fetchCustomers } from './../actions/fetchCustomers';
import { getCustomers } from "../selectors/customers";





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
                    body={this.renderBody(this.props.customers)}
                />
            </div>
        )
    }
}

CustomerContainer.proptypes = {
    fetchCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array
}

CustomerContainer.defaultProps = {
    customers: []
}

const mapStateToProps = state => ({
    customers: getCustomers(state)
})


export default withRouter(connect(mapStateToProps, { fetchCustomers })(CustomerContainer)) 
