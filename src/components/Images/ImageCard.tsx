import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdOutlineAddShoppingCart, MdOpenInNew } from 'react-icons/md'


interface ImageProps {
    id: string;
    public_url : string;
    verdict : string;
}
const ImageCard : React.FC<ImageProps>= function ({id, public_url, verdict}) {
    const router = useRouter();
    function handleClick() {
        router.push({
            pathname: '/images/details/' + id,
        })
    }
    return (
        <div className="image-card" onClick={handleClick}>
            <Image src={public_url} loading={'lazy'} alt={''} width={440} height={440} >
            </Image>
            <div className="image-actions">
                <div className="img-actions">
                    <span>{id}</span>
                    <div className="i-icons">
                        <MdOutlineAddShoppingCart />
                    </div>
                    <div className="i-icons">
                        <MdOpenInNew />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageCard;