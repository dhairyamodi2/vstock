
import { Category } from "@/redux/Categories/categories.type";
import { getImages, getMoreInfo } from "@/redux/Images/images.actions";
import { ImagesState, Stock } from "@/redux/Images/images.types";
import { State } from "@/redux/store";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { Button, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageCard from "../Images/ImageCard";

interface MoreInfoProps {
    type: 'album' | 'user' | 'categories';
    payload: string;
    categories?: Array<string>
}
const MoreInfo: React.FC<MoreInfoProps> = function ({ payload, type, categories }) {
    const dispatch = useDispatch();
    useEffect(() => {
        if(type != 'categories'){
            dispatch(getMoreInfo(type, payload, 'three') as any);
        }
        else if(categories != undefined){
            console.log('more info')
            console.log(categories);
            dispatch(getImages(categories) as any);
        }
    }, [type, payload, categories])

    const images = useSelector<State, ImagesState>((state) => {
        if(type == 'album'){
            return state.imageByAlbums
        }
        if(type == 'categories'){
            return state.images
        }
        return state.imageByUser
    });
    console.log(images);

    function renderImages(stock : Array<Stock>){
        let jsx : Array<Stock> = [];
        for(let i = 0; i < Math.min(3, stock.length); i++){
            jsx.push(stock[i]);
        }
        return jsx;
    }
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
                                _hover={{ bgColor: 'black', color: 'white', transform: 'scale(1.03)' }}>More From Same {type == 'album' ? "ALBUM" : type == 'user' ?"USER" : "CATEGORIES"}</Button>
                        </div>
                        <div className='card-list'>
                            {renderImages(images.stock).map((item) => {
                                return <ImageCard id={item.id} public_url={item.public_url} verdict={item.verdict} />
                            })}
                        </div>
                    </> : ""}
                </>}

        </div>
    )
}

export default MoreInfo;