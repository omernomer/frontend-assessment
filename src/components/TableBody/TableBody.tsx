import TableRow from "components/TableRow";
import { Country } from "types";
import { formatKeyIndex } from "utils/formatKeyIndex";

interface TableBodyProps {
  sortedCountries: Country[];
}

function TableBody({ sortedCountries }: TableBodyProps) {
  return (
    <tbody>
      {sortedCountries.map((country, index) => (
        <TableRow
          key={formatKeyIndex(country.country, index)}
          countryData={country}
        />
      ))}
    </tbody>
  );
}

export default TableBody;
