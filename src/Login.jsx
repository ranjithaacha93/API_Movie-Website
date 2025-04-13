import './Login.css'
import { IoIosCloseCircle } from "react-icons/io";
import { TiVendorApple } from "react-icons/ti";
import { FcGoogle } from "react-icons/fc";

export default function Login( {showLogin , setshowLogin} ){
    
    return(
        <>
        <div className="Login">
            <div className="Login-box">
                <div className="close-box">
                    <span onClick={()=> setshowLogin(false)}><IoIosCloseCircle/></span>
                </div>
                <h2> SIGN IN </h2>
                <form>
                    <div>
                        <label> Email </label>
                        <input type="email" name="email" id="" placeholder='Enter your Email'/>
                    </div>
                    <div>
                        <label> Password </label>
                        <input type="password" name="password" id="" placeholder='Enter your Password'/>
                        <a href="#"> Forgot Password </a>
                    </div>
                    <button> Submit </button>
                    <div className='text'>
                        <a href="#"> Login </a>
                    </div>
                    <div className="apple-google">
                        <span><TiVendorApple/></span>
                        <p> Login with Apple </p>
                    </div>
                    <div className="apple-google">
                        <span><FcGoogle/></span>
                        <p> Login with Google </p>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}