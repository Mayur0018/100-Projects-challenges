import { useState } from "react";
const Index = () => {
  const [todo, setTodo] = useState([]);
  const [searchTodo, setSearchTodo] = useState("");
  const [searQuary, setSearchQuary] = useState("");
  const handlInputchange = (e) => {
    setSearchTodo(e.target.value);
    console.log(searchTodo);
  };

  const handleAddTodos = () => {
    setTodo([...todo, searchTodo]);
    setSearchTodo("");
  };
  const handlesearchQuary = (e) => {
    setSearchQuary(e.target.value);
  };

  const filterData = todo.filter((todos) =>
    todos.toLowerCase().includes(searQuary.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        onChange={handlInputchange}
        placeholder="Enter The Value"
      />
      {todo.map((item, Index) => (
        <ul key={Index}>
          <li>{item}</li>
        </ul>
      ))}
      <button onClick={handleAddTodos}>Submit</button>

      {/* search filter  */}
      <input
        type="text"
        name=""
        id=""
        value={searQuary}
        onChange={handlesearchQuary}
        placeholder="Search Iteams"
      />
      <ul>
        {filterData.map((item, Index) => (
          <li key={Index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
