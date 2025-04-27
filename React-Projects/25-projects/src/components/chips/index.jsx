import { useState } from "react";        
function ChipsInput() {
  const [SearchInput, SetSearchInput] = useState("");
  const [InputValue, SetInputValue] = useState([]);

  const handlesearchValues = (e) => {
    SetSearchInput(e.target.value);
    console.log(SearchInput);
  };

  const handleinputvalue = (e) => {
    if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      if (SearchInput.trim() !== "") {
        SetInputValue([...InputValue, SearchInput.trim()]);
        SetSearchInput("");
      }
    }
  };
  const handleDeletbtn = (iteamvalue) => {
    const updateinput = InputValue.filter((item) => item !== iteamvalue);
    SetInputValue(updateinput);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px 0",
      }}
    >
      <h2>Chips Input</h2>
      <input
        value={SearchInput}
        type="text"
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
        onChange={handlesearchValues}
        onKeyDown={handleinputvalue}
      />
      {InputValue.map((item, index) => (
        <ul key={index} className="flex justify-between">
          <li>{item}</li>
          <button
            className=""
            onClick={() => handleDeletbtn(item)}
          >
            <span>X</span>  
          </button>
        </ul>
      ))}
    </div>
  );
}

export default ChipsInput;
