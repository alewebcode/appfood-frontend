import React from 'react';
import { Link } from 'react-router-dom';
import { VideoIframe } from '../../components/VideoIframe';
import SearchBar from '../../components/SearchBar';

import { Banner } from './styles';

import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.png';
import banner3 from '../../assets/banner3.png';

export default function Home() {
  return (
    <>
      <Banner>
        <div>
          <Link to="/lista-lojas">
            <img src={banner1} alt="img1" />

            {/* <span>Lanches</span> */}
          </Link>
        </div>
        <div>
          <Link to="/loja">
            <img src={banner2} alt="img2" />

            {/* <span>Restaurantes</span> */}
          </Link>
        </div>
        <div>
          <Link to="/about">
            <img src={banner3} alt="img3" />

            {/* <span>Pizzas</span> */}
          </Link>
        </div>
      </Banner>
      <SearchBar />
      <VideoIframe />
    </>
  );
}
