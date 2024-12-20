import { greyThinBorder } from "../../styleConstants";
import { Country, SortOptions, StylingObject } from "../../types";

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
      {Object.values(SortOptions).map((key) => {
        return <td key={key}>{countryData[key as keyof Country]}</td>;
      })}
    </tr>
  );
}

export default TableRow;
