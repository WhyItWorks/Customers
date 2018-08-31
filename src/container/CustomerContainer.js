
import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import { withRouter, Route } from "react-router-dom";
import AppFrame from '../components/AppFrame';
import { getCustomerByDni } from '../selectors/customers';
import CustomerEdit from "../components/CustomerEdit";
import CustomerData from "../components/CustomerData";

class CustomerContainer extends Component {

    handleSubmit = values => {
        console.log(JSON.stringify(values))
    }
    handleOnBack = () => {
        this.props.history.goBack();
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
    customer: PropTypes.object.isRequired,
}

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
})
export default withRouter(connect(mapStateToProps, null)(CustomerContainer))