import { Header } from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import Search from "@/components/Common/Search";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Pricing } from "@/components/Pricing/Pricing";
import ImageList from "@/components/Images/ImageList";
import { allActions, State } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "@/redux/Images/images.actions";
import { getCategories } from "@/redux/Categories/categories.actions";
import { bindActionCreators } from "redux";
import { UserState, VisitedState } from "@/redux/User/user.types";
import { useLoadUser } from "@/hooks/loaduser";

const Images = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const { getCategories, getImages } = bindActionCreators(allActions, dispatch)

    const visitedState = useSelector<State, VisitedState>(state => state.visitedState);
    const authState = useSelector<State, UserState>(state => state.authState);
    console.log('auth state');
    console.log(authState);

    useLoadUser(visitedState)

    useEffect(() => {
        getCategories();
    }, [router.query.categories])
    useEffect(() => {
        console.log(router.query);
        let arr: string[] = [];
        if (router.query.categories) arr = arr.concat(router.query.categories)
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

