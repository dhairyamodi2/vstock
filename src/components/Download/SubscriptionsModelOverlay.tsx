import { ImageDetailState } from "@/redux/Images/images.types";
import { logoutAction } from "@/redux/User/user.actions";
import { Subscription } from "@/types/Subscription";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AlreadyDownloaded from "./AlreadyDownloadedOverlay";
import AlreadySubscribed from "./AlreadySubscribed";


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
    const alreadyDownloaded = useDisclosure();
    const alreadySubscribed = useDisclosure();
    useEffect(() => {
        if(isOpen === true){
            fetch('http://localhost:3001/downloads/' + imageDetails.stock?.id, {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }).then((data) => {
                if(data.status === 401){
                    dispatch(logoutAction() as any);
                    
                }

                return data.json();
            }).then((data)=> {
                let res = data as CheckDownloadsResponse
                console.log(data);
                if(res.success == true){
                    
                    if(res.alreadyDownload === true){
                        alreadyDownloaded.onOpen();
                        return;
                    }
                    if(res.alreadySubscribed == true){
                        alreadySubscribed.onOpen();
                        // onClose();
                        return;
                    }
                    
                }
            })
        }
    }, [isOpen])
    return (
        <Modal onClose={onClose} size={'full'} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo ducimus porro omnis reprehenderit eveniet deserunt neque illo cum at quaerat, eligendi, facilis dolorem placeat quibusdam. Itaque est odit velit enim!
            <button onClick={() => alreadyDownloaded.onOpen()}>open</button>
            <AlreadyDownloaded isOpen= {alreadyDownloaded.isOpen} onClose= {alreadyDownloaded.onClose} onOpen= {alreadyDownloaded.onOpen} parentClose={onClose} parentOpen={isOpen}/>
            <AlreadySubscribed isOpen= {alreadySubscribed.isOpen} onClose= {alreadySubscribed.onClose} onOpen= {alreadySubscribed.onOpen} parentClose={onClose} parentOpen={isOpen}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    )
}

export default DownloadOverlay;