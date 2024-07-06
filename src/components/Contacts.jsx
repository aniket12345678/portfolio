import React, { useRef, useState } from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

import { ContactTags } from '../styledComponents/styleTags'

const {
    ContactButton, ContactForm, ContactInput,
    ContactInputMessage, ContactTitle, Container,
    Desc, Title, Wrapper
} = ContactTags

const Contacts = () => {
    const [disable, setDisable] = useState(false);
    const form = useRef();

    const validateFields = yup.object().shape({
        user_email: yup.string().email('Invalid email').required('Enter email'),
        from_name: yup.string().required('Enter name'),
        user_subject: yup.string().required('Enter subject'),
        message: yup.string().min(8, 'Enter some words').required('Enter message')
    })

    const { values, errors, handleSubmit, handleChange, resetForm } = useFormik({
        initialValues: {
            user_email: '',
            from_name: '',
            user_subject: '',
            message: ''
        },
        validationSchema: validateFields,
        onSubmit: (values) => {
            setDisable(true);
            emailjs
                .sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, {
                    publicKey: process.env.REACT_APP_YOUR_PUBLIC_KEY,
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        toast.success('Thank you for your valuable time');
                        resetForm();
                        setDisable(false);
                    },
                    (error) => {
                        toast.error('Some technical issues');
                        console.log('FAILED...', error.text);
                    },
                );
        }
    });

    return (
        <Container id="Contact">
            <Wrapper>
                <Title>Contact</Title>
                <Desc
                    style={{
                        marginBottom: "40px",
                    }}
                >
                    Feel free to reach out to me.
                </Desc>
                <ContactForm ref={form} onSubmit={handleSubmit}>
                    <ContactTitle>Let's connect 🚀</ContactTitle>
                    <ContactInput
                        type='email'
                        onChange={handleChange}
                        value={values.user_email}
                        style={errors.user_email ? { borderColor: 'red' } : {}}
                        placeholder="Your Email"
                        name="user_email"
                    />
                    <ContactInput
                        onChange={handleChange}
                        value={values.from_name}
                        style={errors.from_name ? { borderColor: 'red' } : {}}
                        placeholder="Your Name"
                        name="from_name"
                    />
                    <ContactInput
                        onChange={handleChange}
                        value={values.user_subject}
                        style={errors.user_subject ? { borderColor: 'red' } : {}}
                        placeholder="Subject"
                        name="user_subject"
                    />
                    <ContactInputMessage
                        style={errors.message ? { borderColor: 'red' } : {}}
                        onChange={handleChange}
                        value={values.message}
                        placeholder="Atleast 100 letters are required"
                        name="message"
                        rows={4}
                    />
                    <div style={{ textAlign: 'center' }}>
                        <ContactButton type="submit" >Send</ContactButton>
                    </div>
                </ContactForm>
            </Wrapper>
        </Container>
    )
}

export default Contacts
