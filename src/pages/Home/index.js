import React from 'react';
import { Link } from 'react-router-dom';
import { VideoIframe } from '../../components/VideoIframe';
import SearchBar from '../../components/SearchBar';

import { Banner } from './styles';

import img1 from '../../assets/image1_banner.png';
import img2 from '../../assets/image2_banner.png';
import img3 from '../../assets/image3_banner.png';

export default function Home() {
  return (
    <>
      <Banner>
        <div>
          <Link to="/">
            <img src={img1} alt="img1" />

            <span>Lanches</span>
          </Link>
        </div>
        <div>
          <Link to="/about">
            <img src={img2} alt="img2" />

            <span>Restaurantes</span>
          </Link>
        </div>
        <div>
          <Link to="/">
            <img src={img3} alt="img3" />

            <span>Pizzas</span>
          </Link>
        </div>
      </Banner>
      <SearchBar />
      <VideoIframe />
    </>
  );
}
