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
          <label>
            Recipe Name
            <input name="recipeName" type="text" placeholder="Name" value={recipeName} required
              onChange={(e) => { setRecipeName(e.target.value) }} />
          </label>
          <br/>
  
          <label>
            Calories
            <input name="calories" type="number" placeholder="Calories" value={calories}
              onChange={(e) => { setCalories(e.target.value) }} />
          </label>
          <br/>
  
          <label>
            Image
            <input name="image" type="url" placeholder="Image" value={image} required
              onChange={(e) => { setImage(e.target.value) }} />
          </label>
          <br/>
  
          <label>
            Servings
            <input name="servings" type="number" placeholder="Servings" value={servings}
              onChange={(e) => { setServings(e.target.value) }} />
          </label>
        </div>
        <br/>
        <div>
          <button type="submit">Update</button>
        </div>
      </form>
  
    );
}

export default UpdateFormPage;