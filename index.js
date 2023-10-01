function App() {
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };

  const updateTodo = (index, updatedText) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = updatedText;
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, i) => (
          <Todo
            key={i}
            index={i}
            todo={todo}
            remove={removeTodo}
            update={updateTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
