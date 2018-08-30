import { FETCH_CUSTOMERS } from './../constants'
import { createAction } from "redux-actions";

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
]

export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => customers)
