import { columns } from "data/columns";
import { greyThinBorder } from "styleConstants";
import { Country, StylingObject } from "types";

const styles: StylingObject = {
  tr: {
    textAlign: "center",
    border: greyThinBorder,
  },
};

interface TableRowProps {
  countryData: Country;
}

function TableRow({ countryData }: TableRowProps) {
  return (
    <tr style={styles.tr}>
      {columns.map((key) => {
        return <td key={key}>{countryData[key]}</td>;
      })}
    </tr>
  );
}

export default TableRow;
