import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import { useState } from "react"

const RegistrationForm = () => {

    const [registrationInputs, setregistrationInputs] = useState({
        email:"",
        password:""
    })

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('This must be a valid email')
        .required('This must be filled'),
    password: Yup.string()
        .min(5, 'The password must be at least 5 symbols length')
        .required('This must be filled'),
    passwordRepeat: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('This must be filled'),
})

const handleSubmit = (e) => {
    console.log(e)
}

    return (

        <>
        <Formik
            initialValues={registrationInputs}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >

        {({ errors, touched, values, setValues }) => (
        
            <Form action='' id="registrationForm">
                <h1>Registration</h1>
                <label htmlFor=''>
                    <Field
                        type="text"
                        name="email"
                        placeholder="expample@email.com"
                        value={values.email}
                        onChange={(e) => setValues({...values, email: e.target.value})}
                    />
                    {
                        errors.email && touched.email ?
                        <span>{errors.email}</span> : null
                    }
                </label>
                <label action='' htmlFor=''>
                    <Field
                        type="password"
                        name="password"
                        placeholder=""
                        value={values.password}
                        onChange={(e) => setValues({...values, password: e.target.value})}
                    />
                    {
                        errors.password && touched.password ?
                        <span>{errors.password}</span> : null
                    }
                </label>
                <label action='' htmlFor=''>
                    <Field
                        type="password"
                        name="passwordRepeat"
                        placeholder=""
                        value={values.passwordRepeat}
                        onChange={(e) => setValues({...values, passwordRepeat: e.target.value})}
                    />
                    {
                        errors.passwordRepeat && touched.passwordRepeat ?
                        <span>{errors.passwordRepeat}</span> : null
                    }
                </label>
                <button type='submit'>Login</button>
            </Form>
        )}

        </Formik>
        </>
    )
}

export default RegistrationForm