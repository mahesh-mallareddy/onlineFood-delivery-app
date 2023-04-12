import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Restomenudata from "./Menudestructure";

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
                                            <Restomenudata {...products_data} key={products_data.products_id} />
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