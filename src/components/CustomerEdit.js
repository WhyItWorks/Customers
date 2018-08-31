import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomerActions from "./CustomersActions";



const isNumber = value => (
    isNaN(Number(value)) && "Campo numerico"
)

const validate = values => {
    const error = {}
    if (!values.name) {
        error.name = "Campo requerido"
    }
    if (!values.dni) {
        error.dni = "Campo requerido"
    }

    return error
}
const MyField = ({ input, meta, type, label, name }) => (
    <div>
        <label htmlFor={name}> {label} </label>
        <input {...input} type={!type ? "text" : type} />
        {
            meta.touched && meta.error && <span>{meta.error}</span>
        }
    </div>
)


const CustomerEdit = ({ name, dni, age, handleSubmit, submitting, onBack }) => {
    return (
        <div>
            <h2>Edición</h2>
            <form onSubmit={handleSubmit}>

                <Field name="name" label="Nombre" component={MyField} type="text" ></Field>
                <Field name="dni" label="Rut" component={MyField} type="text"></Field>
                <Field name="age" label="Edad" component={MyField} type="number" validate={isNumber}></Field>

                <CustomerActions>
                    <button type="submit" disabled={submitting}>Aceptar</button>
                    <button onClick={onBack}>Cancelar</button>
                </CustomerActions>
            </form>
        </div >
    )
}

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
}
const CustomerEditForm = reduxForm({ form: 'CustomerEdit', validate })(CustomerEdit)

export default setPropsAsInitial(CustomerEditForm)
