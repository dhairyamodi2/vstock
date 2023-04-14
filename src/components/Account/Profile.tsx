import { Button } from "@chakra-ui/react";
import { useEffect } from "react";

const Profile = function () {
    // useEffect(() => {
    //     alert('profile mounted');
    // }, [])
    return (
        <div className="profile">
            <form className="profile-update">
                <input type={'text'} name={'name'} placeholder={'Name'} autoComplete='off'/>
                <input type={'text'} name={'email'} placeholder={'Email'} autoComplete='off'/>
                <input type={'text'} name={'industry'} placeholder={'Industry'} autoComplete='off' />
                <input type={'text'} name={'bank_ac_number'} placeholder={'Bank Account Number'} autoComplete='off' />
                <input type={'text'} name={'IFS_Code'} placeholder={'IFS Code'} autoComplete='off' />
                <Button
                    bgColor={'black'}
                    color={'white'}
                    transition={'0.8s'}
                    marginTop={'25px'}
                    _hover={{ bgColor: 'black', color: 'white', transform:'scale(1.03)' }}>Update Profile</Button>
            </form>
        </div>
    )
}

export default Profile;