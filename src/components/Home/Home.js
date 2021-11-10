import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Support from '../Support/Support';

const Home = () => {
    return (
        <div id="home">
        <Navigation></Navigation>
        <Banner></Banner>
        <Support></Support>
        <Products></Products>
        <Reviews></Reviews>
        <Footer></Footer>
        </div>
    );
};

export default Home;