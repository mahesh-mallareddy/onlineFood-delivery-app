import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faHeadset, faCartShopping, faRightToBracket, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useUserAuth } from "../utils/context/userAuthcontext"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const Logo = () => {
    return (
        <div className="logo">
            <h2>GO-EAT</h2>
        </div>
    )
}
const Navlist = () => {
    const [clicked, setclicked] = useState(false)
    const { logOut, stateuser } = useUserAuth();
    const navigate = useNavigate();
    const totalItemsCount = useSelector((state) => state.cart.totalItemsCount)

    const handleSignOut = async () => {
        try {
            await logOut();
            console.log("loged-out sucessfully")
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };
    const handleSignIn = () => {
        navigate("/login");
    };

    return (
        <>
            <div className={clicked ? "navbar navlist mobileactive" : "navlist"}>
                <ul>
                    <Link to="/">
                    <li><FontAwesomeIcon icon={faHouse} size="lg" />HOME</li>
                    </Link>
                    <Link to="/cart">
                    <li><FontAwesomeIcon icon={faCartShopping} size="lg" />CART {totalItemsCount}</li>
                    </Link>
                    <Link to="/support">
                    <li ><FontAwesomeIcon icon={faHeadset} size="lg" />support</li>
                    </Link>
                    <li className="vertical">
                        {stateuser ? <FontAwesomeIcon icon={faRightFromBracket} /> : <FontAwesomeIcon icon={faRightToBracket} />}
                        <p
                            className="nav--btn"
                            onClick={() => {
                                stateuser ? handleSignOut() : handleSignIn();
                            }}>
                            {" "}
                            {stateuser ? "Logout  " : "Login  "}
                        </p></li>
                </ul>
            </div>
            <div className="menu">
                <h2 onClick={() => {
                    setclicked(!clicked)
                }}><FontAwesomeIcon icon={faBars} /></h2>
            </div>
        </>
    )
}
export const Intro = () => {
    const { stateuser } = useUserAuth();
    let name;
    if (stateuser) {
        if (stateuser.displayName != null) {
            name = stateuser.displayName;
        } else {
            name = stateuser.email;
        }
    }

    return (
        <div className="nav-intro">
            <span style={{color:'green'}} >
                {" "}
                {stateuser ? `Hello ${name} ` : "Please Login"} !!!
            </span>
        </div>
    );
};

export default Nav = () => {
    return (
        <div className="navigation">
            <div className="navbar">
                <Logo />
                <Intro />
                <Navlist />
            </div>
        </div>
    )
}