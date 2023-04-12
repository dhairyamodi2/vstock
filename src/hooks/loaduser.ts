import { getMe, visitOnce } from "@/redux/User/user.actions";
import { UserState, VisitedState } from "@/redux/User/user.types";
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useDispatch } from "react-redux";

export const useLoadUser = function(visitedState : VisitedState){
    const router = useRouter();
    const dispatch = useDispatch();
    useEffect(() => {
        if (visitedState.visited == false) {
          dispatch(visitOnce() as any);
          dispatch(getMe() as any);
        }
      }, [visitedState.visited])
}