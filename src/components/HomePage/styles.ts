import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 40rem;

    margin-left: 20vw;

    @media (max-width: 650px) {
        margin-left: 10vw;
    }
`;
export const Title = styled.div`
    font-size: 3.75rem;

    strong {
        color: ${(props) => props.theme.colors.primary.main};
    }
`;
export const Description = styled.div`
    font-size: 1.5rem;
    font-weight: 300;

    color: ${(props) => props.theme.colors.neutral[400]};
`;
export const Button = styled.button`
    border: none;
    background-color: ${(props) => props.theme.colors.primary.main};

    color: ${(props) => props.theme.colors.neutral[900]};
    font-size: 1rem;
    font-weight: 800;

    width: 15rem;
    height: 3rem;
    margin-top: 1rem;

    border-radius: 18px;

    text-transform: uppercase;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.theme.colors.primary.dark};
    }
`;
