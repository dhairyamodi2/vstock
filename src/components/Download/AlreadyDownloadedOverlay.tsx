import { OverlayProps } from "@/types/overlay"
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react"

interface ParentClose extends OverlayProps{
    parentClose : () => void;
    parentOpen : boolean
}
const AlreadyDownloaded : React.FC<ParentClose> = function({onClose, onOpen, isOpen, parentClose, parentOpen}){
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo ducimus porro omnis reprehenderit eveniet deserunt neque illo cum at quaerat, eligendi, facilis dolorem placeat quibusdam. Itaque est odit velit enim!
          </ModalBody>
        </ModalContent>
      </Modal>
    )
}


export default AlreadyDownloaded