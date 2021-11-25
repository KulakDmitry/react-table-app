import React from "react";
import Button from "./UI/Button/Button";
import { usePagination } from "../hooks/usePagination";

const PagesList = ({ totalPage, currentPage, setCurrentPage }) => {
  let pagesArray = usePagination(totalPage);
  return (
    <div className={"page__menu"}>
      {pagesArray.map((page) => (
        <Button
          className={currentPage === page ? "page page__current" : "page"}
          onClick={() => setCurrentPage(page)}
          key={page}
        >
          {page}
        </Button>
      ))}
    </div>
  );
};

export default PagesList;
