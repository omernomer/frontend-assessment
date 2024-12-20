import { useState } from "react";
import { SortDirection, SortOptions } from "types";

export const useSort = (
  initialSortBy: SortOptions,
  initialSortDirection: SortDirection
) => {
  const [sortBy, setSortBy] = useState<SortOptions>(initialSortBy);
  const [sortDirection, setSortDirection] = useState<SortDirection>(initialSortDirection);
  const sortCountriesBy = (key: SortOptions) => {
    if (sortBy === key) {
      setSortDirection(
        sortDirection === SortDirection.asc ? SortDirection.desc : SortDirection.asc
      );
    } else {
      setSortBy(key);
      setSortDirection(SortDirection.asc);
    }
    // Scroll to the top of the page
    document.body.scrollIntoView({ behavior: "smooth" });
  };

  const isCurrentSort = (key: SortOptions) => {
    return sortBy === key;
  };

  const renderSortIcon = (key: SortOptions) => {
    if (isCurrentSort(key)) {
      return sortDirection === SortDirection.asc ? "🔼" : "🔽";
    }
    return "";
  };

  return { sortBy, sortDirection, sortCountriesBy, renderSortIcon };
};
