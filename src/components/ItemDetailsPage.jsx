import { useParams } from "react-router-dom";
import recipesList from "../assets/recipes.json";

function ItemDetailsPage() {

    const { detailsId } = useParams();

    const detailInfo = recipesList.find((detail) => {
        return detail.id === detailsId.toString();
    })
    console.log(detailInfo);
    console.log(recipesList);

    return (
        <div>
            <p>{detailInfo.name}</p>
            <img src={detailInfo.image} />
        </div>
    )
}

export default ItemDetailsPage;