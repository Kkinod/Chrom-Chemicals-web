import React from 'react';
import { LogoBox, LogoImg } from './Logo.styles';
import LogoNoBg from 'assets/logo/chemicals-noBg.png';

const Logo = (): JSX.Element => {
    return (
        <LogoBox>
            <LogoImg src={LogoNoBg}></LogoImg>
        </LogoBox>
    );
};

export default Logo;
