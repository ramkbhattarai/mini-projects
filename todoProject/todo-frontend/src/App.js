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
  const [text, setText] = useState([]);


  const fetchTodos = async ()=>{
   const res= await fetch("http://localhost:3001/todos");
   setTodos(await res.json());
  }

  const addTodo = async () => {
    const res = await fetch(`http://localhost:3001/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({description: text, done: false})

    });
    fetchTodos();
    setText("");
  }

  useEffect(()=>{
    fetchTodos();
  }, []);

  const items = todos.map(todo => <Item todo={todo} key={todo._id} fetchTodos={fetchTodos}/>)

 
  return  <div className="ui card">
    <div className="content">
      <div className="header">Todo List Fast</div>
    </div>
    <div className="content">
      <div className="ui relaxed divided list">
        {items}
      </div>
      
    </div>
    <div className="extra content">
      <div className="fluid ui action input">
        <input type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
          <button className="ui teal right labeled icon button" onClick={addTodo}>
            <i className="plus icon"></i>
            Add
          </button>
      </div>
    </div>
  </div>
  
  
};

const Item = (props)=>{
  const {done, description, _id} = props.todo;

  const deleteTodo = async ()=>{
     await fetch(`http://localhost:3001/todos/${_id}`, {
      method: 'DELETE',
    });
    props.fetchTodos();
  }
  return <div className="item">
    {description}
    <i className="right floated red trash icon" onClick={deleteTodo}></i>
  </div>
}
export default App;
