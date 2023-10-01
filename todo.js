function Todo({ todo, index, remove, update }) {
  const [updatedText, setUpdatedText] = React.useState(todo.text);

  const handleRemove = () => {
    remove(index); // Pass the index to the remove function
  };

  const handleUpdate = () => {
    update(index, updatedText);
  };

  const handleInputChange = (e) => {
    setUpdatedText(e.target.value);
  };

  return (
    <div className="todo">
      <input
        type="text"
        value={updatedText}
        onChange={handleInputChange}
      />
      <button className="update-button" onClick={handleUpdate}>Update</button>
      <button className="delete-button" onClick={handleRemove}>Delete</button>
    </div>
  );
}
