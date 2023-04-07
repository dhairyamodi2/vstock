import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface CategoryProps {
    category_name: string;
    category_image: string;
}
const CategoriesCard: React.FC<CategoryProps> = function (category) {
    const router = useRouter();
    function handleClick() {
        router.push({
            pathname: '/images',
            query: {
                categories: ["Landscape", "Nature"]
            },
        }, '/images', { shallow: true })
    }
    return (
       
            <div className="category-card" onClick={handleClick}>
                <Image src={category.category_image} loading={'eager'} alt={''} width={440} height={440} className={'category-img'}>
                </Image>
                <p className="category-description">{category.category_name}</p>
            </div>
    )
}

export default CategoriesCard;