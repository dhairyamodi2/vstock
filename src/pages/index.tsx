import CategoryList from "@/components/Categories/CategoriesList";
import Footer from "@/components/Common/Footer";
import { Header } from "@/components/Common/Header";
import Search from "@/components/Common/Search";
import ImageList from "@/components/Images/ImageList";
import { Pricing } from "@/components/Pricing/Pricing";

export default function Home() {
  return (
    <div className="home">
      <Header></Header>
      <Search />
      <CategoryList />
      <Pricing />
      <Footer/>
    </div>
  )
}
