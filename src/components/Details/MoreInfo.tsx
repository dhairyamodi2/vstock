import { ArrowRightIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import ImageCard from "../Images/ImageCard";

const MoreInfo = function () {
    return (
        <div className="more-info">
            <div className="more-info-heading">
                <Button
                rightIcon={<ArrowRightIcon />}
                className="view-all"
                bgColor={'black'}
                color={'white'}
                transition={'all 0.3s'}
                _hover={{ bgColor: 'black', color: 'white' , transform: 'scale(1.03)'}}>More From Same ALBUM</Button>
            </div>
            <div className="card-list">
            <ImageCard id="a77cd688-f9ed-44bb-bca6-b71808658263" public_url="http://res.cloudinary.com/dls8p0rfw/image/upload/v1681210252/file_qfq1jq.jpg" verdict="approved"/>
            <ImageCard id="a77cd688-f9ed-44bb-bca6-b71808658263" public_url="http://res.cloudinary.com/dls8p0rfw/image/upload/v1681210252/file_qfq1jq.jpg" verdict="approved"/>
            <ImageCard id="a77cd688-f9ed-44bb-bca6-b71808658263" public_url="http://res.cloudinary.com/dls8p0rfw/image/upload/v1681210252/file_qfq1jq.jpg" verdict="approved"/>
            </div>
            
        </div>
    )
}

export default MoreInfo;