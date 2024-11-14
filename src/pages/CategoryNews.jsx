import { useLoaderData } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";


const CategoryNews = () => {

    const { data: news } = useLoaderData();
    console.log(news)

    return (
        <div>
            <p className="font-semibold text-xl mb-3">Dragon News Home</p>
            <p className="text-gray-400">{news.length} news found in this category</p>
            <p>{news.map((singleNews) =>
                <div className="card bg-base-100 mb-5 border">
                    <div className="card-body">
                        <div className="flex justify-between bg-base-200 p-5">
                            <div className="flex items-center gap-2">
                                <img className="w-[50px] h-[50px] rounded-full" src={singleNews.author.img} alt="" />
                                <div>
                                    <p>{singleNews.author.name}</p>
                                    <p>{singleNews.author.published_date}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-2xl">
                                <CiBookmark />
                                <CiShare2 />
                            </div>
                        </div>
                        <h2 className="card-title mt-4">{singleNews.title}</h2>
                    </div>
                    <figure className="pb-5">
                        <img
                            className="w-[700px] mx-auto"
                            src={singleNews.image_url}
                            alt="Shoes" />
                    </figure>
                </div>
            )}
            </p>
        </div>
    );
};

export default CategoryNews;

// {
//     "_id": "919db97c34e0778b387dd40cdfa08130",
//     "others_info": {
//         "is_todays_pick": false,
//         "is_trending": true
//     },
//     "category_id": "01",
//     "rating": {
//         "number": 4.5,
//         "badge": "Excellent"
//     },
//     "total_view": 89,
//     "title": "U.S. concerned about India's participation in Russia military exercises",
//     "author": {
//         "name": "MarketScreener",
//         "published_date": "2022-08-30 18:05:42",
//         "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
//     },
//     "thumbnail_url": "https://i.ibb.co/HXC719r/unsplash-Eh-Tc-C9s-YXsw-19.png",
//     "image_url": "https://i.ibb.co/T0PnZxD/unsplash-Eh-Tc-C9s-YXsw-8.png",
//     "details": "Last month, Moscow announced plans to hold   Vostok   (East) exercises from Aug. 30 to Sept. 5, even as it wages a costly war in Ukraine. The military exercises are expected to include China, India, Belarus, Mongolia, Tajikistan and other countries, China's defense ministry has said. Asked about India's participation, Jean-Pierre told reporters as President Joe Biden flew to Pennsylvania that the United States was concerned about any country participating in military exercises with Russia while it is at war with Ukraine."
// }