import styled from 'styled-components';
import { ITheme } from 'assets/styles/theme';

export const Shadow = styled.div`
    position: absolute;
    z-index: -1;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        to bottom,
        rgba(${({ theme }: ITheme): string => theme.colors.blackRgb}, 0.9),
        rgba(${({ theme }: ITheme): string => theme.colors.blackRgb}, 0.5)
    );

 
    /* mask-image: linear-gradient(to top left, transparent 50%, black 50%), 
                linear-gradient(to top right, transparent 50%, black 50%);
    mask-size: 100% 100%;
    mask-position: center;
    mask-repeat: no-repeat; */
`;
