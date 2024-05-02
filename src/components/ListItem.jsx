function ListItem(props) {
  
  return (
    <div key={props.card.id}>
      <div>{props.card.name}</div>
      <div>{props.card.calories}</div>
      <div>
        <img className="img" src={props.card.image} alt="" />
      </div>
      <div>{props.card.servings}</div>
      <div><button onClick={() => props.callFunction(props.card.id)}>Delete</button></div>
    </div>
  );
}
export default ListItem;