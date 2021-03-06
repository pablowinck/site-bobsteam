import styled from 'styled-components';
export const Main = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
`;
export const Content = styled.div`
    width: 40rem;

    padding: 3rem;

    color: ${(props) => props.theme.colors.neutral[900]};

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    position: relative;

    ::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${(props) => props.theme.colors.neutral[100]};
        opacity: 0.8;
        border-radius: 8px;

        z-index: -1;
    }

    @media (max-width: 650px) {
        width: 35rem;
    }
`;
export const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 800;

    user-select: none;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
`;
export const Label = styled.label`
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 600;

    color: ${(props) => props.theme.colors.neutral[800]};
    margin-left: 0.5rem;
    margin-top: 1rem;
`;
export const Error = styled.label`
    color: #cc2936;
    margin-left: 0.5rem;
`;
export const Input = styled.input`
    border: none;
    background-color: ${(props) => props.theme.colors.neutral[600]};
    color: ${(props) => props.theme.colors.neutral[100]};

    height: 3rem;
    padding: 0 1rem;
    border-radius: 8px;
    font-size: 1rem;

    transition: all 0.3s ease-in-out;

    &:focus,
    &:hover,
    &:active {
        border: none;
        outline: none;
        background-color: ${(props) => props.theme.colors.neutral[700]};
    }

    ::placeholder {
        font-size: 1rem;
        color: ${(props) => props.theme.colors.neutral[400]};
    }
`;
export const Button = styled.button`
    height: 3rem;
    margin-top: 1rem;

    border: none;
    background-color: ${(props) => props.theme.colors.primary.dark};
    color: ${(props) => props.theme.colors.neutral[100]};
    font-size: 1rem;
    font-weight: 800;

    transition: all 0.3s ease-in-out;
    cursor: pointer;
    border-radius: 8px;

    &:hover {
        background-color: ${(props) => props.theme.colors.primary.main};
    }
`;
export const TextArea = styled.textarea`
    border: none;
    background-color: ${(props) => props.theme.colors.neutral[600]};
    color: ${(props) => props.theme.colors.neutral[100]};

    height: 3rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-size: 1rem;

    max-width: 100%;
    min-width: 100%;

    max-height: 10rem;

    transition: background-color 0.3s ease-in-out;

    &:focus,
    &:hover,
    &:active {
        border: none;
        outline: none;
        background-color: ${(props) => props.theme.colors.neutral[700]};
    }

    ::placeholder {
        color: ${(props) => props.theme.colors.neutral[400]};
        font-size: 1rem;
    }
`;
