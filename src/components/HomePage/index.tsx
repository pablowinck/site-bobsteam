import React from 'react';
import { Button, Container, Content, Description, Title } from './styles';

const HomePage: React.FC = () => {
    return (
        <Container>
            <Content>
                <Title>
                    Seja bem-vindo a <strong>maior academia</strong> do vale dos
                    sinos
                </Title>
                <Description>Venha fazer parte da nossa história</Description>
                <Button>saiba mais</Button>
            </Content>
        </Container>
    );
};

export default HomePage;
