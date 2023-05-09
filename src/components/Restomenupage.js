import Restomenuinfo from "./restomenudata";
import { Restohead } from "./Menudestructure";
import { useRestoheader, useRestomenu } from "../utils/useRestomenu";
import { useParams } from "react-router-dom";
import { Shimmermenuui } from "./Shimmer";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Cartchecout = () => {
    cartitems = useSelector((store) => store.cart.items)
    cartdata = useSelector((store) => store.cart.totalItemsCount)
    const itemscount = Object.values(cartitems).length
    return itemscount > 0 ? (
        <div className="checkout">
            <div className="checkout_count">
                <h4>Your Order&nbsp;({itemscount} items)</h4>
            </div>
            <NavLink to='/cart'>
                <button>Checkout</button>
            </NavLink>
        </div>
    ) : (null)
}

const Restomenupage = () => {
    const { paramsid } = useParams()
    const restomenulist = useRestomenu(paramsid);
    const restomenuheader = useRestoheader(paramsid);

    return (!restomenulist) ? (<Shimmermenuui />) : (
        <>
            <Restohead {...restomenuheader} key={paramsid} />
            <div>
                <div className="restomenudata">
                    {
                        restomenulist.map((menuiteminfo) => {
                            return <Restomenuinfo collection_data={menuiteminfo} />
                        })
                    }
                </div>
            </div>
            <Cartchecout />
        </>
    )
}
export default Restomenupage