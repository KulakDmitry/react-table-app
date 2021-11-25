import { useMemo } from "react";

export const usePagination = (totalPages, totalCount) => {
  return useMemo(() => {
    let arrPage = [];
    for (let i = 0; i < totalPages; i++) {
      arrPage.push(i + 1);
    }
    return arrPage;
  }, [totalPages]);
};
