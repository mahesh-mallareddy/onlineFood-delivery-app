import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Restomenudata, Restohead } from "./Menudestructure";
import { Shimmermenuui } from "./Shimmer";
import { useRestomenu, useRestoheader } from "../utils/useRestomenu"

const Restomenuinfo = () => {
    const { paramsid } = useParams()

    // const [restomenulist, setrestomenulist] = useState([])
    const restomenulist = useRestomenu(paramsid);
    const restomenuheader = useRestoheader(paramsid);



    return (!restomenulist) ? (<Shimmermenuui />) : (
        <>
            <Restohead {...restomenuheader} key={paramsid} />
            <div>
                <div className="restomenudata">
                    {
                        restomenulist.map((collection_data, index) => {
                            return (
                                <>
                                    <div className="menudata" key={collection_data.collection_id}>
                                        <div className="menu_head">
                                            <h5 > {collection_data.collection_name} </h5>
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
                        })
                    };
                </div>
            </div >
        </>
    )
};
export default Restomenuinfo