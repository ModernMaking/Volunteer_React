import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const options = [
  { label: "Grapes 🍇", value: "grapes" },
  { label: "Mango 🥭", value: "mango" },
  { label: "Strawberry 🍓", value: "strawberry", disabled: true },
];

const MSelect = (props) => {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <p>{props.name}</p>
      <pre>{JSON.stringify(selected)}</pre>
      <MultiSelect
        options={props.options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
};

export default MSelect;