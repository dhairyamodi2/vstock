import { UserState } from "@/types/Account";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ChangeEvent, ChangeEventHandler, MouseEventHandler, useState } from "react";

const CustomerProfile : React.FC<UserState>= function({email, id, type}){
    const [signUpState, setSignUpState] = useState({
        name: "",
        industry: "",
        bank_ac_number : "",
        IFS_code : ""
    });
    const router = useRouter();
    function handleSignUp(){
        const obj = {
            email,
            name : signUpState.name,
            uid : id,
            user_type : 'customer',
            industry : signUpState.industry,
            bank_ac_number : signUpState.bank_ac_number,
            IFS_code : signUpState.IFS_code
        }
        console.log(obj);
        fetch('http://localhost:3001/user/register', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-type': "application/json"
            }
        }).then((data) => data.json()).then((data) => {
            console.log(data);
            console.log(data != null && data.data.user != null)
            if(data != null && data.data.user != null){
                router.push('/');
            }
            else {
                alert(data.message);
            }
        })
    }
    function handleChange(e : ChangeEvent<HTMLInputElement>){
        setSignUpState((prevState) => {
            return {
                ...prevState,
                [e.target.name] : e.target.value
            }
        })
    }
    return (
        <form className="complete-sign-up" method="POST">
            <input type={'text'} name="name" placeholder="Your Name" onChange={handleChange} required/>
            <input type={'text'} name="industry" placeholder="Industry" onChange={handleChange}/>
            <input type={'text'} name="bank_ac_number" placeholder="Bank Account Number" onChange={handleChange}/>
            <input type={'text'} name="IFS_Code" placeholder="IFS Code" onChange={handleChange}/>
            <Button
                size={'md'}
                marginTop={6}
                bgColor={'black'}
                color={'white'}
                transform={'0.3s'}
                _hover={{ bgColor: 'black', color: 'white' }} onClick={handleSignUp} >Sign Up</Button>
        </form>
    )
}

export  default CustomerProfile;