import React from 'react';
import { BtnText } from 'components/atoms/Buttons/BtnText.styles';
import { Col1of3 } from 'components/atoms/Grid/Grid.styles';
import {
    BackSide,
    BackSideDetails,
    CardHeading,
    CardHeadingSpanFirst,
    CardWrapper,
    FrontSide,
    Li,
    SideFrontPictureFirst,
    Ul,
} from './CardProjects.styles';

interface ICardProjectsProps {
    imageUrl: string;
    firstDescription: string;
    firstAndHalf?: string;
    secondDescription: string;
    thirdDescription: string;
    fourthDescription: string;
    fifthDecription: string;
    buttonText: string;
    cardHeading: string;
    href: string;
}

const CardProjects = ({
    imageUrl,
    firstDescription,
    firstAndHalf,
    secondDescription,
    thirdDescription,
    fourthDescription,
    fifthDecription,
    buttonText,
    cardHeading,
    href,
}: ICardProjectsProps): JSX.Element => {
    return (
        <Col1of3>
            <CardWrapper>
                <FrontSide>
                    <SideFrontPictureFirst imageUrl={imageUrl}></SideFrontPictureFirst>
                    <CardHeading>
                        <CardHeadingSpanFirst>{cardHeading}</CardHeadingSpanFirst>
                    </CardHeading>
                </FrontSide>
                <BackSide>
                    <BackSideDetails>
                        <Ul>
                            <Li>{firstDescription}</Li>
                            {firstAndHalf && <Li>{firstAndHalf}</Li>}
                            <Li>{secondDescription}</Li>
                            <Li>{thirdDescription}</Li>
                            <Li>{fourthDescription}</Li>
                            <Li>{fifthDecription}</Li>
                        </Ul>
                        <BtnText href={href}>{buttonText}</BtnText>
                    </BackSideDetails>
                </BackSide>
            </CardWrapper>
        </Col1of3>
    );
};

export default CardProjects;
