function Todo({todo, togleTask, removeTask}) {
    return(
        <div className={todo.complete ? "item-text strike" : "item-text"}
                onClick={() => togleTask(todo.id)}>
            <div>
                {todo.task}
            </div>
            <button onClick={() => removeTask(todo.id)}>
                Х
            </button>
        </div>
    )
}

export default Todo