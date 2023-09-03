import { responsiveSize } from 'assets/styles/mixins.styles';
import styled from 'styled-components/macro';

export const LogoBox = styled.div`
    position: fixed;
    z-index: 10000;
    left: 4rem;
    margin-top: 2rem;
`;

export const LogoImg = styled.img`
    height: 15vh;

    @media ${responsiveSize.phone} { // <= 600px
        /* height: 20rem; */
    };

    @media ${responsiveSize.phoneRotated} { // <= w900px and h600px
        /* height: 20rem; */
    };
`;
