import { Shadow } from 'components/atoms/Shadow/Shadow.styles';
import React from 'react';
import {
    FooterCopyright,
    FooterList,
    FooterListItem,
    FooterListItemLink,
    FooterLogo,
    FooterLogoBox,
    FooterNavigation,
    FooterSection,
    StyledRow,
    Title,
} from './Footer.styles';
import logoBronze from 'assets/logo/Logo-bronze/logo_bronze.png';
import { Col1of2, Row } from 'components/atoms/Grid/Grid.styles';
import { labels } from 'views/labels';

const Footer = (): JSX.Element => {
    return (
        <FooterSection id="footer">
            <Shadow />
            <FooterLogoBox>{/* <FooterLogo src={logoBronze} alt="logo_bronze" /> */}</FooterLogoBox>
            <StyledRow>
                <Col1of2>
                    <FooterNavigation>
                        <FooterList>
                            <FooterListItem>
                                {/* <FooterListItemLink href={labels.footer.itemLinkHrefFirst}> */}
                                <Title>CHROM CHEMICALS</Title>
                                <div>ul. Gajowa 13A</div>
                                <div>44-240 Żory</div>
                                <div>Email: info@chromchemicals.eu</div>
                                <div>NIP: 6332068882</div>
                                {/* </FooterListItemLink> */}
                            </FooterListItem>
                        </FooterList>
                    </FooterNavigation>
                </Col1of2>
                <Col1of2>
                    <FooterNavigation>
                        <FooterList>
                            <FooterListItem>
                                {/* <FooterListItemLink href={labels.footer.itemLinkHrefFirst}> */}
                                <br />
                                <Title>PRODUCT MENAGER</Title>
                                <div>Waldemar Chromiec</div>
                                <div>tel. 0048 784 881 899</div>
                                <div>waldemar.chromiec@chromchemicals.eu</div>
                                {/* </FooterListItemLink> */}
                            </FooterListItem>
                            <FooterListItem>
                                {/* <FooterListItemLink href={labels.footer.itemLinkHrefFirst}> */}
                                <br />
                                <Title>TRANSPORT MENAGER</Title>
                                <div>Monika Chromiec</div>
                                <div>tel. 0048 734 102 069</div>
                                <div>monika.chromiec@chromchemicals.eu</div>
                                {/* </FooterListItemLink> */}
                            </FooterListItem>
                        </FooterList>
                    </FooterNavigation>
                </Col1of2>
            </StyledRow>
        </FooterSection>
    );
};

export default Footer;
