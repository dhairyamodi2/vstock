import { OverlayProps } from "@/types/overlay"
import { Heading, List, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, UnorderedList } from "@chakra-ui/react"

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
          <ModalHeader>
            <Heading size={'md'}>You have already invoked this image</Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            
            <Text>To Download this image: </Text>
            <List>
              <UnorderedList>
              <ListItem>Navigate to my accounts</ListItem>
              <ListItem>Select my Downloads</ListItem>
              <ListItem>Scroll through the image you want to download</ListItem>
              <ListItem>Click on Download Button and high resolution image will be downloaded</ListItem>
              </UnorderedList>
              
            </List>
          </ModalBody>
        </ModalContent>
      </Modal>
    )
}


export default AlreadyDownloaded