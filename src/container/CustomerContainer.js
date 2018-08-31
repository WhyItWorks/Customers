
import React, { Component } from 'react'
import { connect } from "react-redux"
import PropTypes from 'prop-types'
import { withRouter, Route } from "react-router-dom"
import AppFrame from '../components/AppFrame'
import { getCustomerByDni } from '../selectors/customers'
import CustomerEdit from "../components/CustomerEdit"
import CustomerData from "../components/CustomerData"
import { fetchCustomers } from "../actions/fetchCustomers"
import { updateCustomer } from "../actions/updateCustomer"

class CustomerContainer extends Component {


    componentDidMount = () => {
        if (!this.props.customer) {
            this.props.fetchCustomers()
        }
    }


    handleSubmit = values => {
        console.log(JSON.stringify(values))
        const { id } = values
        return this.props.updateCustomer(id, values)
    }
    handleOnBack = () => {
        this.props.history.goBack()
    }

    renderBody = () => (
        <Route path="/customer/:dni/edit" children={
            ({ match }) => {

                const CustomerControl = match ? CustomerEdit : CustomerData
                return <CustomerControl {...this.props.customer}
                    onSubmit={this.handleSubmit}
                    onBack={this.handleOnBack} />
                {/* match ?
                        <CustomerEdit {...this.props.customer} /> :
                        <CustomerData {...this.props.customer} /> */}

            }
        } />
    )

    render() {
        return (
            <div>
                <AppFrame
                    header={`Cliente ${this.props.dni}`}
                    body={this.renderBody()}
                />
            </div>
        )
    }
}

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object,
    fetchCustomers: PropTypes.func.isRequired,
    updateCustomers: PropTypes.func,
}

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props),

})
export default withRouter(connect(mapStateToProps, { fetchCustomers, updateCustomer })(CustomerContainer))