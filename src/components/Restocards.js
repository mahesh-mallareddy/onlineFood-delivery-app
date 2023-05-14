import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Shimmerui } from "./Shimmer"


export const Restocards = ({ banner_image_es, brand_name, description }) => {
    return (
        <div className="cardsinfo">
            <div className="restocardsinfo">
                <div className="restoimage">
                    <img src={banner_image_es} />
                </div>
                <div className="restoinfo">
                    <div className="restoinfotext">
                        <h4>{brand_name}</h4>
                        <p>{description}</p>
                        <button>Check Menu</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function filter(getsearch, restorent) {
    const searchfilter = restorent.filter((restorent) => restorent.brand_name.toLowerCase().includes(getsearch.toLowerCase()));
    return searchfilter;

};

export default Cards = () => {
    const [restorent, setrestorent] = useState([])
    const [filterrestorent, setfiltetrrestorent] = useState([])
    const [getsearch, setsearch] = useState()

    let getcardsdata = async () => {
        let fetchurl = await fetch("https://node-foodapp-code-madpur.onrender.com/api/get_restaurants?store_id=10370&city_id=5785&");
        let data = await fetchurl.json()
        let info = data?.data?.data
        setfiltetrrestorent(info)
        setrestorent(info)
        console.log(info)
        console.log(data.data.data.length)
    }

    useEffect(() => {
        getcardsdata()
    }, [])


    if (!restorent) return null;

    return (restorent?.length === 0) ? (<Shimmerui />) : ( 
        <>
            <div className="sreachinput">
                <input className="search" type="text" placeholder="Search your food"
                    value={getsearch}
                    onChange={(e) => {
                        setsearch(e.target.value)
                    }}></input>
                <button onClick={() => {
                    setfiltetrrestorent(filter(getsearch, restorent, setsearch("")))
                }}>search</button>
            </div>
            <Bodycardsheading />
            <div className="restocards">
                <div className="restocards2">
                    {
                        filterrestorent.map((restoin) => {
                            return (<Link to={"/restomenu/" + restoin.brand_id} keys={restoin.brand_id}>
                                <Restocards {...restoin} />
                            </Link>)
                        }
                        )}
                </div>
            </div>
        </>
    )
};

export const Bodycardsheading = () => (
    <div className="bodyheading">
        <p>Choose From Trusted Restaurants</p>
    </div>
);



