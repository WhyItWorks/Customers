import { createSelector } from 'reselect'

export const getCustomers = state => (state.customers)


export const getCustomerByDni = createSelector(
    (state, props) => state.customers.find(x => x.dni === props.dni),
    customer => customer
)