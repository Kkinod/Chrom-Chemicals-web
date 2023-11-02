import styled from 'styled-components/macro';
import { responsiveSize } from 'assets/styles/mixins.styles';
import { Section } from 'components/atoms/Section/Section.styles';
import { ITheme } from 'assets/styles/theme';

export const Section_Offers = styled(Section)`
    padding: 5% 0;
    /* background-color: ${({ theme }: ITheme): string => theme.colors.greyLight1}; */
    background-color: ${({ theme }: ITheme): string => theme.colors.black};

    @media ${responsiveSize.tabPort} {
        padding: 6rem 0;
        height: auto;
    }
`;

export const BtnWrapper = styled.div`
    text-align: center;

    @media ${responsiveSize.tabPort} {
        margin-bottom: 0;
    }
`;
