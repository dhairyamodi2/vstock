import ComponentHeading from "../Common/ComponentHeading";
import CategoriesCard from "./CategoriesCard";

const CategoryList = function(){
    return (
    <div className="category-list">
        <ComponentHeading />
        <div className="card-list">
            <CategoriesCard />
            <CategoriesCard />
            <CategoriesCard />
            <CategoriesCard />
            <CategoriesCard />
            <CategoriesCard />
            <CategoriesCard />
            <CategoriesCard />
            <CategoriesCard />

        </div>
    </div>
    )
}

export default CategoryList;