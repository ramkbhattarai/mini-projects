import React, {useEffect, useState} from 'react';


function App() {
  return (
    <div>
      <List/>
    </div>
  );
}
const list = ()=> {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async ()=>{
   const res= await fetch("http://localhost:3001/todos");
   setTodos(await res.json());
  }

  useEffect(()=>{
    fetchTodos();
  }, []);

  const items = todos.map(todo => <Item todo={todo} key={todo._id} />)

  return <div>
    {items}
  </div>
};

const Item = (props)=>{
  const {done, description} = props.todo;
  return <div>
    {description}
  </div>
}
export default App;
