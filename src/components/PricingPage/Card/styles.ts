import { PatchCheckFill } from '@styled-icons/bootstrap/PatchCheckFill';
import styled from 'styled-components';

export const Container = styled.div`
    width: 400px;
    height: 500px;

    background-color: ${(props) => props.theme.colors.neutral[200]};

    display: grid;
    grid-template-rows: 5rem auto auto 3rem;
    grid-template-columns: auto;
    grid-template-areas:
        'title'
        'price'
        'desc'
        'button';
    justify-items: center;

    padding: 2rem 1rem;

    color: ${(props) => props.theme.colors.neutral[900]};
`;
export const Title = styled.div`
    grid-area: title;
    height: 2rem;
    width: 6rem;
    background-color: ${(props) => props.theme.colors.neutral[900]};
    color: ${(props) => props.theme.colors.neutral[100]};

    display: grid;
    place-items: center;
`;
export const Price = styled.div`
    grid-area: price;
    font-size: 3rem;
    font-weight: 800;
`;
export const Month = styled.div`
    display: grid;
    place-items: center;
    font-size: 1rem;
    font-weight: 10;

    color: ${(props) => props.theme.colors.neutral[700]};
`;
export const Content = styled.div`
    grid-area: desc;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    div {
        display: flex;
        gap: 1rem;
    }
`;
export const QualityIcon = styled(PatchCheckFill)`
    width: 1rem;
`;
export const Button = styled.button`
    grid-area: button;

    background: none;
    border: 1px solid ${(props) => props.theme.colors.neutral[700]};
    font-size: 1rem;
    padding: 0 1rem;

    font-weight: 800;

    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        background: ${(props) => props.theme.colors.neutral[900]};
        color: ${(props) => props.theme.colors.neutral[100]};
    }
`;
