import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: flex;
    justify-content: start;
    align-items: center;

    color: ${(props) => props.theme.colors.neutral[100]};

    position: relative;

    ::after {
        position: absolute;
        content: '';
        background: linear-gradient(black, rgb(200, 200, 200)),
            url('images/banner1.jpg') no-repeat center;
        background-size: cover;
        background-blend-mode: darken;
        filter: grayscale(100%);

        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -2;
    }

    ::before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: black;
        opacity: 0.5;
        z-index: -1;
    }
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 40rem;
    margin-left: 5rem;
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
