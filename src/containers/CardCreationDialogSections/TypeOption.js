import React from "react";
import RadioButtonSystem from "./RadioButtonSystem";

export default function TypeOption() {
  const radioOptions = ["Goal", "List"];
  return <RadioButtonSystem radioOptionsInString={radioOptions} />;
}
