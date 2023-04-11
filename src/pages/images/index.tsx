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
import { getCategories } from "@/redux/Categories/categories.actions";
import { bindActionCreators } from "redux";

const Images = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const {getCategories, getImages} = bindActionCreators(allActions, dispatch)
    

    useEffect(() => {
        getCategories();
    }, [router.query.categories])
    useEffect(() => {
        console.log(router.query);
        let arr : string[] = [];
        if(router.query.categories) arr = arr.concat(router.query.categories)
        console.log('params' + " " + arr);
        getImages(arr);
        
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

