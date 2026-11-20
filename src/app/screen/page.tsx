'use client';

import VideoPlayer from '@/components/VideoPlayer/VideoPlayer';
import React, { useEffect } from 'react';
import { useVideoContext } from '@/components/VideoContextProvider/VideoContextProvider';
import { useRouter } from 'next/navigation';

const Screen = () => {
    const { videoUrl, videoName, subtitleSrc } = useVideoContext();
    const router = useRouter();

    useEffect(() => {
        if (!videoUrl.length) {
            router.replace('/');
        }
    }, [videoUrl, router]);

    if (!videoUrl.length) {
        return null;
    }

    return (
        <div className='App App-screen'>
            <VideoPlayer
                videoName={videoName}
                videoSrc={videoUrl}
                subtitleSrc={subtitleSrc}
            />
        </div>
    );
};

export default Screen;
