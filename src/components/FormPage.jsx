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
    <form onSubmit={handleSubmit}>
      <span>Add a Student</span>
      <div>
        <label>
          Recipe Name
          <input name="recipeName" type="text" placeholder="Name" value={recipeName}
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
          <input name="image" type="url" placeholder="Image" value={image}
            onChange={(e) => { setImage(e.target.value) }} />
        </label>
        <br/>

        <label>
          Servings
          <input name="servings" type="number" placeholder="Servings" value={servings}
            onChange={(e) => { setServings(e.target.value) }} />
        </label>
      </div>
      <div>
        <button type="submit">Add Student</button>
      </div>
    </form>

  );
};

export default FormPage;