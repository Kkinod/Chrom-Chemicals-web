import React from 'react';
import { HeadingBox, HeadingPrimary, HeadingPrimaryMain, HeadingPrimarySecond } from './Heading.styles';
import { labels } from 'views/labels';

export const Heading = (): JSX.Element => {
    return (
        <HeadingBox>
            <HeadingPrimary>
                <HeadingPrimaryMain>{labels.header.headingPrimaryMainText}</HeadingPrimaryMain>
                <HeadingPrimarySecond>{labels.header.headingPrimarySecondText}</HeadingPrimarySecond>
            </HeadingPrimary>
        </HeadingBox>
    );
};
