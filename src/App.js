
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
import {useState,useEffect} from 'react';
function App() 
{
  let initTodo;
  if(localStorage.getItem("todos")===null)
    {
      initTodo=[];
    }
  else
    {
      initTodo=JSON.parse(localStorage.getItem("todos"));
    }
  let delbtn = (todo)=>
    {
      setTodos(todos.filter((e)=>
        {
          return e!==todo;
        }));
      localStorage.setItem("todos",JSON.stringify(todos));
    }
  const addtodo=(title,desc)=>
    { 
      let srno;
      if(todos.length===0)
        {
          srno=0;
        }
      else
        {
          srno= todos[todos.length-1].srno+1;
        }
      const mytodo =
        {
        srno:srno,
        title:title,
        desc:desc,
        }
      setTodos([...todos,mytodo]);
    }
    const [todos, setTodos] = useState(initTodo);
    useEffect(()=>
      {
        localStorage.setItem("todos",JSON.stringify(todos));
      },[todos])
    return(
    <>
    
      <Header title="My Todos List" />
      <AddTodo AddTodo={addtodo} />
      <Todos todos={todos} d={delbtn} />
      <Footer />
    </>
    );
}
export default App;
