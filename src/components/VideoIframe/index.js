import React from 'react';

import { Content, VideoFrame } from './styles';

export function VideoIframe() {
  return (
    <>
      <Content>
        <VideoFrame
          title="Titulo do Iframe"
          src="https://www.youtube.com/embed/RB-RcX5DS5A?autoplay=0&mute=1"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        <VideoFrame
          title="Titulo do Iframe"
          src="https://www.youtube.com/embed/pXRviuL6vMY?autoplay=0&mute=1"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Content>
    </>
  );
}
