import Link from "next/link";
import React from "react";

const MyPagination = ({ totalPage, currentPage, basePath }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  const currentNumPage = Number(currentPage);

  return (
    <div className="flex justify-center mt-5 pt-5">
      <div className="flex justify-center gap-[20px] items-center w-max px-11 py-2 border border-[#E9ECF4]">
        <Link
          href={`${basePath}?page=${currentNumPage - 1}`}
          className={
            currentNumPage === 1 ? "pointer-events-none opacity-50" : ""
          }
          aria-disabled={currentNumPage === 1}
        >
          <img
            className="max-w-[3rem] md:max-w-[2.5rem]"
            src="img/homepage/services/pagination-arrow.png"
            alt="arrow"
          />
        </Link>

        <div className="flex items-center gap-2">
          {pageNumbers.map((pageNum) => (
            <Link
              key={pageNum}
              href={`${basePath}?page=${pageNum}`}
              className={`px-4 lg:px-2 py-2 lg:py-1 text-[14px] font-normal hover:text-[#D5BA8C] header_tr ${
                currentNumPage === pageNum ? "text-[#D5BA8C] font-bold" : ""
              } rounded-md`}
            >
              {pageNum}
            </Link>
          ))}
        </div>

        <Link
          href={`${basePath}?page=${currentNumPage + 1}`}
          className={
            currentNumPage === totalPage ? "pointer-events-none opacity-50" : ""
          }
          aria-disabled={currentNumPage === totalPage}
        >
          <img
            className="rotate-[-180deg] max-w-[3rem] md:max-w-[2.5rem]"
            src="img/homepage/services/pagination-arrow.png"
            alt="arrow"
          />
        </Link>
      </div>
    </div>
  );
};

export default MyPagination;
