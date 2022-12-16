import { useMemo } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { faker } from '@faker-js/faker';
import styled from "styled-components";
import { Card } from "./Card";
import Table, { Action } from './Table';
import { Button } from "./Button";

faker.seed(100);

const StyledCard = styled(Card)`
  margin-bottom: 10rem;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 1.6rem;
  display: flex;
  justify-content: space-between;
`;

export default function Data() {
  const [number, setNumber] = useState(5);

  const onIncrease = () => {
    setNumber(number + 1);
  }

  const columns = useMemo(() => [
    {
      Header: "Model",
      accessor: "model",
      sticky: "left",
    },
    {
      Header: "Score",
      accessor: "score",
      sticky: "left",
    },
    {
      Header: "Data A",
      accessor: "data_a",
    },
    {
      Header: "Data B",
      accessor: "data_b",
    },
    {
      Header: "Data C",
      accessor: "data_c",
    },
    {
      Header: "Data D",
      accessor: "data_d",
    },
    {
      Header: "Data E",
      accessor: "data_e",
    },
    {
      Header: "Data F",
      accessor: "data_f",
    },
    {
      Header: "My Data",
      accessor: "my_data",
    },
    {
      Header: "Deploy",
      accessor: "deploy",
      Cell: ({ cell: { value } }) => <Action value={value} />,
    },
    {
      Header: "Detail",
      accessor: "detail",
      Cell: ({ cell: { value } }) => <Link to="/upstage-ui-design/detail"><Action value={value} /></Link>,
    },
  ], []);

  const data = useMemo(() => 
    Array(number).fill().map((arr, i) => ({
      model: "Model-"+('00' + (i+1)).slice(-2),
      score: faker.datatype.float({ "min":0, "max":1, "precision": 0.001 }).toFixed(3),
      data_a: faker.datatype.float({ "min":0, "max":1, "precision": 0.001 }).toFixed(3),
      data_b: faker.datatype.float({ "min":0, "max":1, "precision": 0.001 }).toFixed(3),
      data_c: faker.datatype.float({ "min":0, "max":1, "precision": 0.001 }).toFixed(3),
      data_d: faker.datatype.float({ "min":0, "max":1, "precision": 0.001 }).toFixed(3),
      data_e: faker.datatype.float({ "min":0, "max":1, "precision": 0.001 }).toFixed(3),
      data_f: faker.datatype.float({ "min":0, "max":1, "precision": 0.001 }).toFixed(3),
      my_data: faker.datatype.float({ "min":0, "max":1, "precision": 0.001 }).toFixed(3),
      deploy: "deploy",
      detail: "detail",
    }))
  );

  return (
    <StyledCard>
      <ButtonWrapper>
        <h2>Model <span style={{ color: '#717A94' }}>({number})</span></h2>
        <Button onClick={onIncrease}>+ Create Model</Button>
      </ButtonWrapper>
      <Table columns={columns} data={data} />
    </StyledCard>
  );
}