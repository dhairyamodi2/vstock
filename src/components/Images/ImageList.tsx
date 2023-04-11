import { CategoryState } from "@/redux/Categories/categories.type";
import { ImagesState } from "@/redux/Images/images.types";
import { State } from "@/redux/store";
import { Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ImageCard from "./ImageCard";

const ImageList = function () {
    const images = useSelector<State, ImagesState>((state) => state.images);
    console.log('stock');
    console.log(images);
    return (
        <div className="category-list">
            {images.loading === true ?
                <div className="loader">
                    <Spinner size='xl' textAlign={'center'} />
                </div> :
               <div className="card-list">
                {images.stock.map((stock) => {
                    return <ImageCard id= {stock.id} public_url={stock.public_url} verdict={stock.verdict} />
                })}
               </div>}
            
        </div>
    )
}

export default ImageList;