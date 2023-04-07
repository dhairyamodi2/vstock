import { UserState } from "@/types/Account";
import ContributorProfile from "./CompleteCustomerProfile";
import CustomerProfile
 from "./CompleteContributorProfile";
const CompleteSignUp : React.FC<UserState>= function({email, id, type}){
    return (
        <div>
            {type === 'customer' && <CustomerProfile />}
            {type === 'contributor' && <ContributorProfile />}
        </div>
    )
}
export default CompleteSignUp;