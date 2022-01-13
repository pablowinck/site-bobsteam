import Container from 'components/Container';
import Link from 'next/link';
import React from 'react';
import { Button, Content, Main, Paragraph, Title } from './styles';

const AboutPage: React.FC = () => {
    return (
        <Container image="banner2.jpg">
            <Main>
                <Content>
                    <Title>Quem Somos</Title>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Paragraph>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Paragraph>
                    <Link href="/contact" passHref>
                        <Button>Entre em contato</Button>
                    </Link>
                </Content>
            </Main>
        </Container>
    );
};

export default AboutPage;
