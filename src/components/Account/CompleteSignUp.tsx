import { UserState } from "@/types/Account";
import CustomerProfile from "./CompleteCustomerProfile";

const CompleteSignUp : React.FC<UserState>= function({email, id, type}){
    return (
        <div className="login">
            <CustomerProfile email={email} id={id} type={type}/>
        </div>
    )
}
export default CompleteSignUp;