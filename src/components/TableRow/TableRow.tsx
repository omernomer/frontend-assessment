import { columns } from "data/columns";
import { greyThinBorder } from "styleConstants";
import { Country, StylingObject } from "types";
import { formatKeyIndex } from "utils/formatKeyIndex";

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
      {columns.map((key, index) => {
        return <td key={formatKeyIndex(key, index)}>{countryData[key]}</td>;
      })}
    </tr>
  );
}

export default TableRow;
