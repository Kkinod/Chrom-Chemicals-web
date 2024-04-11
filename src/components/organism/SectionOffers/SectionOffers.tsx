import React from 'react';
import { Section_Offers, ShadowBgOffer } from './SectionOffers.styles';
import { Row } from 'components/atoms/Grid/Grid.styles';
import CardProjects from 'components/molecules/CardProjects/CardProjects';
import CenterHeadingSecondary from 'components/molecules/CenterHeadingSecondary/CenterHeadingSecondary';
import Chemia from 'assets/img/Dzial-CHEMIA.jpg';
import Gaz from 'assets/img/Dzial-GAZ.jpg';
import Transport from 'assets/img/Dzial-TRANSPORT2.jpg';
import { labels } from 'views/labels';

const SectionOffers = (): JSX.Element => {
    return (
        <Section_Offers id={labels.navigationList.forwardingSectionId}>
            <ShadowBgOffer />
            <CenterHeadingSecondary headingText={labels.sectionOffers.heading} />
            <Row>
                <CardProjects
                    imageUrl={Gaz}
                    firstDescription={labels.sectionOffers.firtstCard.firstDescription}
                    secondDescription={labels.sectionOffers.firtstCard.secondDescription}
                    thirdDescription={labels.sectionOffers.firtstCard.thirdDescription}
                    fourthDescription={labels.sectionOffers.firtstCard.fourthDescription}
                    fifthDecription={labels.sectionOffers.firtstCard.fifthDecription}
                    buttonText={labels.sectionOffers.buttonCardText}
                    cardHeading={labels.sectionOffers.firtstCard.heading}
                    href="#popup"
                />
                <CardProjects
                    imageUrl={Chemia}
                    firstDescription={labels.sectionOffers.secondCard.firstDescription}
                    firstAndHalf={labels.sectionOffers.secondCard.toluen}
                    secondDescription={labels.sectionOffers.secondCard.secondDescription}
                    thirdDescription={labels.sectionOffers.secondCard.thirdDescription}
                    fourthDescription={labels.sectionOffers.secondCard.fourthDescription}
                    fifthDecription={labels.sectionOffers.secondCard.fifthDecription}
                    buttonText={labels.sectionOffers.buttonCardText}
                    cardHeading={labels.sectionOffers.secondCard.heading}
                    href="#popup2"
                />
                <CardProjects
                    imageUrl={Transport}
                    firstDescription={labels.sectionOffers.thirdCard.firstDescription}
                    secondDescription={labels.sectionOffers.thirdCard.secondDescription}
                    thirdDescription={labels.sectionOffers.thirdCard.thirdDescription}
                    fourthDescription={labels.sectionOffers.thirdCard.fourthDescription}
                    fifthDecription={labels.sectionOffers.thirdCard.fifthDecription}
                    buttonText={labels.sectionOffers.buttonCardText}
                    cardHeading={labels.sectionOffers.thirdCard.heading}
                    href="#popup3"
                />
            </Row>
        </Section_Offers>
    );
};

export default SectionOffers;
