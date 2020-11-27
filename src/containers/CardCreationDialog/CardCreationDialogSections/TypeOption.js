import React from "react";
import RadioButtonSystem from "./RadioButtonSystem";

export default function TypeOption({ setType }) {
  const radioOptions = ["Goal", "List"];
  return (
    <RadioButtonSystem radioOptionsInString={radioOptions} setType={setType} />
  );
}
