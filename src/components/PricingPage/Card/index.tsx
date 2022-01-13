import Link from 'next/link';
import React from 'react';
import { pricing } from '..';
import {
    Button,
    Container,
    Content,
    Month,
    Price,
    QualityIcon,
    Title
} from './styles';

type CardProps = {
    item: pricing;
};

const Card: React.FC<CardProps> = ({ item }) => {
    return (
        <Container>
            <Title>{item.title}</Title>
            <Price>
                {item.price}
                <Month>/month</Month>
            </Price>

            <Content>
                {item.content.map((content, index) => (
                    <div key={index}>
                        <QualityIcon />
                        <p>{content}</p>
                    </div>
                ))}
            </Content>
            <Link href="/contact" passHref>
                <Button> CONTRATAR </Button>
            </Link>
        </Container>
    );
};

export default Card;
