import React, { useEffect, useRef } from 'react';
import videoBig from 'assets/video/production(1440p).mp4';
import videoSmall from 'assets/video/production(360p).mp4';
import { BgVideo, BgVideoContent } from './BgVideo.styles';

export const BgVideoWrapper = (): JSX.Element => {
    const noVideoInfo = 'Your browser does not support video';

    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (videoRef.current) {
            if (window.innerWidth <= 767) {
                videoRef.current.src = videoSmall;
            } else {
                videoRef.current.src = videoBig;
            }
            videoRef.current.load();
        }
    }, []);

    return (
        <BgVideo>
            <BgVideoContent ref={videoRef} autoPlay muted loop>
                <source />
                <source />
                {noVideoInfo}
            </BgVideoContent>
        </BgVideo>
    );
};
