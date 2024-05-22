import React from 'react';
import './GlobalNews.css';

import Card1 from '../../img/card1.jpg';
import Card2 from '../../img/card2.jpg';
import Card3 from '../../img/card3.jpg';
import Card4 from '../../img/card4.jpeg';
import Card5 from '../../img/card5.jpg';

const cardsData = [
  {
    img: Card1,
    title: 'Breaking News: Global Market Trends',
    text: 'Stay ahead with the latest updates on global market trends. Discover how shifts in the market can impact your investments and business strategies.',
  },
  {
    img: Card2,
    title: 'Tech Innovations of 2024',
    text: 'Explore the groundbreaking technological innovations of this year. From AI advancements to the latest gadgets, stay informed on what’s shaping our future.',
  },
  {
    img: Card3,
    title: 'Environmental News: Climate Change Impacts',
    text: 'Get the latest insights on climate change and its impacts across the globe. Learn about new initiatives and scientific discoveries aimed at combating this crisis.',
  },
  {
    img: Card4,
    title: 'Political Shifts and Global Relations',
    text: 'Understand the changing political landscape with in-depth analysis of global relations. Discover how international politics affect global stability and economies.',
  },
  {
    img: Card5,
    title: 'Health Updates: Global Pandemic News',
    text: 'Stay updated with the latest news on global health, including updates on the pandemic, vaccine developments, and health policies around the world.',
  },
  {
    img: Card5,
    title: 'Health Updates: Global Pandemic News',
    text: 'Stay updated with the latest news on global health, including updates on the pandemic, vaccine developments, and health policies around the world.',
  },
];

const GlobalNews = () => {
  return (
    <>
      <div className="container-fluid my-3">
        <div className="row mb-4">
          <div className="col-12 text-center text-light">
            <h1 className="section-title text-light text-center">Experience the Pulse of the World</h1>
            <p className="section-description">
  Immerse yourself in the ultimate news experience with unparalleled coverage 
  from every corner of the globe. Discover in-depth analysis, expert insights, 
  and the most impactful headlines. Stay perpetually informed about pivotal 
  events shaping our world with our cutting-edge reporting and comprehensive features, 
  ensuring you never miss a beat.
</p>

          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {cardsData.map((card, index) => (
            <div className="col" key={index}>
              <div className="card h-100"
              style={{}}>
                <img src={card.img} className="card-img-top" alt={card.title} />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GlobalNews;
