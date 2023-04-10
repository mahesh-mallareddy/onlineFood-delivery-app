import { useState } from "react"

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
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>ORDER</li>
                    <li>CONTANCT</li>
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