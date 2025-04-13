import './Navbar.css'
import Pic from './images/logo.png';
import { IoSearch } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Nav({ show, setShow , setshowLogin}) {
    return (
        <div className="navbar">
            <div className="navtop">
                <img src={Pic} alt="Logo" />
                <a href="#"> Popular </a>
                <a href="#"> Blog </a>
                <a href="#"> Upcoming </a>
            </div>
            <div className="menu">
                <span><RiMenu3Line onClick={() => setShow(true)} /></span> 
            </div>
            {show && (
                <div className="menushow">
                    <div>
                        <span onClick={() => setShow(false)}><IoIosCloseCircleOutline /></span>
                    </div>
                    <a href="#"> Popular </a>
                    <a href="#"> Blog </a>
                    <a href="#"> Upcoming </a>
                    <a href="#"> Movie </a>
                    <button> SIGN IN </button>
                </div>
            )}
            <div className='navbottom'>
                <div>
                    <span><IoSearch /></span>
                    <input type="text" placeholder='Search' />
                </div>
                <button onClick={()=> setshowLogin(true)}> SIGN IN </button>
                <span><FaUserCircle /></span>
            </div>
        </div>
    );
}
