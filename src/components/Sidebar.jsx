import { Link } from "react-router-dom";
import recipesList from "../assets/recipes.json";

function Sidebar() {
  return (
    <div id="sidebar">
      {recipesList.map((recipe) => {
        return (
          <div key={recipe.id}>
            <Link to={`/details/${recipe.id}`}>{recipe.name}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
