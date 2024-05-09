import { useState } from "react";

function FormPage(props) {
  
  const [recipeName, setRecipeName] = useState("");

  const [calories, setCalories] = useState(0);

  const [image, setImage] = useState("");

  const [servings, setServings] = useState(0);


  const handleSubmit = (e) => {
    e.preventDefault();

    const recipeObj = {
      id: recipeName,
      name: recipeName,
      calories: calories,
      image: image,
      servings: servings
    }

    props.callFunction(recipeObj);

  }
  return (
    <div><br />
    <form onSubmit={handleSubmit}>
      <span id="addRecipeTitle">Add Recipe</span><br /><br />
      <div>
        <label>Recipe Name</label>
          <input name="recipeName" type="text" placeholder="Name" value={recipeName}
            onChange={(e) => { setRecipeName(e.target.value) }} />
        
        <br/>

        <label>Calories</label>
          <input name="calories" type="number" placeholder="Calories" value={calories}
            onChange={(e) => { setCalories(e.target.value) }} />
        
        <br/>

        <label>Image</label>
          <input name="image" type="url" placeholder="Image" value={image}
            onChange={(e) => { setImage(e.target.value) }} />
        
        <br/>

        <label>Servings</label>
          <input name="servings" type="number" placeholder="Servings" value={servings}
            onChange={(e) => { setServings(e.target.value) }} />
        
      </div>
      <div><br />
        <button type="submit">Add Recipe</button>
      </div>
    </form>
    </div>

  );
};

export default FormPage;