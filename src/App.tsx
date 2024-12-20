import "./App.css";
import TableBody from "./components/TableBody";
import TableHead from "./components/TableHead";
import { columns } from "./data/columns";
import { useSort } from "./hooks/useSort";
import { useSortedCountries } from "./hooks/useSortedCountries";
import { SortDirection, StylingObject } from "./types";

const styles: StylingObject = {
  table: {
    borderCollapse: "collapse",
    width: "100%",
  },
};

function App() {
  const { sortBy, sortDirection, sortCountriesBy, renderSortIcon } = useSort(
    columns[0],
    SortDirection.asc
  );
  const sortedCountries = useSortedCountries(sortBy, sortDirection);

  return (
    <table style={styles.table}>
      <TableHead
        sortCountriesBy={sortCountriesBy}
        renderSortIcon={renderSortIcon}
      />
      <TableBody sortedCountries={sortedCountries} />
    </table>
  );
}

export default App;
