import SmallWithSocial from "@/components/Common/Footer"
import { Header } from "@/components/Common/Header"
import Search from "@/components/Common/Search"
import ImageList from "@/components/Images/ImageList"
import { Pricing } from "@/components/Pricing/Pricing"
import { searchImages } from "@/redux/Images/images.actions"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

export default function SearchImages(){
    const router = useRouter();
    const dispatch = useDispatch();
    useEffect(() => {
        if(router.query.search_field){
            
            dispatch(searchImages(router.query.search_field as string) as any);
        }
    }, [router.query.search_field])
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