import { useParams } from "react-router-dom";
import recipesList from "../assets/recipes.json";

function ItemDetailsPage(props) {

    const { detailsId } = useParams();

    const detailInfo = recipesList.find((detail) => {
        return detail.id === detailsId.toString();
    });

    return (
        <div className="detailPage">
            <p>{detailInfo.name}</p>
            <p>Calories: {detailInfo.calories}</p>
            <p>Servings: {detailInfo.servings}</p>
            <img src={detailInfo.image} />
        </div>
    )
}

export default ItemDetailsPage;