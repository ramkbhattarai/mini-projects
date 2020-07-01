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
   console.log(res.json())
  }

  useEffect(()=>{
    fetchTodos();
  }, []);

  return <div>
    
  </div>
};
export default App;
