import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    z-index: 10;

    width: 100%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    padding: 0.5rem;

    color: ${(props) => props.theme.colors.neutral[100]};

    @media (max-width: 650px) {
        padding: 1rem;
    }
`;
export const Logotipo = styled.h1`
    font-size: 1.5rem;

    user-select: none;

    @media (max-width: 650px) {
        font-size: 2rem;
    }
`;
export const Nav = styled.div`
    display: flex;
    gap: 1rem;

    a {
        text-decoration: none;
        user-select: none;
    }

    @media (max-width: 650px) {
        font-size: 1.2rem;
    }
`;
export const NavItem = styled.div<{ isSelected }>`
    user-select: none;
    cursor: pointer;

    color: ${(props) => props.theme.colors.neutral[100]};
    transition: color 0.3s ease-in-out;

    font-weight: ${(props) => (props.isSelected ? '800' : '300')};

    &:hover {
        color: ${(props) => props.theme.colors.neutral[400]};
    }
`;
