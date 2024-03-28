import React, { useEffect, useRef } from 'react';
import hederVideo from 'assets/video/LogoFull-compress.mp4';
import { BgVideo, BgVideoContent } from './BgVideo.styles';
import { Shadow } from '../Shadow/Shadow.styles';

export const BgVideoWrapper = (): JSX.Element => {
    const noVideoInfo = 'Your browser does not support video';

    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (videoRef.current) {
            if (window.innerWidth <= 767) {
                videoRef.current.src = hederVideo;
            } else {
                videoRef.current.src = hederVideo;
            }
            videoRef.current.load();
        }
    }, []);

    return (
        <>
            <Shadow />
            <BgVideo>
                <BgVideoContent ref={videoRef} autoPlay muted loop>
                    <source />
                    <source />
                    {noVideoInfo}
                </BgVideoContent>
            </BgVideo>
        </>
    );
};
