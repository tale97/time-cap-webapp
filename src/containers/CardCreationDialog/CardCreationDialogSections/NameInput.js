import React from "react";

export default function NameInput({ setName }) {
  const onUserInput = (event) => {
    setName(event.target.value);
  };
  return (
    <form>
      <input type="text" className="input-field" onChange={onUserInput} />
    </form>
  );
}
