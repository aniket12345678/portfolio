import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import nodemailer from 'nodemailer'

import { ContactTags } from '../styledComponents/styleTags'

const {
    ContactButton, ContactForm, ContactInput,
    ContactInputMessage, ContactTitle, Container,
    Desc, Title, Wrapper
} = ContactTags

const Contacts = () => {

    const validateFields = yup.object().shape({
        email: yup.string().email('Invalid email').required('Enter email'),
        name: yup.string().required('Enter name'),
        subject: yup.string().required('Enter subject'),
        message: yup.string().min(8, 'Enter some words').required('Enter message')
    })

    const { values, errors, handleSubmit, handleChange } = useFormik({
        initialValues: {
            email: '',
            name: '',
            subject: '',
            message: ''
        },
        validationSchema: validateFields,
        onSubmit: (values) => {
            console.log('values:- ',values);
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.REACT_APP_EMAIL,
                    pass: process.env.REACT_APP_PASSWORD
                }
            });
            const mailOptions = {
                to: process.env.REACT_APP_EMAIL,
                from: values.email,
                subject: values.subject,
                text: values.message
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
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
                <ContactForm onSubmit={handleSubmit}>
                    <ContactTitle>Let's connect 🚀</ContactTitle>
                    <ContactInput
                        onChange={handleChange}
                        value={values.email}
                        style={errors.email ? { borderColor: 'red' } : {}}
                        placeholder="Your Email"
                        name="email"
                    />
                    <ContactInput
                        onChange={handleChange}
                        value={values.name}
                        style={errors.name ? { borderColor: 'red' } : {}}
                        placeholder="Your Name"
                        name="name"
                    />
                    <ContactInput
                        onChange={handleChange}
                        value={values.subject}
                        style={errors.subject ? { borderColor: 'red' } : {}}
                        placeholder="Subject"
                        name="subject"
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
