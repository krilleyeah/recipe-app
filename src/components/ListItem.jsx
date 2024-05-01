function ListItem(props) {
  // Destructure the props to access callFunction
  const { callFunction } = props;

  function handleClick(id) {
    // Call the parent function with the id
    callFunction(id);
  }

  return (
    <div key={props.card.id}>
      <div>{props.card.name}</div>
      <div>{props.card.calories}</div>
      <div>
        <img className="img" src={props.card.image} alt="" />
      </div>
      <div>{props.card.servings}</div>
      <div><button onClick={() => handleClick(props.card.id)}>Delete</button></div>
    </div>
  );
}
export default ListItem;