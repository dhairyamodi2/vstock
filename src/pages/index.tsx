import CategoryList from "@/components/Categories/CategoriesList";
import Footer from "@/components/Common/Footer";
import { Header } from "@/components/Common/Header";
import Search from "@/components/Common/Search";
import ImageList from "@/components/Images/ImageList";
import { Pricing } from "@/components/Pricing/Pricing";
import { useLoadUser } from "@/hooks/loaduser";
import { allActions, State } from "@/redux/store";
import { getMe, visitOnce } from "@/redux/User/user.actions";
import { VisitedState, UserState } from "@/redux/User/user.types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

export default function Home() {
  const dispatch = useDispatch();
  const { getCategories } = bindActionCreators(allActions, dispatch)
  const visitedState = useSelector<State, VisitedState>(state => state.visitedState);
  const authState = useSelector<State, UserState>(state => state.authState);
  console.log('auth state');
  console.log(authState);

  useLoadUser(visitedState)

  useEffect(() => {
    getCategories()
  }, [])
  return (
    <div className="home">
      {authState.loading == true ? "Loading" : <>
        <Header></Header>
        <Search />
        <CategoryList />
        <Pricing />
        <Footer />
      </>}

    </div>
  )
}
