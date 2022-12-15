import { useState } from "react";
import { Button } from "./Button";

export default function CreateModel() {
  const [number, setNumber] = useState(5);

  const onIncrease = () => {
    setNumber(number + 1);
  }

  return(
    <Button onClick={onIncrease}>Create Model</Button>
  );
}