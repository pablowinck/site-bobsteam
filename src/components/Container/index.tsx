import React from 'react';
import { Content } from './styles';

type IProps = {
    children: React.ReactNode;
    image: string;
};

const Container: React.FC<IProps> = ({ image, children }) => {
    return <Content>{children}</Content>;
};
export default Container;
