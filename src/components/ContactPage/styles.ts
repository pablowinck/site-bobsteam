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

    background-color: ${(props) => props.theme.colors.neutral[100]};
    color: ${(props) => props.theme.colors.neutral[900]};

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
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
export const Input = styled.input`
    border: none;
    background-color: ${(props) => props.theme.colors.neutral[600]};
    color: ${(props) => props.theme.colors.neutral[100]};

    height: 3rem;
    padding: 0 1rem;
    border-radius: 8px;

    ::placeholder {
        color: ${(props) => props.theme.colors.neutral[400]};
    }
`;
export const Button = styled.button`
    height: 3rem;
    margin-top: 1rem;

    border: none;
    background-color: ${(props) => props.theme.colors.primary.main};
    color: ${(props) => props.theme.colors.neutral[900]};
    font-size: 1rem;
    font-weight: 800;

    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.theme.colors.primary.dark};
    }
`;
export const TextArea = styled.textarea`
    border: none;
    background-color: ${(props) => props.theme.colors.neutral[600]};
    color: ${(props) => props.theme.colors.neutral[100]};

    height: 3rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;

    ::placeholder {
        color: ${(props) => props.theme.colors.neutral[400]};
    }
`;
