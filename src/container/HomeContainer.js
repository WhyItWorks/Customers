import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import AppFrame from '../components/AppFrame'
import CustomersActions from '../components/CustomersActions'


class HomeContainer extends Component {
    handleOnClick = () => {
        this.props.history.push('/customers')
    }

    render() {
        return (
            <div>
                <AppFrame
                    header='home'
                    body={
                        <div>
                            Pantalla inicial
                            <CustomersActions>
                                <button onClick={this.handleOnClick}>
                                    Listado
                                </button>
                            </CustomersActions>
                        </div>
                    }
                />

            </div>
        )
    }
}

HomeContainer.proptypes = {

}


export default withRouter(HomeContainer)