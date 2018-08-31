import { FETCH_CUSTOMERS } from './../constants'
import { createAction } from "redux-actions";
import { apiGet } from '../api';
import { urlCustomers } from '../api/urls';

// const url = 'http://localhost:3001/customers'
// const apiFetchCustomers = () => (fetch(url).then(x => x.json()))

export const fetchCustomers = createAction(FETCH_CUSTOMERS, apiGet(urlCustomers))
