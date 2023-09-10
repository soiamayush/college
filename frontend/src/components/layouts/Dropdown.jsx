import "./dropdown.css";
import {React} from "react"
import { logout } from '../../actions/userActions'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";


const Dropdown = () => {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
        // window.location.reload(true);
      }
  return (
    <nav id="colorNav">
    <ul>
        <li className="">
            <i className="fa-solid fa-gears" style={{fontSize : "25px"}}></i>
            <ul>
                <Link><Link to="#">Orders</Link></Link>
                <Link><Link to="#">Dashboard</Link></Link>
                <Link><Link to="#">Profile</Link></Link>
                <Link><Link to="" onClick={logoutHandler}>Logout</Link></Link>
            </ul>
        </li>
    </ul>
</nav>
  );
};

export default Dropdown;