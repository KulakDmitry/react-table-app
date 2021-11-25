import { useMemo } from "react";

export const useSortedItems = (userList, filter) => {
  return useMemo(() => {
    let sortableItems = [...userList];
    if (filter.key !== null) {
      sortableItems.sort((a, b) => {
        if (a[filter.key] < b[filter.key]) {
          return filter.direction === "ascending" ? -1 : 1;
        }
        if (a[filter.key] > b[filter.key]) {
          return filter.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [userList, filter]);
};

export const useSortAndSearch = (userList, filter) => {
  const sortedItems = useSortedItems(userList, filter);
  return useMemo(() => {
    return sortedItems.filter((users) =>
      users.name.toLowerCase().includes(filter.search)
    );
  }, [filter.search, sortedItems]);
};
