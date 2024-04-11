import React from 'react';
import { Main } from './MainSection.styles';
import SectionAbout from 'components/organism/SectionAbout/SectionAbout';
import SectionOffers from 'components/organism/SectionOffers/SectionOffers';

const MainSection = (): JSX.Element => {
    return (
        <Main>
            <SectionAbout />
            <SectionOffers />
        </Main>
    );
};

export default MainSection;
