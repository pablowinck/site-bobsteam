import styled from 'styled-components';
export const Main = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;

    width: 30rem;

    gap: 1rem;
`;
export const Title = styled.div`
    font-size: 3rem;
    font-weight: 600;
`;
export const Paragraph = styled.div`
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.neutral[400]};
`;
export const Button = styled.button`
    border: none;
    background-color: ${(props) => props.theme.colors.primary.main};

    height: 3rem;
    border-radius: 18px;
    margin-top: 1rem;

    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.theme.colors.primary.dark};
    }

    text-decoration: none;
    text-transform: uppercase;
    font-weight: 800;
    color: ${(props) => props.theme.colors.neutral[900]};
`;
