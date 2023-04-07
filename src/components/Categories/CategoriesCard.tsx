import Image from "next/image";
import { useEffect, useState } from "react";

const CategoriesCard = function(){

    return (
        <div className="category-card">
            <Image src={'https://c4.wallpaperflare.com/wallpaper/83/500/871/waterfall-high-resolution-desktop-wallpaper-preview.jpg'} loading={'lazy'} alt={''} width={440} height={440} className= {'category-img'}>
            </Image>
            <p className="category-description">Nature and Landscapes</p>
        </div>
    )
}

export default CategoriesCard;