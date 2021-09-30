import SearchProfile from './Todo'

function TodoView(props){
    return(
        <div >
             <table>
                    <tr><th>Name</th><th>Current job</th><th>Current Company</th></tr>
                {props.todoList.map(todo=> <SearchProfile todo={todo} />)}
            </table>
        </div>
    )
}

export default TodoView