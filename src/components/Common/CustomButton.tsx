import { Button } from "@chakra-ui/react"
import React from "react"

export const CustomButton : React.FC<{text: string}> = ({text}) => {
    return (
        <div>
            <Button 
            bgColor={'black'} 
            color={'white'} 
            transform={'0.3s'}
            _hover={{bgColor: 'black', color: 'white'}}>{text}</Button>
        </div>
    )
}