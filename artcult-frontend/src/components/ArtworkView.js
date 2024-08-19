// src/components/ArtworkView.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ArtworkView.css';
import { useAuth } from '../AuthContext';

const StarRating = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? 'star-filled' : 'star-empty'}>&#9733;</span>
    ));
  
    return <div className="star-rating-view">{stars}</div>;
  };

const ArtworkView = () => {
  const { artworkId } = useParams();
  const [artworkDetails, setArtworkDetails] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchArtworkDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/gallery/${artworkId}`);
        setArtworkDetails(response.data);
      } catch (error) {
        console.error('Error fetching artwork details:', error);
      }
    };

    fetchArtworkDetails();
  }, [artworkId]);

  const handleAddToCart = async () => {
    try {
      await axios.post('http://localhost:3001/api/cart', {
        galleryItemId: artworkId,
      });

      console.log('Item added to the cart successfully.');
    } catch (error) {
      console.error('Error adding item to the cart:', error);
    }
  };

  return (
    <div className="artwork-view">
      <div className="artwork-view-container">
        {artworkDetails ? (
          <>
            <div className="artwork-image">
              <img src={artworkDetails.image} alt={artworkDetails.title} />
            </div>
            <div className="artwork-details">
              <h2>{artworkDetails.title}</h2>
            <div className="ratings">
              <StarRating rating={artworkDetails.rating} />
            </div>
            <p>Artist: {artworkDetails.artist}</p>
            <p>Category: {artworkDetails.category}</p>
            <p>Price: ${artworkDetails.price}</p>
            <p>{artworkDetails.description}</p>
              <div className="buttons">
                <button className="buy-now">BUY NOW</button>
                <button className="add-to-cart" onClick={handleAddToCart}>
                  ADD TO CART
                </button>
              </div>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ArtworkView;
