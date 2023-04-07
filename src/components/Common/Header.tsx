import { HamburgerIcon } from "@chakra-ui/icons"
import { Button, Text, useDisclosure } from "@chakra-ui/react"
import Image from "next/image"
import DrawerComponent from "./Drawer"
import vStockLogo from '../../assets/vStockLogo.svg';

export const Header = function(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div className="header">
             <HamburgerIcon onClick={onOpen} className='ham-icon'/>
            <DrawerComponent isOpen={isOpen} onClose={onClose} onOpen = {onOpen}/>
            <span className="vstock-logo">vStock</span>
            <Button 
            bgColor={'black'} 
            color={'white'} 
            transform={'0.3s'}
            _hover={{bgColor: 'black', color: 'white'}}>Sign In</Button>
        </div>
    )
}