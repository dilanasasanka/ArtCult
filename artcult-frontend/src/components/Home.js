// src/components/Home.js
import React from 'react';
import './Home.css';

const Home = () => {

  return (
    <div className="home-container">
      <section className="home-land">
        <h2>DISCOVER THE <br/>BEAUTY OF CULTURE</h2>
        <h6>FIND YOUR PERFECT PIECE TODAY</h6>
      </section>
      <section className="featured-artworks">
        <h2>Featured Artworks</h2>
        <div className="wrapper">
          <div className="item">
            <img src="../assets/featured-artwork-1.png" alt="featured_artwork"/>
          </div>
          <div className="item">
            <img src="../assets/featured-artwork-2.png" alt="featured_artwork"/>
          </div>
          <div className="item">
            <img src="../assets/featured-artwork-3.png" alt="featured_artwork"/>
          </div>
          <div className="item">
            <img src="../assets/featured-artwork-4.png" alt="featured_artwork"/>
          </div>
          <div className="item">
            <img src="../assets/featured-artwork-1.png" alt="featured_artwork"/>
          </div>
          <div className="item">
            <img src="../assets/featured-artwork-2.png" alt="featured_artwork"/>
          </div>
          <div className="item">
            <img src="../assets/featured-artwork-3.png" alt="featured_artwork"/>
          </div>
          <div className="item">
            <img src="../assets/featured-artwork-4.png" alt="featured_artwork"/>
          </div>
        </div>
      </section>

      <section className="about-us">
        <h2>About Us</h2>
        <p>At ArtCult, our mission is to bridge the gap between cultures through the universal language of art. We believe that each brushstroke, every intricate detail, tells a story that transcends borders. Our platform is a celebration of diversity, aiming to connect art enthusiasts with the rich tapestry of cultural expressions from around the world.</p>
        <p>Immerse yourself in the vibrant hues of tradition and the bold strokes of modernity. From the timeless elegance of traditional masterpieces to the avant-garde expressions of contemporary artists, we are fueled by a fervent passion for preserving, promoting, and reveling in the beauty of cultural art. Join us on a journey where creativity knows no boundaries, and every piece narrates a tale of heritage, innovation, and the boundless power of artistic expression.</p>
        {/* Add about us content */}
      </section>

      <section className="shop-by-category">
        <h2>Shop by Category</h2>
        <div className="category-button-group">
        <div className="category-button" id="category-button-1">Abstract</div>
        <div className="category-button" id="category-button-2">Cultural</div>
        <div className="category-button" id="category-button-3">Contemporary</div>
        <div className="category-button" id="category-button-4">Traditional</div>
        </div>
        {/* Add shop by category content */}
      </section>

      <section className="artist-spotlight">
        <h2>Artist Spotlight</h2>
        <div className="artist-box">
          <div className="artist-description">
            <h2>Andrew Simmons</h2>
            <p>Andrew Simmons, a virtuoso in abstract art, wields a brush with unparalleled mastery, creating canvases that transcend boundaries. His work reflects a fusion of skillful technique and an innate ability to channel emotion onto the canvas, making each painting a mesmerizing journey into abstract expressionism.</p>
            <p>Simmons' best works resonate with an enigmatic energy, captivating audiences with their dynamic interplay of form and space. His unique blend of precision and spontaneity challenges traditional aesthetics, offering a refreshing perspective. In his hands, abstract art becomes a captivating symphony that leaves an indelible mark on contemporary artistic expression.</p>
          </div>
          <img className='artist-image' src="../assets/artist-image-1.png" alt="artist_image"/>
        </div>

        <div className="artist-box" id="artist-box-2">
        <img className='artist-image' src="../assets/artist-image-2.png" alt="artist_image"/>
          <div className="artist-description">
            <h2>Clara Macberth</h2>
            <p>Andrew Simmons, a virtuoso in abstract art, wields a brush with unparalleled mastery, creating canvases that transcend boundaries. His work reflects a fusion of skillful technique and an innate ability to channel emotion onto the canvas, making each painting a mesmerizing journey into abstract expressionism.</p>
            <p>Simmons' best works resonate with an enigmatic energy, captivating audiences with their dynamic interplay of form and space. His unique blend of precision and spontaneity challenges traditional aesthetics, offering a refreshing perspective. In his hands, abstract art becomes a captivating symphony that leaves an indelible mark on contemporary artistic expression.</p>
          </div>
          
        </div>
        {/* Add artist spotlight content */}
      </section>

      <section className="customer-feedback">
        <h2>Customer Feedback</h2>
        {/* Add customer feedback content */}
      </section>
    </div>
  );
};

export default Home;
