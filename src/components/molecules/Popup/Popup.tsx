import React from 'react';
import logo from 'assets/logo/chemicals-noBg.png';
import { BtnText } from 'components/atoms/Buttons/BtnText.styles';
import { CloseIcon } from 'components/atoms/CloseIcon/CloseIcon.styles';
import { LeftBox, MainText, PopupContainer, PopupContent, PopupImg, RightBox, Subtitle, Title } from './Popup.styles';
import { labels } from 'views/labels';

const Popup = (): JSX.Element => {
    return (
        <PopupContainer id="popup">
            <PopupContent>
                <LeftBox>
                    <PopupImg src={logo} alt="logo" />
                </LeftBox>
                <RightBox>
                    <CloseIcon href="#section-projects">&times;</CloseIcon>
                    <Title>{labels.popup.title}</Title>
                    <Subtitle>{labels.popup.subtitle}</Subtitle>
                    <MainText>{labels.popup.mainText}</MainText>
                    <div>
                        <BtnText href="#footer">{labels.popup.btnText}</BtnText>
                    </div>
                </RightBox>
            </PopupContent>
        </PopupContainer>
    );
};

export default Popup;
