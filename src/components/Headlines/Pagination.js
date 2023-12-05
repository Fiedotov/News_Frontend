import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];
  const maxPageNumberWindow = 5;
  let currentWindow = Math.floor((currentPage - 1) / maxPageNumberWindow);

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const startIndex = currentWindow * maxPageNumberWindow;
  const endIndex = startIndex + maxPageNumberWindow;
  const pageNumberWindow = pageNumbers.slice(startIndex, endIndex);

  return (
    <div className="flex justify-center mt-4">
      <ul className="inline-flex items-center -space-x-px">
        {currentPage > 1 && (
          <li>
            <a
              href="#"
              onClick={() => paginate(currentPage - 1)}
              className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              Previous
            </a>
          </li>
        )}
        {pageNumberWindow.map(number => (
          <li key={number}>
            <a
              href="#"
              onClick={() => paginate(number)}
              className={`block py-2 px-3 leading-tight ${
                currentPage === number
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-500 bg-white'
              } border border-gray-300 hover:bg-gray-100 hover:text-gray-700`}
            >
              {number}
            </a>
          </li>
        ))}
        {currentPage < pageNumbers.length && (
          <li>
            <a
              href="#"
              onClick={() => paginate(currentPage + 1)}
              className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              Next
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
