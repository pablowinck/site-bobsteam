import Container from 'components/Container';
import React from 'react';
import Card from './Card';
import { Content, Main, Title } from './styles';

export type pricing = {
    title: string;
    price: string;
    content: string[];
    main: boolean;
};

const data: pricing[] = [
    {
        title: 'Mensal',
        price: 'R$ 120,00',
        content: [
            '3 aulas na semana',
            'curso defesa pessoal',
            'aulas de reforço'
        ],
        main: false
    },
    {
        title: 'Anual',
        price: 'R$ 100,00',
        content: [
            '7 aulas na semana',
            'curso defesa pessoal',
            'aulas de reforço',
            'suporte 24h'
        ],
        main: true
    },
    {
        title: 'Semestral',
        price: 'R$ 110,00',
        content: [
            '4 aulas na semana',
            'curso defesa pessoal',
            'aulas de reforço'
        ],
        main: false
    }
];

const PricingPage: React.FC = () => {
    return (
        <Container image="images/banner3.jpg">
            <Main>
                <Title>Planos</Title>
                <Content>
                    {data.map((item, index) => (
                        <Card item={item} key={index} />
                    ))}
                </Content>
            </Main>
        </Container>
    );
};

export default PricingPage;
