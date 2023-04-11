import { Header } from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import Search from "@/components/Common/Search";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Pricing } from "@/components/Pricing/Pricing";
import ImageList from "@/components/Images/ImageList";
import { allActions } from "@/redux/store";
import { useDispatch } from "react-redux";
import { getImages } from "@/redux/Images/images.actions";

const Images = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(router.query);
        let arr : string[] = [];
        if(router.query.categories) arr = arr.concat(router.query.categories)
        console.log('params' + " " + arr);
        dispatch(getImages(arr) as any);
    }, [router.query.categories])

    return (
        <div className="images">
            <Header />
            <Search />
            <ImageList />
            <Pricing />
            <Footer />
        </div>
    )
} 
export default Images;

