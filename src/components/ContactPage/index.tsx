import emailjs from '@emailjs/browser';
import Container from 'components/Container';
import { Formik } from 'formik';
import React, { useRef, useState } from 'react';
import * as Yup from 'yup';
import {
    Button,
    Content,
    Error,
    Form,
    Input,
    Label,
    Main,
    TextArea,
    Title
} from './styles';
import Success from './Success';

const ContactPage: React.FC = () => {
    const form = useRef();
    const [success, setSuccess] = useState(false);

    const initialValues = {
        name: '',
        email: '',
        phone: '',
        message: ''
    };

    const validate = Yup.object().shape({
        name: Yup.string()
            .required('campo obrigatório')
            .min(2, 'minimo 2 caracteres'),
        email: Yup.string()
            .required('campo obrigatório')
            .email('email inválido'),
        phone: Yup.number().typeError('telefone inválido'),
        message: Yup.string().required('campo obrigatório')
    });

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        console.log(values);
        console.log('enviando...');

        emailjs
            .sendForm(
                'service_qhqgunj',
                'template_kj21g3q',
                form.current,
                'user_eZv0apgNdSIK4qspcqeAW'
            )
            .then(
                (result) => {
                    setSuccess(true);
                    resetForm();
                    setTimeout(() => {
                        setSuccess(false);
                    }, 5000);
                },
                (error) => {
                    console.log(error.text);
                }
            )
            .finally(() => {
                setSubmitting(false);
            });
    };

    return (
        <Container image="images/banner4.jpg">
            <Main>
                <Content>
                    <Title>Entre em Contato</Title>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validate}
                        onSubmit={handleSubmit}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting
                        }) => (
                            <Form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    console.log(e.target);

                                    handleSubmit();
                                }}
                                ref={form}
                            >
                                <Label>Nome Completo</Label>
                                <Input
                                    placeholder="digite seu nome"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                                {errors.name && touched.name && (
                                    <Error>{errors.name}</Error>
                                )}
                                <Label>E-mail</Label>
                                <Input
                                    placeholder="digite seu e-mail"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {errors.email && touched.email && (
                                    <Error>{errors.email}</Error>
                                )}
                                <Label>Telefone</Label>
                                <Input
                                    placeholder="digite seu telefone"
                                    name="phone"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.phone}
                                />
                                {errors.phone && touched.phone && (
                                    <Error>{errors.phone}</Error>
                                )}
                                <Label>Mensagem</Label>
                                <TextArea
                                    name="message"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.message}
                                    placeholder="digite sua mensagem"
                                />
                                {errors.message && touched.message && (
                                    <Error>{errors.message}</Error>
                                )}

                                <Button type="submit">
                                    {isSubmitting ? (
                                        <span>Enviando...</span>
                                    ) : (
                                        <span>Enviar</span>
                                    )}
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Content>
            </Main>
            <Success success={success} setSuccess={setSuccess} />
        </Container>
    );
};

export default ContactPage;
