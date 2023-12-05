import React, { useState } from 'react';
import StockList from '../components/Analyze/StockList';
import HeadlineCard from '../components/Headlines/HeadlineCard';
import Pagination from '../components/Headlines/Pagination';

const HeadlinesPage = () => {
  const [selectedStock, setSelectedStock] = useState(null);
  const [headlines, setHeadlines] = useState([]); // Replace with actual API call
  const [currentPage, setCurrentPage] = useState(1);
  const [headlinesPerPage] = useState(10); // Default to 10, can be changed

  const handleStockSelect = (stock) => {
    setSelectedStock(stock);
    // Fetch headlines for the selected stock and update state
    // setHeadlines(fetchHeadlinesForStock(stock));
  };

  // Get current headlines
  const indexOfLastHeadline = currentPage * headlinesPerPage;
  const indexOfFirstHeadline = indexOfLastHeadline - headlinesPerPage;
  const currentHeadlines = headlines.slice(indexOfFirstHeadline, indexOfLastHeadline);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-row min-h-screen bg-gray-100">
      <div className="w-1/4 bg-white">
        <StockList onSelectStock={handleStockSelect} />
      </div>
      <div className="w-3/4 bg-gray-200 p-4">
        {selectedStock && (
          <>
            <h2 className="text-xl font-bold mb-4">Headlines for {selectedStock.name}</h2>
            <div>
              {currentHeadlines.map((headline, index) => (
                <HeadlineCard key={index} headline={headline} />
              ))}
            </div>
            <Pagination
              headlinesPerPage={headlinesPerPage}
              totalHeadlines={headlines.length}
              paginate={paginate}
            />
          </>
        )}
        {!selectedStock && <div>Select a stock to view headlines.</div>}
      </div>
    </div>
  );
};

export default HeadlinesPage;
