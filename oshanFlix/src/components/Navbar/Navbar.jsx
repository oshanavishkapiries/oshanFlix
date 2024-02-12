import "./style.css";
import navlinks from "../../data/navlinks";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import ButtonPrimary from "../Sub/ButtonPrimary";
import { navSiderOpenClose } from "../../utils/toggles";
import { useSelector } from "react-redux";

const Navbar = () => {
  const desktop = useSelector((state) => state.controller.screenSize.desktop);

  return (
    <>
      <nav className="nav">
        <div className="nav-logo">
          <img src="/img/logo.svg" alt="logo" loading="lazy" />
        </div>

        {desktop && (
          <div className="nav-links">
            <ul>
              {navlinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.link}>
                    {<link.icon />}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="nav-ends">
          {/* {desktop && (
            <div className="nav-search-warper">
              <IoIosSearch />
              <input
                className="nav-search"
                type="search"
                placeholder="Search"
              />
            </div>
          )} */}

          <div className="flex items-center">
            <button className="menu" onClick={navSiderOpenClose}>
              <IoMdMenu />
            </button>
            {/* <ButtonPrimary text="Sign In" onClick={() => {}} /> */}
          </div>
        </div>
      </nav>
      <div className="nav-sider">
        <div className="nav-sider-start">
          <button
            onClick={navSiderOpenClose}
            className="w-10 h-10 close-btn justify-center bg-flix-orange-tint-01"
          >
            <IoClose />
          </button>
        </div>
        {/* <div className="nav-sider-search-warper">
          <IoIosSearch />
          <input className="nav-search" type="search" placeholder="Search" />
        </div> */}
        <div className="nav-sider-links">
          <ul>
            {navlinks.map((link, index) => (
              <li key={index}>
                <Link to={link.link}>
                  {<link.icon />}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
