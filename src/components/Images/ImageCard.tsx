import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdOutlineAddShoppingCart, MdOpenInNew } from 'react-icons/md'
const ImageCard = function () {
    const router = useRouter();
    function handleClick() {
        router.push({
            pathname: '/images',
            query: {
                categories: ["Landscape", "Nature"]
            }
        })
    }
    return (
        <div className="image-card" onClick={handleClick}>
            <Image src={'https://c4.wallpaperflare.com/wallpaper/83/500/871/waterfall-high-resolution-desktop-wallpaper-preview.jpg'} loading={'lazy'} alt={''} width={440} height={440} >
            </Image>
            <div className="image-actions">
                <div className="img-actions">
                    <span>2es5-s4we3</span>
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