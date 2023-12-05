import React, { useState } from 'react';
import StockList from '../components/Analyze/StockList';
import ChatInterface from '../components/Analyze/ChatInterface';

const AnalyzePage = () => {
  const [selectedStock, setSelectedStock] = useState(null);

  const handleStockSelect = (stock) => {
    setSelectedStock(stock);
    // Additional logic when a stock is selected, if necessary
  };

  return (
    <div className="flex flex-row min-h-screen bg-gray-100">
      <div className="w-1/4 bg-white">
        <StockList onSelectStock={handleStockSelect} />
      </div>
      <div className="w-3/4 bg-gray-200">
        <ChatInterface stock={selectedStock} />
      </div>
    </div>
  );
};

export default AnalyzePage;
