import { Progress, Spinner } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import ComponentHeading from "../Common/ComponentHeading";
import CategoriesCard from "./CategoriesCard";
import { RootState, State } from "@/redux/store";
import { CategoryState } from "@/redux/Categories/categories.type";
import { useEffect } from "react";

const CategoryList = function () {
    const categories = useSelector<State, CategoryState>((state: State) => state.categories);

    useEffect(() => {
        console.log(categories);
    }, [categories.loading, categories.success])
    return (
        <div className="category-list">
            <ComponentHeading />
            {categories.loading == true ?
                <div className="loader">
                    <Spinner size='xl' textAlign={'center'} />
                </div> :
                    <div className="card-list">
                        {categories.categories?.map((category) => {
                            return <CategoriesCard category_image={category.category_image} category_name={category.category_name} />
                        })}
                    </div>
            }

        </div>
    )
}

export default CategoryList;