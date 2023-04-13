import { OverlayProps } from "@/types/overlay";
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";

interface PaymentProps extends OverlayProps {
    subType: string;
}
const PaymentOverlay: React.FC<PaymentProps> = function ({ onClose, onOpen, isOpen, subType }) {
    const [publishableKey, setPublishableKey] = useState("");
    const [client_secret, setClientSecret] = useState<string | null>(null);
    useEffect(() => {
        if(isOpen){
            fetch('http://localhost:3001/payments/load/stripe')
            .then((data) => data.json())
            .then((data) => {
                setPublishableKey(data.publishable_key);
            }).catch((err) => {
                alert(err)
            })
        }
        
    }, [isOpen])

    useEffect(() => {
        if (isOpen) {
            fetch('http://localhost:3001/payments/process', {
                method: 'POST',
                headers: {
                    'Content-type': "application/json",
                    Authorization: "Bearer " + localStorage.getItem('token')
                },
                body: JSON.stringify({ s_name: subType })
            }).then((data) => data.json()).then((data) => {
                if (data.statusCode == 400) {
                    alert(data.message);
                    return;
                }
                if (data.success == true) {
                    setClientSecret(data.data.client_secret);
                }
                else {
                    // alert(data.message)
                }
            })
        }

    }, [isOpen])
    return (
        <>

            <Modal onClose={onClose} size={'lg'} isOpen={isOpen}>

                <ModalOverlay />
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {client_secret && <Elements stripe={loadStripe(publishableKey)} options={
                            {clientSecret: client_secret}
                        }>
                            <CheckoutForm client_secret={client_secret} s_name={subType}/>
                        </Elements>
                        }
                    </ModalBody>
                </ModalContent>
            </Modal>

        </>

    )
}

export default PaymentOverlay;