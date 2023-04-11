import { DownloadIcon, StarIcon } from "@chakra-ui/icons"
import { Button } from "@chakra-ui/react"
import Image from "next/image"

export const DetailsImage = function () {
    return (
        <div className="image-details">
            <img src={"http://res.cloudinary.com/dls8p0rfw/image/upload/v1681210252/file_qfq1jq.jpg"} className='details-img' />
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
                    _hover={{ bgColor: 'black', color: 'white' }}>Download</Button>
            </div>

        </div>
    )
}