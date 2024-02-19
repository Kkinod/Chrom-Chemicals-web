import React from 'react';
import { HeaderWrapper } from 'components/organism/Header/Header';
import Footer from 'components/organism/Footer/Footer';
import MainSection from 'components/templates/MainSection';
import Navigation from 'components/organism/Navigation/Navigation';
import Popup from 'components/molecules/Popup/Popup';
import { Popup2 } from 'components/molecules/Popup2/Popup2';
import { Popup3 } from 'components/molecules/Popup3/Popup3';

export const MainPage = (): JSX.Element => {
    return (
        <>
            <Navigation />
            <HeaderWrapper />
            <MainSection />
            <Footer />
            <Popup />
            <Popup2 />
            <Popup3 />
        </>
    );
};
