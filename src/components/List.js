const List = ({todos,deleteTodo}) => {
  const complite = (id) =>{
    deleteTodo(id)
  }

  return (
    <>
    {todos.map(todo => {
      return(
        <div key={todo.id}>
          <button onClick={() => complite(todo.id)}>完了</button>
          <span>{ todo.content }</span>
        </div>
      )
    })}
    </>
  )
}

export default List;
