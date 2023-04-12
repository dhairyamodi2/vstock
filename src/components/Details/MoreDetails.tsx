import { ImageDetailState } from "@/redux/Images/images.types";
import { State } from "@/redux/store";
import { useSelector } from "react-redux";
import MoreInfo from "./MoreInfo";

const MoreDetails = function(){
    const imageDetails = useSelector<State, ImageDetailState>(state => state.imageDetails)
    return (
        <div className="more-details">
            {imageDetails.stock && imageDetails.stock.album && <MoreInfo type="album" payload={imageDetails.stock.album.album_name}/>}
            {imageDetails.stock && imageDetails.stock.user && <MoreInfo type="user" payload={imageDetails.stock.user.uid} />}
            {imageDetails.stock && imageDetails.stock.categories && <MoreInfo type="categories" payload="" categories={imageDetails.stock.categories.map((category) => category.category_name)}  />}
        </div>
    )
}


export default MoreDetails;