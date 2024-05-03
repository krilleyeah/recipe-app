import recipesList from "../assets/recipes.json";
import { useState } from "react";
import ListItem from "./ListItem";
import FormPage from "./FormPage";

function DashboardPage() {
  const [recipes, setRecipes] = useState(recipesList);

  function deleteRecipe(id) {
    const newList = recipes.filter((recipe) => {
      return recipe.id !== id;
    });
    setRecipes(newList);
  }

  function addRecipe(recipe){
    const newList = [recipe, ...recipes];

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
      } )}
      <FormPage callFunction={addRecipe} />
    </div>
  );
}

export default DashboardPage;
