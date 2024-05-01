import recipesList from "../assets/recipes.json";
import { useState } from "react";
import ListItem from "./ListItem";

function List() {
  const [recipes, setRecipes] = useState(recipesList);

  function deleteRecipe(id) {
    const newList = recipes.filter((recipe) => {
      return recipe.id !== id;
    });
    setRecipes(newList);
  }

  return (
    <div id="content">
      {recipes.map((recipe) => {
        return (
          <div key={recipe.id}>
            <ListItem card={recipe} callFunction={deleteRecipe} />
          </div>
        );
      })}
    </div>
  );
}

export default List;
