import styled from "styled-components";
import { faker } from '@faker-js/faker';
import Table from './Table';
import { useMemo } from "react";

faker.seed(10);

const StyledData = styled.div`
  background: white;
  padding: 3.2rem;
  border-radius: 1.6rem;
  box-shadow: 0 0.1rem 1rem rgba(113, 122, 148, 0.1);
`;

export default function Data() {
  const columns = useMemo(() => [
    {
      Header: "MODEL",
      accessor: "model",
    },
    {
      Header: "SCORE",
      accessor: "score",
    },
    {
      Header: "DATA A",
      accessor: "data_a",
    },
    {
      Header: "DATA B",
      accessor: "data_b",
    },
    {
      Header: "DATA C",
      accessor: "data_c",
    },
    {
      Header: "DATA D",
      accessor: "data_d",
    },
    {
      Header: "DATA E",
      accessor: "data_e",
    },
    {
      Header: "DATA F",
      accessor: "data_f",
    },
    {
      Header: "DEPLOY",
      accessor: "deploy",
    },
    {
      Header: "DETAIL",
      accessor: "detail",
    },
  ], []);

  const data = useMemo(() => 
    Array(10).fill().map(() => ({
      model: faker.name.lastName(),
      score: faker.name.firstName(),
      data_a: faker.name.lastName(),
      data_b: faker.name.firstName(),
      data_c: faker.name.lastName(),
      data_d: faker.name.firstName(),
      data_e: faker.name.lastName(),
      data_f: faker.name.firstName(),
      deploy: "deploy",
      detail: "detail",
    }))
  );

  return (
    <StyledData>
      <h2>Model</h2>
      <Table columns={columns} data={data} />
    </StyledData>
  );
}