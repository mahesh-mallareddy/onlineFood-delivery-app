import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faHeadset, faCartShopping, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { faBars } from "@fortawesome/free-solid-svg-icons"


const Logo = () => {
    return (
        <div className="logo">
            <h2>GO-EAT</h2>
        </div>
    )
}
const Navlist = () => {
    const [clicked, setclicked] = useState(false)
    return (
        <>
            <div className={clicked ? "navbar navlist mobileactive" : "navlist"}>
                <ul>
                    <Link to="/">
                    <li><FontAwesomeIcon icon={faHouse} size="lg" />HOME</li>
                    </Link>
                    <Link to="/cart">
                    <li><FontAwesomeIcon icon={faCartShopping} size="lg" />CART</li>
                    </Link>
                    <Link to="/support">
                    <li ><FontAwesomeIcon icon={faHeadset} size="lg" />support</li>
                    </Link>
                    <li className="login"><FontAwesomeIcon icon={faRightToBracket} />Login</li>
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


export default Nav = () => {
    return (
        <div className="navigation">
            <div className="navbar">
                <Logo />
                <Navlist />
            </div>
        </div>
    )
}