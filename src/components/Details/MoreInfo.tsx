
import { getMoreInfo } from "@/redux/Images/images.actions";
import { ImagesState } from "@/redux/Images/images.types";
import { State } from "@/redux/store";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { Button, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageCard from "../Images/ImageCard";

interface MoreInfoProps {
    type: 'album' | 'user';
    payload: string;
}
const MoreInfo: React.FC<MoreInfoProps> = function ({ payload, type }) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMoreInfo(type, payload, 'three') as any);
    }, [type, payload])

    const images = useSelector<State, ImagesState>((state) => {
        if(type == 'album'){
            return state.imageByAlbums
        }
        return state.imageByUser
    });
    console.log(images);
    return (
        <div className="more-info">
            {images.loading == true ? <div className="loader">
                <Spinner size='xl' textAlign={'center'} />
            </div> :
                <>
                    {images.success == true && images.stock ? <>
                        <div className="more-info-heading">
                            <Button
                                rightIcon={<ArrowRightIcon />}
                                className="view-all"
                                bgColor={'black'}
                                color={'white'}
                                transition={'all 0.3s'}
                                _hover={{ bgColor: 'black', color: 'white', transform: 'scale(1.03)' }}>More From Same {type == 'album' ? "ALBUM" : "USER"}</Button>
                        </div>
                        <div className="card-list">
                            {images.stock.map((item) => {
                                return <ImageCard id={item.id} public_url={item.public_url} verdict={item.verdict} />
                            })}
                        </div>
                    </> : ""}
                </>}

        </div>
    )
}

export default MoreInfo;