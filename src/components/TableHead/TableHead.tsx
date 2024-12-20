import { columns } from "data/columns";
import { colors, greyThinBorder } from "styleConstants";
import { SortOptions, StylingObject } from "types";

const styles: StylingObject = {
  th: {
    cursor: "pointer",
    textTransform: "capitalize",
    padding: "5px",
    border: greyThinBorder,
    minWidth: "100px",
    position: "sticky",
    top: "0",
    background: colors.white,
  },
};

interface TableHeadProps {
  sortCountriesBy: (key: SortOptions) => void;
  renderSortIcon: (key: SortOptions) => string;
}

function TableHead({ sortCountriesBy, renderSortIcon }: TableHeadProps) {
  return (
    <thead>
      <tr>
        {columns.map((key) => {
          return (
            <th
              style={styles.th}
              key={key}
              onClick={() => sortCountriesBy(key)}
            >
              {key} {renderSortIcon(key)}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

export default TableHead;
