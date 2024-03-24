import "./style.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className="search-pop-outline">
      <div className="search-pop">
        <div className="search-pop-input">
          <div className="nav-sider-search-warper">
            <IoIosSearch />
            <input className="nav-search" type="search" placeholder="Search" />
          </div>
          <button className="text-2xl">
            <IoIosCloseCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
