import { Header } from "@/components/Common/Header";
import Footer from '@/components/Common/Footer';
import { Pricing } from "@/components/Pricing/Pricing";
import { useRouter } from "next/router"
import { DetailsPage } from "@/components/Details/Details";
import MoreInfo from "@/components/Details/MoreInfo";
import MoreDetails from "@/components/Details/MoreDetails";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getImageDetails } from "@/redux/Images/images.actions";

export default function ImageDetails(){
    const router = useRouter();
    const dispatch = useDispatch();
    let {id} = router.query;
    useEffect(() => {
        if(id == undefined) id = "";
        if(typeof id === "object") id = ""
        dispatch(getImageDetails(id) as any)
    }, [id]);
    return (
    <div>
        <Header />
        <DetailsPage />
        <MoreDetails />
        <Pricing/>
        <Footer />
    </div>
    )
}