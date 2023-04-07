import CategoryList from "@/components/Categories/CategoriesList";
import Footer from "@/components/Common/Footer";
import { Header } from "@/components/Common/Header";
import Search from "@/components/Common/Search";
import ImageList from "@/components/Images/ImageList";
import { Pricing } from "@/components/Pricing/Pricing";
import { allActions } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

export default function Home() {
  const dispatch = useDispatch();
  const {getCategories} = bindActionCreators(allActions, dispatch)
  useEffect(() => {
    getCategories()
  }, [])
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
