import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Gallery.css';
import { Link } from 'react-router-dom';

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < rating ? 'star-filled' : 'star-empty'}>&#9733;</span>
  ));

  return <div className="star-rating">{stars}</div>;
};

const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    price: '',
    rating: '',
    artist: '',
  });

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/gallery');
        setGalleryData(response.data);
        setFilteredData(response.data);
      } catch (error) {
        console.error('Error fetching gallery data:', error);
      }
    };

    fetchGalleryData();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters, galleryData]);

  const applyFilters = () => {
    let filteredItems = [...galleryData];

    if (filters.category) {
      filteredItems = filteredItems.filter(item => item.category === filters.category);
    }

    if (filters.price) {
      filteredItems = filteredItems.filter(item => item.price <= parseInt(filters.price));
    }

    if (filters.rating) {
      filteredItems = filteredItems.filter(item => item.rating >= parseInt(filters.rating));
    }

    if (filters.artist) {
      filteredItems = filteredItems.filter(item => item.artist === filters.artist);
    }

    setFilteredData(filteredItems);
  };

  const handleFilterChange = (filterName, value) => {
    setFilters({ ...filters, [filterName]: value });
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Explore Cultural Masterpieces</h2>
      
      <div className="filters">

        <img className="filter-icon" src="../assets/filter-icon.png" alt="filter_icon"/>

        <select onChange={(e) => handleFilterChange('category', e.target.value)}>
          <option value="">Category</option>
          {/* Add category options dynamically based on data */}
          {Array.from(new Set(galleryData.map(item => item.category))).map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>

        <select onChange={(e) => handleFilterChange('price', e.target.value)}>
          <option value="">Price</option>
          <option value="50">Less than $50</option>
          <option value="100">Less than $100</option>
          <option value="200">Less than $200</option>
        </select>

        <select onChange={(e) => handleFilterChange('rating', e.target.value)}>
          <option value="">Rating</option>
          <option value="3">3 stars and above</option>
          <option value="4">4 stars and above</option>
          <option value="5">5 stars</option>
        </select>

        <select onChange={(e) => handleFilterChange('artist', e.target.value)}>
          <option value="">Artist</option>
          {/* Add artist options dynamically based on data */}
          {Array.from(new Set(galleryData.map(item => item.artist))).map(artist => (
            <option key={artist} value={artist}>{artist}</option>
          ))}
        </select>
      </div>

      <div className="product-boxes">
        {filteredData.map(item => (
          <Link key={item._id} to={`/artwork/${item._id}`} className="product-box-link">
          <div key={item._id} className="product-box">
            <img src={item.image} alt={item.title} />
            <div className="image-details">
              <div className="name-rating">
                <p>{item.title}</p>
                <StarRating rating={item.rating} />
              </div>
              <div className="price">
                <p>${item.price}</p>
              </div>
            </div>
            
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
