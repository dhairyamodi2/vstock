import { HamburgerIcon } from "@chakra-ui/icons"
import { Button, Text, useDisclosure } from "@chakra-ui/react"
import Image from "next/image"
import DrawerComponent from "./Drawer"
import vStockLogo from '../../assets/vStockLogo.svg';
import { useRouter } from "next/router";

export const Header = function(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useRouter();
    function handleClick(){
        router.push('/account/login');
    }
    return (
        <div className="header">
             <HamburgerIcon onClick={onOpen} className='ham-icon'/>
            <DrawerComponent isOpen={isOpen} onClose={onClose} onOpen = {onOpen}/>
            <span className="vstock-logo">vStock</span>
            <Button 
            bgColor={'black'} 
            color={'white'} 
            transform={'0.3s'}
            _hover={{bgColor: 'black', color: 'white'}} onClick={handleClick}>Sign In</Button>
        </div>
    )
}