import React from 'react';

import { AboutUs, Chef, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
import NewsLetter from './container/NewsLetter/NewsLetter';
import Footer1 from './container/Footer/Footer1';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <NewsLetter />
    <Footer1 />
  </div>
);

export default App;
