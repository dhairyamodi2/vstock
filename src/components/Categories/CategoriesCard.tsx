import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CategoriesCard = function(){
    const router = useRouter();
    function handleClick(){
        router.push({
            pathname: '/images',
            query: {
                categories: ["Landscape", "Nature"]
            }
        })
    }
    return (
        <div className="category-card" onClick={handleClick}>
            <Image src={'https://c4.wallpaperflare.com/wallpaper/83/500/871/waterfall-high-resolution-desktop-wallpaper-preview.jpg'} loading={'lazy'} alt={''} width={440} height={440} className= {'category-img'}>
            </Image>
            <p className="category-description">Nature and Landscapes</p>
        </div>
    )
}

export default CategoriesCard;