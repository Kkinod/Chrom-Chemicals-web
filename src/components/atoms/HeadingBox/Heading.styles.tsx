import styled from 'styled-components/macro';
import { animationMoveInLeft, animationMoveInRight } from 'assets/styles/animations.styles';
import { ITheme } from 'assets/styles/theme';

export const HeadingBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`;

export const HeadingPrimary = styled.h1`
    color: ${({ theme }: ITheme): string => theme.colors.white};
`;

export const HeadingPrimaryMain = styled.span`
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 7rem;
    font-weight: 900;
    text-transform: uppercase;
    text-shadow: 5px 6px 5px black;
    color: ${({ theme }: ITheme): string => theme.colors.secondary};
    animation: ${animationMoveInLeft} 1s;
`;

export const HeadingPrimarySecond = styled.span`
    display: block;
    font-family: Garamond;
    font-size: 6rem;
    font-weight: 200;
    /* text-transform: capitalize; */
    animation: ${animationMoveInRight} 1s;

    text-shadow: 5px 6px 5px black;
    font-style: oblique;
    letter-spacing: 6px;
`;
