import { HamburgerIcon } from "@chakra-ui/icons"
import { Button, Text, useDisclosure } from "@chakra-ui/react"
import Image from "next/image"
import DrawerComponent from "./Drawer"
import vStockLogo from '../../assets/vStockLogo.svg';
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { State } from "@/redux/store";
import {UserState} from '@/redux/User/user.types'

export const Header = function(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useRouter();
    function handleClick(){
        router.push('/account/login');
    }
    const authState = useSelector<State, UserState>(state => state.authState);
    console.log(authState);
    return (
        <div className="header">
             <HamburgerIcon onClick={onOpen} className='ham-icon'/>
            <DrawerComponent isOpen={isOpen} onClose={onClose} onOpen = {onOpen}/>
            <span className="vstock-logo" onClick={() => router.push('/')}>vStock</span>
            <Button 
            bgColor={'black'} 
            color={'white'} 
            transform={'0.3s'}
            _hover={{bgColor: 'black', color: 'white'}} onClick={handleClick}>{authState.isAuthenticated ? "Account" : "Sign In"}</Button>
        </div>
    )
}