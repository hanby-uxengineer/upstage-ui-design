import styled from "styled-components";
import { faker } from '@faker-js/faker';
import { Card } from "./Card";
import Table, { Action } from './Table';
import { useMemo } from "react";

import { Link } from "react-router-dom";

faker.seed(100);

export default function Data() {
  const columns = useMemo(() => [
    {
      Header: "Model",
      accessor: "model",
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
      Header: "Action",
      accessor: "action",
      Cell: ({ cell: { value } }) => <Link to="/upstage-ui-design/detail"><Action value={value} /></Link>,
    },
  ], []);

  const data = useMemo(() => 
    Array(4).fill().map(() => ({
      model: "Model-" + faker.word.noun({ length: { min: 5, max: 7 } }),
      score: faker.datatype.float({ "min":0, "max":1, "precision": 0.001 }),
      data_a: faker.datatype.float({ "min":0, "max":1, "precision": 0.001 }),
      data_b: faker.datatype.float({ "min":0, "max":1, "precision": 0.001 }),
      data_c: faker.datatype.float({ "min":0, "max":1, "precision": 0.001 }),
      data_d: faker.datatype.float({ "min":0, "max":1, "precision": 0.001 }),
      data_e: faker.datatype.float({ "min":0, "max":1, "precision": 0.001 }),
      data_f: faker.datatype.float({ "min":0, "max":1, "precision": 0.001 }),
      action: ["deploy", "detail"],
    }))
  );

  return (
    <Card>
      <h2>Model</h2>
      <Table columns={columns} data={data} />
    </Card>
  );
}