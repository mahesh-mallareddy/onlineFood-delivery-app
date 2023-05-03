import { useEffect, useState } from "react";
import { Restomenudata, Restohead } from "./Menudestructure";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Restomenuinfo = ({ collection_data }) => {
    const [isVisible, setisVisible] = useState(false)
    const handleVisible = () => {
        setisVisible(!isVisible);
    };

    return  (
        <>
            <div className="menudata" >
                <div className="menu_head" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h5 onClick={handleVisible} style={{ cursor: 'pointer' }}> {collection_data.collection_name} -({collection_data.products.length})  </h5>
                    {
                        isVisible ? (<FontAwesomeIcon icon={faChevronUp} onClick={handleVisible} style={{ cursor: 'pointer' }} />)
                            : (<FontAwesomeIcon icon={faChevronDown} onClick={handleVisible} style={{ cursor: 'pointer' }} />)

                    }
                </div>
                {isVisible && (
                    <div className="restoall">

                        {collection_data.products.map((products_data, index) => {
                            return (
                                <Restomenudata itemlist={products_data} key={products_data.products_id} />
                            )
                        })}
                    </div>)
                }
            </div>
        </>
    )
};
export default Restomenuinfo