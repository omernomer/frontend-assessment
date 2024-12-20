import { Country } from "../../types";
import TableRow from "../TableRow";

interface TableBodyProps {
  sortedCountries: Country[];
}

function TableBody({ sortedCountries }: TableBodyProps) {
  return (
    <tbody>
      {sortedCountries.map((country, index) => (
        <TableRow key={`${index} ${country.country}`} countryData={country} />
      ))}
    </tbody>
  );
}

export default TableBody;
