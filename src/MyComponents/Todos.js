import TodoItems from './TodoItems'
const Todos = (props) =>
    {
        let stl=
        {
            minHeight:"44vh",
            margin:"40px auto"
        }
        return(
        <div className="container" style={stl}>
        <h3 className="my-3" >Todos List</h3>  
        {props.todos.length===0 ? "not todo to display." :
        props.todos.map((todo)=>
            {    
            return(<TodoItems todos={todo} key={todo.srno} del={props.d}/>)
            })}  
        </div>
        )
    }
export default Todos
