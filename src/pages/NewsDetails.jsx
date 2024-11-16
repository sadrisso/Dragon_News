import { useLoaderData } from "react-router-dom";
import RightNavbar from "../components/layout-component/RightNavbar";
import Navbar from "../components/Navbar";


const NewsDetails = () => {

    const data = useLoaderData()
    const news = data?.data[0]
    console.log(news)

    return (
        <div className="container mx-auto font-poppins">
            <header className="">
                <Navbar />
            </header>

            <main className="grid grid-cols-12 mt-10 gap-4">
                <div className="col-span-9">
                    <div className="card bg-base-100 mb-5 border">
                        <div className="card-body">
                            <h2 className="font-semibold mb-3 text-gray-400">Dragon News Details</h2>
                            <figure className="pb-5">
                                <img
                                    className="w-[1100px] mx-auto"
                                    src={news.image_url}
                                    alt="Shoes" />
                            </figure>
                            <h2 className="card-title mt-4 text-2xl">{news.title}</h2>
                        </div>
                        <p className="my-5 px-6">{news.details}</p>
                    </div>
                </div>
                <div className="col-span-3">
                    <RightNavbar />
                </div>
            </main>
        </div>
    );
};

export default NewsDetails;