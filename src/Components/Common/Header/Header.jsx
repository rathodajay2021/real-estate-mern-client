import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  URL_ABOUT,
  URL_HOME,
  URL_HOME_PAGE,
  URL_SIGN_IN,
} from "../../../Utils/Path";

const Header = () => (
  <header className="bg-slate-200">
    <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
      <Link to={URL_HOME_PAGE}>
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-500">Sahand</span>
          <span className="text-slate-700">Estate</span>
        </h1>
      </Link>
      <form className="bg-slate-100 p-3 rounded-lg flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent focus:outline-none w-24 sm:w-64"
        />
        <FaSearch className="text-slate-600" />
      </form>
      <ul className="flex gap-4">
        <Link to={URL_HOME}>
          <li className="hidden sm:inline text-slate-700 hover:underline hover:cursor-pointer">
            Home
          </li>
        </Link>
        <Link to={URL_ABOUT}>
          <li className="hidden sm:inline text-slate-700 hover:underline hover:cursor-pointer">
            About
          </li>
        </Link>
        <Link to={URL_SIGN_IN}>
          <li className="text-slate-700 hover:underline hover:cursor-pointer">
            Sign in
          </li>
        </Link>
      </ul>
    </div>
  </header>
);

export default Header;
