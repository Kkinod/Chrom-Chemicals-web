import React, { useState } from 'react';
import firstPhoto from 'assets/img/Dzial-TRANSPORT.jpg';
// import firstPhoto from 'assets/img/zdjecie_biuro.webp';
import secondPhoto from 'assets/img/Dzial-CHEMIA.jpg';
// import thirdPhoto from 'assets/img/3.jpg';
import thirdPhoto from 'assets/img/3.jpg';
import { Col1of2, Row } from 'components/atoms/Grid/Grid.styles';
import { WrapperComposition } from './SectionAboutMain.styles';
import { FirstPhoto, SecondPhoto, ThirdPhoto } from 'components/atoms/CompositionPhotos/CompositionPhotos.styles';
import { labels } from 'views/labels';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph.styles';

const SectionAboutMain = (): JSX.Element => {
    const [hoveredPhoto, setHoveredPhoto] = useState<string | null>(null);

    return (
        <Row>
            <Col1of2>
                <Paragraph>{labels.sectionAbout.paragraph}</Paragraph>
                <Paragraph>{labels.sectionAbout.paragraph2}</Paragraph>
                <Paragraph>{labels.sectionAbout.paragraph3}</Paragraph>
            </Col1of2>
            <Col1of2>
                <WrapperComposition>
                    <FirstPhoto
                        src={firstPhoto}
                        alt="Wood floor 1"
                        onMouseEnter={(): void => setHoveredPhoto('first')}
                        onMouseLeave={(): void => setHoveredPhoto('first')}
                        hovered={hoveredPhoto === 'first'}
                    />
                    <SecondPhoto
                        src={secondPhoto}
                        alt="Wood floor 2"
                        onMouseEnter={(): void => setHoveredPhoto('second')}
                        hovered={hoveredPhoto === 'second'}
                    />
                    <ThirdPhoto
                        src={thirdPhoto}
                        alt="Wood floor 3"
                        onMouseEnter={(): void => setHoveredPhoto('third')}
                        hovered={hoveredPhoto === 'third'}
                    />
                </WrapperComposition>
            </Col1of2>
        </Row>
    );
};

export default SectionAboutMain;
