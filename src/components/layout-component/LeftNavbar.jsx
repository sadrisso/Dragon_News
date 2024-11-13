import { useEffect, useState } from "react";


const LeftNavbar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then((res) => res.json())
            .then((data) => setCategories(data.data.news_category))
    }, [])

    console.log(categories)

    return (
        <>
            <div className="font-semibold text-xl mb-4">Categories ({categories.length})</div>
            <div className="flex flex-col gap-2">
                {categories.map((res) =>
                    <button className="btn rounded-none">{res.category_name}</button>
                )}
            </div>
        </>
    );
};

export default LeftNavbar;