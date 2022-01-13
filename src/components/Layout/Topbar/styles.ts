import Link from 'next/link';
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
`;
export const Logotipo = styled.h1`
    font-size: 1.5rem;

    user-select: none;
`;
export const Nav = styled.div`
    display: flex;
    gap: 1rem;

    a {
        text-decoration: none;
        user-select: none;
        
        color: ${(props) => props.theme.colors.neutral[100]};
        transition: color 0.3s ease-in-out;
        
        &:hover {
            color: ${(props) => props.theme.colors.neutral[400]};
            
        }
`;
export const NavItem = styled(Link)``;
