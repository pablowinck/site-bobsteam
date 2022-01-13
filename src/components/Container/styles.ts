import styled from 'styled-components';

export const Content = styled.div`
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
