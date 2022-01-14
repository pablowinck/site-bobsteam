import Container from 'components/Container';
import React from 'react';
import {
    Button,
    Content,
    Form,
    Input,
    Label,
    Main,
    TextArea,
    Title
} from './styles';

// import { Container } from './styles';

const ContactPage: React.FC = () => {
    return (
        <Container image="images/banner4.jpg">
            <Main>
                <Content>
                    <Title>Entre em Contato</Title>
                    <Form>
                        <Label>Nome Completo</Label>
                        <Input placeholder="digite seu nome" />
                        <Label>E-mail</Label>
                        <Input placeholder="digite seu e-mail" />
                        <Label>Telefone</Label>
                        <Input placeholder="digite seu telefone" />
                        <Label>Mensagem</Label>
                        <TextArea placeholder="digite sua mensagem" />

                        <Button>Enviar</Button>
                    </Form>
                </Content>
            </Main>
        </Container>
    );
};

export default ContactPage;
