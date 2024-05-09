import recipesList from "../assets/recipes.json";
import { useState } from "react";
import ListItem from "./ListItem";
import FormPage from "./FormPage";
import { Link } from "react-router-dom";
import UpdateFormPage from "./UpdateFormPage";

function DashboardPage() {
  const [recipes, setRecipes] = useState(recipesList);

  function deleteRecipe(id) {
    const newList = recipes.filter((recipe) => {
      return recipe.id !== id;
    });
    setRecipes(newList);
  }

  function addRecipe(recipe) {
    const newList = [recipe, ...recipes];
    setRecipes(newList);
  }

  function updateRecipe(recipeObj) {
    let updatedItems = recipes.map((recipe) => (recipe.id === recipeObj.id ? recipeObj : recipe));  
    setRecipes(updatedItems);
  }

  return (
    <div className="content">
      <FormPage callFunction={addRecipe} />
      {recipes.map((recipe) => {
        return (
          <div key={recipe.id} className="recipeBox">
            <Link to={`/details/${recipe.id}`}>
              <div className="recipeContainer" key={recipe.id}>
                <ListItem card={recipe} />
              </div>
            </Link>
            <div>
              <UpdateFormPage details={recipe} callFunction={updateRecipe} deleteFunction={deleteRecipe} />
              
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DashboardPage;
