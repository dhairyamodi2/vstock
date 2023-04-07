import CategoryList from "@/components/Categories/CategoriesList";
import { Header } from "@/components/Common/Header";
import Search from "@/components/Common/Search";
import ImageList from "@/components/Images/ImageList";

export default function Home() {
  return (
    <div className="home">
      <Header></Header>
      <Search />
      <CategoryList />
    </div>
  )
}
