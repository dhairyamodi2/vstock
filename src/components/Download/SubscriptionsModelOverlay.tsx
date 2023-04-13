import { ImageDetailState } from "@/redux/Images/images.types";
import { logoutAction } from "@/redux/User/user.actions";
import { Subscription } from "@/types/Subscription";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AlreadyDownloaded from "./AlreadyDownloadedOverlay";
import AlreadySubscribed from "./AlreadySubscribed";
import Subscriptions from "./Subscriptions";


interface DownloadOverlayProps {
    onClose : () => void;
    isOpen : boolean;
    imageDetails : ImageDetailState
}

interface CheckDownloadsResponse {
    success: boolean;
    statusCode : 200 | 400 | 500;
    message: string;
    alreadyDownload : boolean;
    alreadySubscribed : boolean;
    subscription : Subscription | null;
}
const DownloadOverlay : React.FC<DownloadOverlayProps> = function({isOpen, onClose, imageDetails}){
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [subscribe, setSubscribe] = useState(false);
    const [subscription, setSub] = useState<Subscription | null>(null);
    const alreadyDownloaded = useDisclosure();
    const router = useRouter();
    const alreadySubscribed = useDisclosure();
    useEffect(() => {
        setSubscribe(false);
        setLoading(true);
        if(isOpen === true){
            fetch('http://localhost:3001/downloads/' + imageDetails.stock?.id, {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }).then((data) => {
                if(data.status === 401){
                    dispatch(logoutAction() as any);
                    onClose()
                    router.push('/account/login');
                    
                }

                return data.json();
            }).then((data)=> {
                setLoading(false);
                let res = data as CheckDownloadsResponse
                console.log(data);
                if(res.success == true){
                    
                    if(res.alreadyDownload === true){
                        alreadyDownloaded.onOpen();
                        return;
                    }
                    if(res.alreadySubscribed == true){
                        setSub(res.subscription);
                        alreadySubscribed.onOpen();
                        // onClose();
                        return;
                    }
                    setSubscribe(true)
                }
            }).catch((error) => console.log(error));
        }
    }, [isOpen])
    return (
        <Modal onClose={onClose} size={'full'} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {subscribe && <Subscriptions />}
            <AlreadyDownloaded isOpen= {alreadyDownloaded.isOpen} onClose= {alreadyDownloaded.onClose} onOpen= {alreadyDownloaded.onOpen} parentClose={onClose} parentOpen={isOpen}/>
            <AlreadySubscribed isOpen= {alreadySubscribed.isOpen} onClose= {alreadySubscribed.onClose} onOpen= {alreadySubscribed.onOpen} parentClose={onClose} parentOpen={isOpen} subscription= {subscription} imageDetails={imageDetails}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    )
}

export default DownloadOverlay;