import {useState} from "react";

function TodoForm({addTask}) {
    const [userimput,setUserImput] = useState('')пше

    const handleChange = (e) => {
        setUserImput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userimput)
        setUserImput('')
    }
    const handleKeyPress = (e) => {
        if(e.key === "Enter") {handleSubmit(e)
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
                value={userimput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="введите задачу"
            />
            <button addTask={addTask}>Добавить</button>
        </form>
    )
}

export default TodoForm