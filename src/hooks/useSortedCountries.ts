import { useMemo } from "react";
import countriesList from "../data/countries";
import { SortDirection, SortOptions } from "../types";

export const useSortedCountries = (
  sortBy: SortOptions,
  sortDirection: SortDirection
) => {
  return useMemo(() => {
    return [...countriesList].sort((a, b) => {
      if (sortDirection === SortDirection.asc) {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      } else {
        return a[sortBy] < b[sortBy] ? 1 : -1;
      }
    });
  }, [sortBy, sortDirection]);
};
