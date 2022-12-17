import { useMemo } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { faker } from '@faker-js/faker';
import styled from "styled-components";
import { Card } from "./Card";
import Table, { Action } from './Table';
import { Button, TableButton } from "./Button";
import addLightIcon from "../images/add_light.png"

const StyledCard = styled(Card)`
  margin-bottom: 10rem;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 1.6rem;
  display: flex;
  justify-content: space-between;
`;

const FilterWrapper = styled.div`
  margin: 0.8rem 0;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  p {
    margin: 0;
  }
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
      disableSortBy: true,
    },
    {
      Header: "Score",
      accessor: "score",
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
      Header: "Detail",
      accessor: "detail",
      disableSortBy: true,
      Cell: ({ cell: { value } }) => <Link to="/upstage-ui-design/detail" style={{ textDecoration:"none" }}><Action value={value} /></Link>,
    },
    {
      Header: "Deploy",
      accessor: "deploy",
      disableSortBy: true,
      Cell: ({ cell: { value } }) => <Action value={value} />,
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
      detail: "detail",
      deploy: "deploy",
    }))
  );

  return (
    <StyledCard>
      <ButtonWrapper>
        <h2>Model <span style={{ color: '#717A94' }}>({number})</span></h2>
        <Button onClick={onIncrease} style={{ display:"flex", alignItems:"center" }}>
          <img src={addLightIcon} style={{ width:"1.5rem", height:"1.5rem", marginRight:"0.4rem" }} />
          Create Model
        </Button>
      </ButtonWrapper>
      <FilterWrapper>
        <p>Sorted by:</p>
        <TableButton>Data A <span style={{ marginLeft:"0.4rem" }}>▾</span></TableButton>
      </FilterWrapper>
      <Table columns={columns} data={data} />
    </StyledCard>
  );
}