import React from 'react';
import { Container } from './styles';

type Props = {
    success: boolean;
    setSuccess: (value: boolean) => void;
};

const Success: React.FC<Props> = ({ success, setSuccess }) => {
    return success ? (
        <Container>
            <h1>Mensagem enviada com sucesso!</h1>
        </Container>
    ) : (
        <div />
    );
};

export default Success;
