import styled from 'styled-components/macro';
import { ITheme } from 'assets/styles/theme';
import { Section } from 'components/atoms/Section/Section.styles';
import { responsiveSize } from 'assets/styles/mixins.styles';

export const Section_About = styled(Section)`
    min-height: 70rem;
    padding: 5% 0;
    background-color: ${({ theme }: ITheme): string => theme.colors.greyLight1};

    @media ${responsiveSize.tabPort} {
        padding: 10rem 0;
    }
`;
