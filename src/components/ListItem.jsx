function ListItem(props) {
  
  return (
    <div key={props.card.id}>
      <div><h1>{props.card.name}</h1></div>
      <div>{props.card.calories} calories, {props.card.servings} serving(s)</div><br />
      <div>
        <img className="img" src={props.card.image} alt="" />
      </div>
      
    </div>
  );
}
export default ListItem;