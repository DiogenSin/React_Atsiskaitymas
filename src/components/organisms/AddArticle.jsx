import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import { useState } from "react"
import ArticleContexts from '../contexts/ArticleContexts'
import { useContext } from 'react'
import { nanoid } from 'nanoid'

const AddArticle = () => {

    const { handleAddArticle } = useContext(ArticleContexts)

    const [newArticleInputs, setNewArticleInputs] = useState({
        title:"",
        text:"",
        id:nanoid()
    })

const validationSchema = Yup.object().shape({
    title: Yup.string()
        .required('This must be filled'),
    text: Yup.string()
        .required('This must be filled')
})

    return (

        <>
        <Formik
            initialValues={newArticleInputs}
            validationSchema={validationSchema}
            onSubmit={handleAddArticle}
        >

        {({ errors, touched, values, setValues }) => (
        
            <Form action='' id="articleForm">
                <h1>Add a new Article</h1>
                <label htmlFor=''>
                    <Field
                        type="text"
                        name="title"
                        placeholder="Title of the Article"
                        value={values.title}
                        onChange={(e) => setValues({...values, title: e.target.value})}
                    />
                    {
                        errors.title && touched.title ?
                        <span>{errors.title}</span> : null
                    }
                </label>
                <label action='' htmlFor=''>
                    <Field
                        type="textarea"
                        name="text"
                        placeholder="Text of the Article"
                        value={values.text}
                        onChange={(e) => setValues({...values, text: e.target.value})}
                    />
                    {
                        errors.text && touched.text ?
                        <span>{errors.text}</span> : null
                    }
                </label>
                <button type='submit'>Login</button>
            </Form>
        )}

        </Formik>
        </>
    )
}

export default AddArticle