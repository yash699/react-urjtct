import React from 'react';

import Header_sidebar from './component/Header_sidebar';

import Carousel from './component/Carousel';

import Caro1 from './component/Caro1';

import Footer from './component/footer';

import Poster from './component/poster';

import Demo from './component/Demo';

import Navbar from './component/Navbar';

import Main_body from './component/Main_body';

import Rope from './component/Rope';
import Product from './component/Product';

export default function App() {
  return (
    <div>
      <Navbar />

      <Carousel />

      <Poster />

      <Product />

      <Poster />

      <Product />

      <Demo />
    </div>
  );
}
