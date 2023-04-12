import { Header } from "@/components/Common/Header";
import Footer from '@/components/Common/Footer';
import { Pricing } from "@/components/Pricing/Pricing";
import { useRouter } from "next/router"
import { DetailsPage } from "@/components/Details/Details";
import MoreInfo from "@/components/Details/MoreInfo";
import MoreDetails from "@/components/Details/MoreDetails";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImageDetails } from "@/redux/Images/images.actions";
import { getCategories } from "@/redux/Categories/categories.actions";
import { State } from "@/redux/store";
import { UserState, VisitedState } from "@/redux/User/user.types";
import { useLoadUser } from "@/hooks/loaduser";

export default function ImageDetails() {
    const router = useRouter();
    const dispatch = useDispatch();
    let { id } = router.query;
    const visitedState = useSelector<State, VisitedState>(state => state.visitedState);
    const authState = useSelector<State, UserState>(state => state.authState);
    console.log('auth state');
    console.log(authState);

    useLoadUser(visitedState)
    useEffect(() => {
        if (id == undefined) id = "";
        if (typeof id === "object") id = ""
        dispatch(getImageDetails(id) as any)
        dispatch(getCategories() as any)
    }, [id]);
    return (
        <div>
            <Header />
            <DetailsPage />
            <MoreDetails />
            <Pricing />
            <Footer />
        </div>
    )
}