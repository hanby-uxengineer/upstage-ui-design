import styled from "styled-components";
import { useTable, useSortBy } from "react-table";
import { TableButton } from "./Button";

const StyledTable = styled.div`
  width: 100%;

  table {
    width: 100%;
    border-collapse: collapse;

    thead {
      background: #ECF1FF;
      height: 3.6rem;
    }

    th {
      width: 5rem;
      font-size: 1.2rem;
      font-weight: 500;
    }

    td {
      font-size: 1.2rem;
      font-weight: 300;
    }

    th:nth-child(1), td:nth-child(1) {
      font-weight: 500;
      border-right: 1px solid #ECF1FF;
    }

    th:nth-child(2), td:nth-child(2) {
      border-right: 1px solid #ECF1FF;
      box-shadow: 2rem 0 1rem rgba(113, 122, 148, 0.05);
    }

    th:nth-child(9), td:nth-child(9) {
      border-left: 1px solid #ECF1FF;
      box-shadow: -2rem 0 1rem rgba(113, 122, 148, 0.05);
    }

    th, td {
      text-align: center;
      padding: 1rem 1.6rem;
      border-bottom: 0.1rem solid #ECF1FF;
    }
  }
`;

const Action = ({ value }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      {value.map((action, index) => {
        return <TableButton key={index}>{action}</TableButton>;
      })}
    </div>
  );
};

export default function Table({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <StyledTable>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' ▼'
                        : ' ▲'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </StyledTable>
  );
}

export { Action };