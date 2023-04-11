import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Restomenuinfo = () => {
    const { paramsid } = useParams()

    const [restomenulist, setrestomenulist] = useState([])

    async function getrestoinfo() {
        const fetchurl = await fetch("https://www.eatsure.com/v1/api/get_all_products/brand_id/" + paramsid + "/store_id/10370/source_id/13")
        const data = await fetchurl.json()
        const restodata = data?.data?.collections

        setrestomenulist(restodata)
    };
    useEffect(() => {
        getrestoinfo()
    }, [])

    return (
        <div>
            it is restomenu components
            <div className="restomenudata">
                    {restomenulist.map((collection_data, index) => {
                        return (
                            <>
                            <div className="menudata">
                                <div className="menu_head">
                                    <h5 key={collection_data.collection_id}>{collection_data.collection_name}</h5>
                                </div>
                                <div className="restoall">

                                    {collection_data.products.map((products_data, index) => {
                                        return (
                                            // <li className="menulist" key={products_data.product_id}> {products_data.product_name} </li>
                                            <div className="menudatalist"  key={products_data.product_id}>
                                                
                                                    <div className="menulist">
                                                        <div className="menulist_effect">
                                                            <div className="menulist_img">
                                                                <img src={products_data.product_imageUrl} alt="order"/>
                                                            </div>
                                                            <div className="menulist_content">
                                                                <p className="menulist_tittle">{products_data.product_name}</p>
                                                                <p className="menulist_disc">{products_data.small_description}</p>
                                                                <div className="menuflex">
                                                                    <p className="menuprice">&#8377;{products_data.display_price}</p>
                                                                    <button>Add</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                            </div>
                                        )
                                    })}
                                </div>
                </div>
                            </>
                        )
                    })}
            </div>
        </div >
    )
};
export default Restomenuinfo