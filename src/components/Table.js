import styled from "styled-components";
import { useTable, useSortBy } from "react-table";
import { TableButton } from "./Button";
import detailIcon from "../images/detail.png"
import deployIcon from "../images/deploy.png"

const StyledTable = styled.div`
  width: 100%;

  table {
    width: 100%;
    border-collapse: collapse;

    thead {
      height: 3.6rem;
      width: 10rem;
      background: #ECF1FF;
    }

    tbody {
      width: 10rem;

      tr {
        background: white;
        transition: background 0.3s ease-in-out;

        :hover {
          background: rgba(236, 241, 255, 0.5);
          transition: background 0.3s ease-in-out;
        }

        button {
          :hover {
            background: #CCD9FF;
            transition: all 0.3s ease-in-out;
          }
        }
      }
    }

    th {
      width: 5rem;
      font-size: 1.2rem;
      font-weight: 500;
      transition: background 0.3s ease-in-out;

      :nth-child(n+2):nth-child(-n+9):hover {
        background: #CCD9FF;
        transition: background 0.3s ease-in-out;
      }
    }

    td {
      font-size: 1.2rem;
      font-weight: 300;
    }

    th, td {
      text-align: center;
      padding: 1rem 1.6rem;
      border-bottom: 0.1rem solid #ECF1FF;
    }

    th:nth-child(1), td:nth-child(1) {
      font-weight: 500;

      span {
        display: none;
      }
    }

    th:nth-child(n+2), td:nth-child(n+2) {
      border-left: 1px solid rgba(236, 241, 255, 0.3);
    }

    th:nth-child(2), td:nth-child(2) {
      box-shadow: 2rem 0 1rem rgba(113, 122, 148, 0.05);
    }

    th:nth-child(10), td:nth-child(10) {
      box-shadow: -2rem 0 1rem rgba(113, 122, 148, 0.05);
    }

    th:nth-child(n+10), td:nth-child(n+10) {
      max-width: 6.2rem;
      padding: 0.4rem;

      span {
        display: none;
      }
    }
  }
`;

const Action = ({ value }) => {
  return (
    <div style={{ textAlign:"center", margin:"0.5rem" }}>
      {
        value === "detail"
        ? <TableButton style={{ display:"flex", alignItems:"center" }}>
            <img src={detailIcon} style={{ width:"1rem", height:"1rem", marginRight:"0.4rem" }} />
            {value}
          </TableButton>
        : <TableButton style={{ display:"flex", alignItems:"center" }}>
            <img src={deployIcon} style={{ width:"1rem", height:"1rem", marginRight:"0.4rem" }} />
            {value}
          </TableButton>
      }
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
                  <span style={{ color:(column.isSorted ? "#717A94" : "rgba(113, 122, 148, 0.5)" ), marginLeft:"0.4rem"}}>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' ↓'
                        : ' ↑'
                      : ' ⇅'}
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