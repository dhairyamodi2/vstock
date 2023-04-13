import { ImageDetailState } from "@/redux/Images/images.types"
import { State } from "@/redux/store"
import { DownloadIcon, StarIcon } from "@chakra-ui/icons"
import { Button, Spinner, useDisclosure } from "@chakra-ui/react"
import Image from "next/image"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import Overlay from "../Download/Overlay"
import DownloadOverlay from "../Download/SubscriptionsModelOverlay"

export const DetailsImage = function () {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const imageDetails = useSelector<State, ImageDetailState>(state => state.imageDetails)
    return (
        <div className="image-details">
            {imageDetails.loading === true ?
                <div className="loader">
                    <Spinner size='xl' textAlign={'center'} />
                </div> :
                <>
                    {imageDetails.stock && imageDetails.stock.public_url && <><img src={imageDetails.stock.public_url} className='details-img' loading="eager"/>
                    <div className="actions-image">
                        <Button
                            leftIcon={<StarIcon />}
                            bgColor={'black'}
                            color={'white'}
                            transform={'0.3s'}
                            _hover={{ bgColor: 'black', color: 'white' }}>Bookmark</Button>
                        <Button
                            leftIcon={<DownloadIcon />}
                            bgColor={'black'}
                            color={'white'}
                            transform={'0.3s'}
                            _hover={{ bgColor: 'black', color: 'white' }}
                            onClick={onOpen}>Download</Button>
                    </div></>}
                    <Overlay isOpen={isOpen} onClose={onClose} imageDetails={imageDetails}/>
                    </>}


        </div>
    )
}