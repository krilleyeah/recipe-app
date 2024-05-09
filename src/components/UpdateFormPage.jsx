import { useState } from "react";

function UpdateFormPage(props) {
    const [recipeName, setRecipeName] = useState(props.details.name);

    const [calories, setCalories] = useState(props.details.calories);
  
    const [image, setImage] = useState(props.details.image);
  
    const [servings, setServings] = useState(props.details.servings);
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const recipeObj = {
        id: props.details.id,
        name: recipeName,
        calories: calories,
        image: image,
        servings: servings
      }

      //console.log(recipeObj);
  
      props.callFunction(recipeObj);
  
    }
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Recipe Name</label>
            <input name="recipeName" type="text" placeholder="Name" value={recipeName} required
              onChange={(e) => { setRecipeName(e.target.value) }} />
          
          <br/>
  
          <label>Calories </label>
            <input name="calories" type="number" placeholder="Calories" value={calories}
              onChange={(e) => { setCalories(e.target.value) }} />
         
          <br/>
  
          <label>Image</label>
            <input name="image" type="url" placeholder="Image" value={image} required
              onChange={(e) => { setImage(e.target.value) }} />
         
          <br/>
  
          <label>Servings </label>
            <input name="servings" type="number" placeholder="Servings" value={servings}
              onChange={(e) => { setServings(e.target.value) }} />
         
        </div>
        <br/>
        <div>
          <span className="formSpan"><button type="submit">Update</button></span>
          <span><button onClick={() => {props.deleteFunction(props.details.id)}}>Delete</button></span>
        </div>
      </form>
    );
}

export default UpdateFormPage;