import { useDisclosure } from "@chakra-ui/react";
import { MouseEventHandler, useState } from "react";
import { Pricing } from "../Pricing/Pricing";
import PaymentOverlay from "./PaymentOverlay";

const Subscriptions = function(){
    const [subType, setSubType] = useState('');
    const {isOpen, onOpen, onClose} = useDisclosure();
    const chooseType : MouseEventHandler<HTMLButtonElement> = (e) => {
        setSubType(e.currentTarget.name);
        onOpen();
    }
    return (
        <div className="">
            {subType}
            <Pricing onClick={chooseType}/>
            <PaymentOverlay isOpen= {isOpen} onClose={onClose} onOpen={onOpen} subType={subType}/>
        </div>
    )
}

export default Subscriptions;

