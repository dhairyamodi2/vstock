import { Header } from "@/components/Common/Header";
import Footer from '@/components/Common/Footer';
import { Pricing } from "@/components/Pricing/Pricing";
import { useRouter } from "next/router"
import { DetailsPage } from "@/components/Details/Details";
import MoreInfo from "@/components/Details/MoreInfo";
import MoreDetails from "@/components/Details/MoreDetails";

export default function ImageDetails(){
    const router = useRouter();
    const {id} = router.query;

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