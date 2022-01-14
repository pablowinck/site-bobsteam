import { ArrowLeftCircleFill } from '@styled-icons/bootstrap/ArrowLeftCircleFill';
import { ArrowRightCircleFill } from '@styled-icons/bootstrap/ArrowRightCircleFill';
import styled from 'styled-components';
export const Main = styled.div`
    display: grid;
    place-items: center;
    grid-gap: 1rem;
    width: 100%;
`;
export const Content = styled.div`
    display: flex;

    gap: 1rem;

    @media (max-width: 1240px) {
        display: none;
    }
`;
export const CarrousselContent = styled.div`
    display: none;

    @media (max-width: 1240px) {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    .arrow {
        width: 3rem;

        transition: all 0.3s ease-in-out;
        cursor: pointer;

        &:hover {
            transform: scale(1.1);
        }
    }
`;
export const ArrowLeft = styled(ArrowLeftCircleFill)``;
export const ArrowRight = styled(ArrowRightCircleFill)``;
export const Title = styled.div`
    font-size: 2rem;
    font-weight: 800;
`;
