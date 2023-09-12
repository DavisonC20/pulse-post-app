import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="mt-4 flex justify-center">
      <ul className="flex space-x-2">
        {getPageNumbers().map((page) => (
          <li
            key={page}
            onClick={() => onPageChange(page)}
            className={`cursor-pointer ${
              currentPage === page ? "text-blue-600" : ""
            }`}
          >
            {page}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
