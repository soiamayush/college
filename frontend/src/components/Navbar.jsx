import React, { useEffect, useRef, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/userActions";
import { useAlert } from "react-alert"
import "./layouts/dropdown.css"

const Navbar = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const logoutHandler = () => {
    alert.success("Logged out successfully!!")
    dispatch(logout());
  };

  const { loading, user } = useSelector((state) => state.auth);
  // const { cartItems } = useSelector(state => state.cart)
  const [scrolling, setScrolling] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    // Add a scroll event listener to detect scrolling
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Initialize state to keep track of the active element
  const [activeElement, setActiveElement] = useState(0);
  const [activeElementcart, setActiveElementcart] = useState();

  // Function to handle the click event on an element
  const handleClick = (index) => {
    setActiveElement(index);
    setActiveElementcart();
    if (activeElement && isMenuOpen) {
      toggleMenu();
    }
  };
  const handleClickcart = (index) => {
    setActiveElementcart(index);
    setActiveElement();
  };

  // Your list of elements, for example, as an array of items
  const elements = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "shop", path: "/shop" },
    { id: 3, text: "blog", path: "/blog" },
    { id: 4, text: "About", path: "/about" },
    { id: 5, text: "Contact", path: "/contact" },
  ];
  const cart = [
    { id: 6, className: "fa-solid fa-bag-shopping", path: "/cart" },
    { id: 7, className: "fa-regular fa-user", path: "/me" },
  ];

  const handleScroll = () => {
    // Check the scroll position and set the scrolling state
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <div>
      <section
        id="header"
        className={`navbarr ${scrolling ? "scrolledd" : ""}`}
        ref={menuRef}
      >
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          onClick={() => setActiveElement(0)}
        >
          <span className="nav-logo" onClick={() => handleClick(0)}>Becca</span>
        </Link>
        <div>
          <ul id="navbar" className={`${isMenuOpen ? "active close" : ""}`}>
            {elements.map((element, index) => (
              <li key={element.id}>
                <Link
                  to={element.path}
                  className={`${activeElement === index ? "active" : ""}`}
                  onClick={() => handleClick(index)}
                  ref={menuRef}
                >
                  {element.text}
                </Link>
              </li>
            ))}

{user &&   (
              <nav id="colorNav">
                <ul>
                  <li className="">
                    <i
                      className="fa-solid fa-caret-down"
                      style={{ fontSize: "25px" }}
                    ></i>
                    <ul>
                      <li>
                        <Link to="/maintenance" onClick={toggleMenu}>Orders</Link>
                      </li>
                      <li>
                      <Link to="/maintenance" onClick={toggleMenu}>Dashboard</Link>
                      </li>
                      {/* <li>
                        <a href="#">Profile</a>
                      </li> */}
                      <li>
                        <Link to="/" onClick={logoutHandler}>
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            )}

            {user ? (
              cart.map((element, index) => (
                <div key={element.id}>
                  <li id="lg-bag">
                    <Link
                      to={element.path}
                      onClick={() => handleClickcart(index)}
                      className={`${
                        activeElementcart === index ? "active" : ""
                      }`}
                    >
                      <i className={element.className}></i>
                    </Link>
                  </li>
                </div>
              ))
            ) : (
              <div>
                <ul>
                  <li id="">
                    <Link
                      to="/login"
                      onClick={() => handleClickcart(8)}
                      className={`${activeElementcart === 8 ? "active" : ""}`}
                    >
                      {!isMenuOpen && (<i className="fa-solid fa-right-to-bracket"></i>)}
                    </Link>
                  </li>
                </ul>
              </div>
            )}

            <div></div>
          </ul>
        </div>

        <Link className="close" onClick={toggleMenu}>
          <i className={`${isMenuOpen ? "close fa-solid fa-x" : ""}`}></i>
        </Link>

        <div id="mobile">
       
          <Link to="/cart">
            {user && <i className="fa-solid fa-bag-shopping"></i>}
          </Link>
          <Link to="/me">
          {user && <i className="fa-regular fa-user"></i>}
          </Link>

        
          {!user && (
             <div>
             <ul>
               <li id="">
                 <Link
                   to="/login"
                   onClick={() => handleClickcart(8)}
                   className={`${activeElementcart === 8 ? "active" : ""}`}
                 >
                   <i className="fa-solid fa-right-to-bracket"></i>
                 </Link>
               </li>
             </ul>
           </div>
          )}
         
          <i id="bar" className="fas fa-outdent" onClick={toggleMenu}></i>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
