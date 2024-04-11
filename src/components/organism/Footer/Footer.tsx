import { Shadow } from 'components/atoms/Shadow/Shadow.styles';
import React from 'react';
import {
    FooterList,
    FooterListItem,
    FooterLogoBox,
    FooterNavigation,
    FooterSection,
    StyledRow,
    Title,
} from './Footer.styles';
import { Col1of2 } from 'components/atoms/Grid/Grid.styles';

const Footer = (): JSX.Element => {
    return (
        <FooterSection id="footer">
            <Shadow />
            <FooterLogoBox></FooterLogoBox>
            <StyledRow>
                <Col1of2>
                    <FooterNavigation>
                        <FooterList>
                            <FooterListItem>
                                <Title>CHROM CHEMICALS</Title>
                                <div>ul. Dworcowa 8</div>
                                <div>44-240 Żory</div>
                                <div>Email: info@chromchemicals.eu</div>
                                <div>NIP: 6332068882</div>
                            </FooterListItem>
                        </FooterList>
                    </FooterNavigation>
                </Col1of2>
                <Col1of2>
                    <FooterNavigation>
                        <FooterList>
                            <FooterListItem>
                                <br />
                                <Title>PRODUCT MENAGER</Title>
                                <div>Waldemar Chromiec</div>
                                <div>tel. 0048 784 881 899</div>
                                <div>waldemar.chromiec@chromchemicals.eu</div>
                            </FooterListItem>
                            <FooterListItem>
                                <br />
                                <Title>TRANSPORT MENAGER</Title>
                                <div>Monika Chromiec</div>
                                <div>tel. 0048 734 102 069</div>
                                <div>monika.chromiec@chromchemicals.eu</div>
                            </FooterListItem>
                        </FooterList>
                    </FooterNavigation>
                </Col1of2>
            </StyledRow>
        </FooterSection>
    );
};

export default Footer;
