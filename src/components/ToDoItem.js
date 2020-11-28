const ToDoItem = ({todo}) =>{
    return <div key={todo.id} className="todo">
        <p>{todo.content}</p>
    </div>
}

export default ToDoItem;