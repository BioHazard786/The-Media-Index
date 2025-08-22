'use client';

import { useState } from 'react';
import './search.css';
import { useSearchParams } from 'next/navigation';
import { FaSearch, FaTags, FaTimes } from 'react-icons/fa';
import ThemeSwitcher from '@/components/theme-switcher';
import MediaGrid from './media-grid';

function Search() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get('search') || ''
  );

  const resetSearch = () => {
    setSearchTerm('');
  };

  return (
    <>
      <div className="search-feild">
        <FaSearch className="search-icon" />
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          type="text"
          value={searchTerm}
        />
        {searchTerm && <FaTimes className="cross-icon" onClick={resetSearch} />}
      </div>
      <div className="secondary-filters">
        {searchTerm && (
          <div className="sub-search">
            <FaTags className="tags-icon" />
            <div className="sub-search-container">
              <span className="sub-search-text">Search: {searchTerm}</span>
              <FaTimes className="sub-cross-icon" onClick={resetSearch} />
            </div>
          </div>
        )}
        <ThemeSwitcher />
      </div>
      <MediaGrid searchTerm={searchTerm} />
    </>
  );
}

export default Search;
