import React from 'react';
import logo from 'assets/logo/chemicals-noBg.png';
import { BtnText } from 'components/atoms/Buttons/BtnText.styles';
import { CloseIcon } from 'components/atoms/CloseIcon/CloseIcon.styles';
import { LeftBox, MainText, PopupContainer, PopupContent, PopupImg, RightBox, Subtitle, Title } from './Popup.styles';
import { labels } from 'views/labels';

export const Popup2 = (): JSX.Element => {
    return (
        <PopupContainer id="popup2">
            <PopupContent>
                <LeftBox>
                    <PopupImg src={logo} alt="logo" />
                </LeftBox>
                <RightBox>
                    <CloseIcon href="#section-projects">&times;</CloseIcon>
                    <Title>{labels.popup2.title}</Title>
                    <Subtitle>{labels.popup2.subtitle}</Subtitle>
                    <MainText>{labels.popup2.mainText}</MainText>
                    <div>
                        <BtnText href="#footer">{labels.popup.btnText}</BtnText>
                    </div>
                </RightBox>
            </PopupContent>
        </PopupContainer>
    );
};
