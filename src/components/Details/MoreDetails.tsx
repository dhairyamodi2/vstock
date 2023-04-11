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
            {/* <MoreInfo />     */}
        </div>
    )
}


export default MoreDetails;