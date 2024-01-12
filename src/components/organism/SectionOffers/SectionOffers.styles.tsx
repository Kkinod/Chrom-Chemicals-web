import styled from 'styled-components/macro';
import { responsiveSize } from 'assets/styles/mixins.styles';
import { Section } from 'components/atoms/Section/Section.styles';
import { ITheme } from 'assets/styles/theme';
import Background from 'assets/img/Background.jpg';

export const Section_Offers = styled(Section)`
    position: relative;
    padding: 5% 0;
    /* background-color: ${({ theme }: ITheme): string => theme.colors.black}; */
    background-image: url(${Background});
    background-position: center;
    background-size: cover;
    background-attachment: fixed;

    @media ${responsiveSize.tabPort} {
        padding: 3rem 0;
        height: auto;
    }
`;

export const BtnWrapper = styled.div`
    text-align: center;

    @media ${responsiveSize.tabPort} {
        margin-top: 3rem;
        margin-bottom: 0;
    }
`;

export const ShadowBgOffer = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        to bottom,
        rgba(${({ theme }: ITheme): string => theme.colors.blackRgb}, 0.9),
        transparent
    );
`;
