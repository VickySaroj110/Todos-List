const TodoItems = ({todos,del}) =>
    {
        return(<>
        <div>
            <h4>{todos.title}</h4>
            <p>{todos.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{del(todos)}}>Delete</button>
        </div>
        <hr />
        </>
        )
    }
export default TodoItems
