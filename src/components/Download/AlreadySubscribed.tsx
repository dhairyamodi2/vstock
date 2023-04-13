import { OverlayProps } from "@/types/overlay"
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react"

interface ParentClose extends OverlayProps{
    parentClose : () => void;
    parentOpen : boolean
}

const AlreadySubscribed : React.FC<ParentClose> = function({onClose, onOpen, isOpen, parentOpen, parentClose}){
    return (
        <Modal onClose={() => {
            onClose()
            parentClose()
        }} size={'lg'} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           subscribed
          </ModalBody>
        </ModalContent>
      </Modal>
    )
}

export default AlreadySubscribed;