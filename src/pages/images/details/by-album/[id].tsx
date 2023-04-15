import { Header } from "@/components/Common/Header";
import ImageList from "@/components/Images/ImageList";
import { Pricing } from "@/components/Pricing/Pricing";
import { getMoreImages } from "@/redux/Images/images.actions";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SmallWithSocial from "@/components/Common/Footer";
import Search from "@/components/Common/Search";
import { getCategories } from "@/redux/Categories/categories.actions";
import { useLoadUser } from "@/hooks/loaduser";
import { State } from "@/redux/store";
import { VisitedState } from "@/redux/User/user.types";
export default function ImagesByAlbum(){
    const router = useRouter();
    const dispatch = useDispatch();
    let {id} = router.query;
    const visitedState = useSelector<State, VisitedState>(state => state.visitedState);
    useLoadUser(visitedState);
    useEffect(() => {
        dispatch(getCategories() as any);
    }, [])
    useEffect(() => {
        if(id){
            dispatch(getMoreImages(id as string, 'album') as any);
        }
        
    }, [id])
    return (
        <div>
            <Header />
            <Search />
            <ImageList />
            <Pricing />
            <SmallWithSocial />
        </div>
    )
}