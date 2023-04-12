import { getMe, visitOnce } from "@/redux/User/user.actions";
import { UserState, VisitedState } from "@/redux/User/user.types";
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useDispatch } from "react-redux";

export const useCheckAuth = function(visitedState : VisitedState, authState : UserState, setLoader: React.Dispatch<React.SetStateAction<boolean>>){
    const router = useRouter();
    const dispatch = useDispatch();
    useEffect(() => {
        if (visitedState.visited == false) {
            dispatch(visitOnce() as any);
            dispatch(getMe() as any);
        }
        else {
            if (authState.isAuthenticated == true) {
                router.push("/");
            }
            if(authState.isAuthenticated == false && authState.loading == false){
                setLoader(false);
            }
            
            
        }
        // return setLoader(false);
    }, [visitedState.visited, authState.isAuthenticated])
}