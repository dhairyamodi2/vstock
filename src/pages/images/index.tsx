import { Header } from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import Search from "@/components/Common/Search";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Pricing } from "@/components/Pricing/Pricing";
import ImageList from "@/components/Images/ImageList";

export default function Images(){
    const router = useRouter();
    useEffect(() => {
        console.log(router.query.categories);
    }, [])
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

