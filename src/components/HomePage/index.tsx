import Container from 'components/Container';
import React from 'react';
import { Button, Content, Description, Title } from './styles';

const HomePage: React.FC = () => {
    return (
        <Container image="images/banner1.jpg">
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
