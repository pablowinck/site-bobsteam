import Container from 'components/Container';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import Card from './Card';
import {
    ArrowLeft,
    ArrowRight,
    CarrousselContent,
    Content,
    Main,
    Title
} from './styles';

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
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);

    const handleBefore = () => {
        if (current === 0) return;
        setDirection(1);
        setCurrent(current - 1);
    };

    const handleAfter = () => {
        if (current === data.length - 1) return;
        setDirection(-1);
        setCurrent(current + 1);
    };

    const variants = {
        enter: (direction) => {
            return {
                x: direction > 0 ? 40 : -40,
                opacity: 0
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 40 : -40,
                opacity: 0
            };
        }
    };

    return (
        <Container image="images/banner3.jpg">
            <Main>
                <Title>Planos</Title>
                <Content>
                    {data.map((item, index) => (
                        <Card item={item} key={index} />
                    ))}
                </Content>
                <CarrousselContent>
                    <ArrowLeft
                        className="arrow"
                        onClick={() => handleBefore()}
                    />
                    <AnimatePresence custom={direction} exitBeforeEnter>
                        {data.map(
                            (item, index) =>
                                current === index && (
                                    <motion.div
                                        variants={variants}
                                        animate="center"
                                        custom={direction}
                                        initial="enter"
                                        exit="exit"
                                        transition={{ duration: 0.3 }}
                                        key={index}
                                    >
                                        <Card item={item} />
                                    </motion.div>
                                )
                        )}
                    </AnimatePresence>
                    <ArrowRight
                        className="arrow"
                        onClick={() => handleAfter()}
                    />
                </CarrousselContent>
            </Main>
        </Container>
    );
};

export default PricingPage;
