import React, { useState, useEffect } from 'react';
import './SearchNews.css';
import axios from 'axios';

const countriesData = [
  { name: 'Argentina', code: 'ar', region: 'Americas' },
  { name: 'Australia', code: 'au', region: 'Oceania' },
  { name: 'Austria', code: 'at', region: 'Europe' },
  { name: 'Belgium', code: 'be', region: 'Europe' },
  { name: 'Brazil', code: 'br', region: 'Americas' },
  { name: 'Bulgaria', code: 'bg', region: 'Europe' },
  { name: 'Canada', code: 'ca', region: 'Americas' },
  { name: 'China', code: 'cn', region: 'Asia' },
  { name: 'Colombia', code: 'co', region: 'Americas' },
  { name: 'Cuba', code: 'cu', region: 'Americas' },
  { name: 'Czech Republic', code: 'cz', region: 'Europe' },
  { name: 'Egypt', code: 'eg', region: 'Africa' },
  { name: 'France', code: 'fr', region: 'Europe' },
  { name: 'Germany', code: 'de', region: 'Europe' },
  { name: 'Greece', code: 'gr', region: 'Europe' },
  { name: 'Hong Kong', code: 'hk', region: 'Asia' },
  { name: 'Hungary', code: 'hu', region: 'Europe' },
  { name: 'India', code: 'in', region: 'Asia' },
  { name: 'Indonesia', code: 'id', region: 'Asia' },
  { name: 'Ireland', code: 'ie', region: 'Europe' },
  { name: 'Israel', code: 'il', region: 'Asia' },
  { name: 'Italy', code: 'it', region: 'Europe' },
  { name: 'Japan', code: 'jp', region: 'Asia' },
  { name: 'South Korea', code: 'kr', region: 'Asia' },
  { name: 'Latvia', code: 'lv', region: 'Europe' },
  { name: 'Lithuania', code: 'lt', region: 'Europe' },
  { name: 'Malaysia', code: 'my', region: 'Asia' },
  { name: 'Mexico', code: 'mx', region: 'Americas' },
  { name: 'Morocco', code: 'ma', region: 'Africa' },
  { name: 'Netherlands', code: 'nl', region: 'Europe' },
  { name: 'New Zealand', code: 'nz', region: 'Oceania' },
  { name: 'Nigeria', code: 'ng', region: 'Africa' },
  { name: 'Norway', code: 'no', region: 'Europe' },
  { name: 'Philippines', code: 'ph', region: 'Asia' },
  { name: 'Poland', code: 'pl', region: 'Europe' },
  { name: 'Portugal', code: 'pt', region: 'Europe' },
  { name: 'Romania', code: 'ro', region: 'Europe' },
  { name: 'Russia', code: 'ru', region: 'Europe/Asia' },
  { name: 'Saudi Arabia', code: 'sa', region: 'Asia' },
  { name: 'Serbia', code: 'rs', region: 'Europe' },
  { name: 'Singapore', code: 'sg', region: 'Asia' },
  { name: 'Slovakia', code: 'sk', region: 'Europe' },
  { name: 'Slovenia', code: 'si', region: 'Europe' },
  { name: 'South Africa', code: 'za', region: 'Africa' },
  { name: 'Sweden', code: 'se', region: 'Europe' },
  { name: 'Switzerland', code: 'ch', region: 'Europe' },
  { name: 'Taiwan', code: 'tw', region: 'Asia' },
  { name: 'Thailand', code: 'th', region: 'Asia' },
  { name: 'Turkey', code: 'tr', region: 'Asia' },
  { name: 'Ukraine', code: 'ua', region: 'Europe' },
  { name: 'United Arab Emirates', code: 'ae', region: 'Asia' },
  { name: 'United Kingdom', code: 'gb', region: 'Europe' },
  { name: 'United States', code: 'us', region: 'Americas' },
  { name: 'Venezuela', code: 've', region: 'Americas' },
];

const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];

const CountryNewsSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [filteredCountries, setFilteredCountries] = useState(countriesData);
  const [news, setNews] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [error, setError] = useState(null);

  useEffect(() => {
    filterCountries();
  }, [searchTerm, selectedRegion]);

  const filterCountries = () => {
    let filtered = countriesData.filter(country =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (selectedRegion !== 'All') {
      filtered = filtered.filter(country => country.region === selectedRegion);
    }
    setFilteredCountries(filtered);
  };

  const fetchNews = async () => {
    if (selectedCountry) {
      try {
        const response = await axios.get(`https://api.thenewsapi.com/v1/news/top`, {
          params: {
            api_token: 'Vf7CI4z38vR3YKeA0c9MnoLt0ejSUkKSGWwpC2Xx',
            country: selectedCountry,
            category: selectedCategory,
          },
        });
        const data = response.data;
        if (data.meta && data.meta.returned > 0) {
          setNews(data.data);
          setError(null);
        } else {
          throw new Error('No news found');
        }
      } catch (error) {
        setError(error.message);
        setNews(null);
      }
    }
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(country.code);
    setNews(null);
    setError(null);
  };

  const handleSubmit = () => {
    fetchNews();
  };

  const handleCountryClickAndSubmit = (country) => {
    handleCountryClick(country);
    handleSubmit();
  };

  return (
    <div className="search-wrapper my-2 w-100" id='GetNews'>
      <div className="container-fluid search-news w-100">
        <div className="search-panel">
          <h1 className='text-light text-center'>Search World News</h1>
          <input
            type="text"
            placeholder="Search for a country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
          >
            {regions.map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <button onClick={handleSubmit}>Submit</button>
          <div>
            <ul className="country-list">
              {filteredCountries.slice(0, 9).map(country => (
                <li key={country.code} onClick={() => handleCountryClickAndSubmit(country)}>
                  {country.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="news-panel">
          {selectedCountry && (
            <div>
              <h2>Here is what's happening in {countriesData.find(c => c.code === selectedCountry)?.name} in {selectedCategory}.</h2>
              {error ? (
                <p className="error">{error}</p>
              ) : (
                news ? (
                  <div className="news-cards">
                    {news.map((article, index) => (
                      <div key={article.uuid} className="news-card">
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                          <img
                            src={article.image_url || 'default-image-url.jpg'}
                            alt={article.title}
                            className="news-image"
                          />
                          <div className="news-title">{article.title}</div>
                          <p className="news-description">{article.description}</p>
                          <p className="news-source">{article.source}</p>
                        </a>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="loading">Loading news...</p>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryNewsSearch;