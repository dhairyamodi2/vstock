import SmallWithSocial from "@/components/Common/Footer";
import { Header } from "@/components/Common/Header";
import Search from "@/components/Common/Search";
import ImageList from "@/components/Images/ImageList";
import { Pricing } from "@/components/Pricing/Pricing";
import { useLoadUser } from "@/hooks/loaduser";
import { getMoreImages } from "@/redux/Images/images.actions";
import { Stock } from "@/redux/Images/images.types";
import { State } from "@/redux/store";
import { VisitedState } from "@/redux/User/user.types";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ImagesByUser(){
    const router = useRouter();
    let {id} = router.query;
    const visitedState = useSelector<State, VisitedState>(state => state.visitedState);
    useLoadUser(visitedState);
    const dispatch = useDispatch();
    useEffect(() => {
        if(id){
            dispatch(getMoreImages(id as string, 'user') as any);
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