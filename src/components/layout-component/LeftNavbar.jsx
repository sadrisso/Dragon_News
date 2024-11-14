import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


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
                    <NavLink to={`category/${res.category_id}`} className="btn rounded-none bg-base-100">{res.category_name}</NavLink>
                )}
            </div>
        </>
    );
};

export default LeftNavbar;