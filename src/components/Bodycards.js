import { useEffect, useState } from "react";
import restolist from "./bodycardsdata";
import { Link } from "react-router-dom";

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
                        <input type="button" value="Check menu" />
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

    let getcardsdata = async ()=>{
        let fetchurl =await fetch("https://www.eatsure.com/v1/api/get_restaurants?store_id=10370&city_id=5785&");
        let data = await fetchurl.json()
        let info  = data?.data?.data
        setfiltetrrestorent(info)
        setrestorent(info)
        console.log(info)
    }
 
    useEffect(()=>{
getcardsdata()
    },[])


    return (
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
                           return ( <Link to={"/restomenu/" +restoin.brand_id} keys={restoin.brand_id}>
                              <Restocards {...restoin}  />
                            </Link>)
                        }
                        )}
                </div>
            </div>
        </>
    )
}

export const Bodycardsheading = () => (
    <div className="bodyheading">
        <p>Choose From Trusted Restaurants</p>
    </div>
);



