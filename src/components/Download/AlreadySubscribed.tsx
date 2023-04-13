import { ImageDetailState } from "@/redux/Images/images.types";
import { OverlayProps } from "@/types/overlay"
import { Subscription } from "@/types/Subscription";
import { Box, Button, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react"
import { MouseEventHandler } from "react";

interface ParentClose extends OverlayProps {
    parentClose: () => void;
    parentOpen: boolean
    subscription: Subscription | null;
    imageDetails: ImageDetailState
}

const AlreadySubscribed: React.FC<ParentClose> = function ({ onClose, onOpen, isOpen, parentOpen, parentClose, subscription, imageDetails }) {
    const handleClick: MouseEventHandler<HTMLButtonElement> = async function (e) {
        try {
            const data = await fetch('http://localhost:3001/downloads', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify({
                    contributor: imageDetails.stock?.user.uid,
                    subscription: subscription?.s_id,
                    stockId: imageDetails.stock?.id
                })
            })
            const res = await data.json();
            if (res.statusCode == 200 && res.success == true) {
                alert("Image invoked. You can now Download Images from your My Account's My Images' section");
                onClose();
                parentClose();
                return;
            }
            alert(res.message);
        } catch (error) {
            alert(error);
        }
        onClose();
        parentClose();
    }
    return (
        <Modal onClose={() => {
            onClose()
            parentClose()
        }} size={'5xl'} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <Heading fontWeight={'bold'} size={'md'}>
                        You already have an Active Subscription.
                    </Heading>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>


                    <Box display={'flex'} justifyContent={'center'} flexDirection='column' alignItems={'center'}>
                        <Text>You have {subscription?.remaining_images} remaining images in your current subscription. </Text>
                        <Button
                            bgColor={'black'}
                            color={'white'}
                            transform={'0.3s'}
                            margin={'10px 0px'}
                            _hover={{ bgColor: 'black', color: 'white' }} onClick={handleClick}>Get Image</Button>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default AlreadySubscribed;