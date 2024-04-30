import { useState } from "react";
import "./App.css";
import Event from "./Events";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Home from "./Home";
import logo from "./assets/logo/logo.jpg";
import Gallery from "./Gallery";
import Contact from "./Contact";
import { Link } from "wouter";

function App() {
  const [toggle, setToggle] = useState(true);
  const handleToggleHamberger = () => {
    setToggle(!toggle);
  };

  const handleRemoveSideBar = () => {
    setToggle(true);
  };
  return (
    <>
      <div>
        <div className="nav-lists">
          <span className="logo">
            <img src={logo} alt="logo" className="logo-image" />
          </span>
          <div className="topNavImage"></div>
          <header>
            <nav>
              <ul>
                <div className="desktop-mode">
                  <li>
                    <a id="homeTab" href="#" title="Home">
                      <span> Home</span>
                    </a>
                  </li>
                  <li>
                    <a id="othersTab" href="#demo" title="Gallary">
                      <span> Gallery</span>
                    </a>
                  </li>
                  <li>
                    <a id="yourTab" href="#events" title="Events">
                      <span> Events</span>
                    </a>
                  </li>
                  <li>
                    <a id="usersTab" href="#about" title="Users">
                      <span> About</span>
                    </a>
                  </li>
                  <li>
                    <a href="#footer" title="Profile">
                      <span> Contact</span>
                    </a>
                  </li>
                  <li>
                    <Link href="/registration" title="Logout">
                      <span> Registration</span>
                    </Link>
                  </li>
                </div>
                <span className="hambergurspan" onClick={handleToggleHamberger}>
                  {toggle ? (
                    <GiHamburgerMenu className="icon-hamberger" />
                  ) : (
                    <IoMdClose className="icon-hamberger" />
                  )}
                </span>
              </ul>
            </nav>
          </header>
          {!toggle && (
            <div className="mobile-mode">
              <ul>
                <li>
                  <a
                    id="homeTab"
                    href="#home"
                    title="Home"
                    onClick={handleRemoveSideBar}
                  >
                    <span> Home</span>
                  </a>
                </li>
                <li>
                  <a
                    id="othersTab"
                    href="#demo"
                    title="Others Post"
                    onClick={handleRemoveSideBar}
                  >
                    <span> Gallery</span>
                  </a>
                </li>
                <li>
                  <a
                    id="yourTab"
                    href="#"
                    title="My Post"
                    onClick={handleRemoveSideBar}
                  >
                    <span> Events</span>
                  </a>
                </li>
                <li>
                  <a
                    id="usersTab"
                    href="#"
                    title="Users"
                    onClick={handleRemoveSideBar}
                  >
                    <span> About</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    title="Profile"
                    onClick={handleRemoveSideBar}
                  >
                    <span> Contact</span>
                  </a>
                </li>
                <li>
                  <Link
                    href="/registration"
                    title="Logout"
                    onClick={handleRemoveSideBar}
                  >
                    <span> Registration</span>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
