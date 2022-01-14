import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    margin: auto;

    height: 3rem;
    width: 25vw;
    border-radius: 12px;

    background-color: ${(props) => props.theme.colors.primary.main};

    display: grid;
    place-items: center;

    h1 {
        font-size: 1rem;
        font-weight: 400;
        text-align: center;
        color: ${(props) => props.theme.colors.neutral[900]};
    }
`;
