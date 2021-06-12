import React from 'react';
import { VideoIframe } from '../../components/VideoIframe';
import SearchBar from '../../components/SearchBar';

// import { Container } from './styles';

export default function Home() {
  return (
    <>
      <SearchBar />
      <VideoIframe />
    </>
  );
}
