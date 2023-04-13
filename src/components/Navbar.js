import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faHeadset, faCartShopping, faRightToBracket } from '@fortawesome/free-solid-svg-icons'


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
                    <li><FontAwesomeIcon icon={faHouse} size="lg" />HOME</li>
                    <li><FontAwesomeIcon icon={faCartShopping} size="lg" />CART</li>
                    <li><FontAwesomeIcon icon={faHeadset} size="lg" />support</li>
                    <li className="login"><FontAwesomeIcon icon={faRightToBracket} />Login</li>
                </ul>
            </div>
            <div className="menu">
                <h1 onClick={() => {
                    setclicked(!clicked)
                }}>=</h1>
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