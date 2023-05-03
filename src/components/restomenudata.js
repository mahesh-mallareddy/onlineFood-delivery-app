import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Restomenudata, Restohead } from "./Menudestructure";
import { Shimmermenuui } from "./Shimmer";
import { useRestomenu, useRestoheader } from "../utils/useRestomenu"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Restomenuinfo = ({ collection_data }) => {
    const { paramsid } = useParams()

    const restomenulist = useRestomenu(paramsid);
    const [isVisible, setisVisible] = useState(false)
    const handleVisible = () => {
        setisVisible(!isVisible);
    };

    return  (
        <>
            <div className="menudata" key={collection_data.collection_id}>
                <div className="menu_head" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h5 > {collection_data.collection_name} {(collection_data.products.length)}  </h5>
                    {
                        isVisible ? (<FontAwesomeIcon icon={faChevronUp} onClick={handleVisible} style={{ cursor: 'pointer' }} />)
                            : (<FontAwesomeIcon icon={faChevronDown} onClick={handleVisible} style={{ cursor: 'pointer' }} />)

                    }

                </div>
                {isVisible && (
                    <div className="restoall">

                        {collection_data.products.map((products_data, index) => {
                            return (
                                <Restomenudata {...products_data} key={products_data.products_id} />
                            )
                        })}
                    </div>)
                }
            </div>
        </>
    )
};
export default Restomenuinfo