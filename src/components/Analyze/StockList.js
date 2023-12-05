import React from 'react';

const StockList = ({ onSelectStock }) => {
  // Dummy data for the stocks list
  const stocks = [
    { symbol: 'AAPL', name: 'Apple Inc.' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.' },
    // ...add more stocks
  ];

  return (
    <div className="overflow-y-auto">
      <div className="p-4">
        {/* Search input */}
        <input
          type="text"
          placeholder="Search stocks..."
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
        />
      </div>
      <ul className="p-4">
        {stocks.map((stock) => (
          <li
            key={stock.symbol}
            onClick={() => onSelectStock(stock)}
            className="p-2 cursor-pointer hover:bg-gray-200"
          >
            {stock.name} ({stock.symbol})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockList;
