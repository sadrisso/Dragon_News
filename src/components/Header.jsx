import moment from "moment";
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 py-4">
            <div>
                <img src={logo} alt="" />
            </div>
            <p className="text-gray-600">Journalism Without Fear or Favour</p>
            <p>{moment().format('LLL')}</p>
        </div>
    );
};

export default Header;