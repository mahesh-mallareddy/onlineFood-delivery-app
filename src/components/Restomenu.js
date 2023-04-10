import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

 const Restomenuinfo =()=>{
    const {paramsid} = useParams()

    const [restomenulist,setrestomenulist] = useState([])

async function getrestoinfo(){
const fetchurl = await fetch("https://www.eatsure.com/v1/api/get_all_products/brand_id/"+paramsid+"/store_id/10159/source_id/13")
const data = await fetchurl.json()
const restodata = data?.data?.collections

const collections = restodata.map((e)=>{
   if (e["is_elite"] === 1)
   return e.products
});

// const products = collections.map((r)=>{
// return r
// })

// setrestomenulist(getrestodata)
// console.log(products)

console.log(collections)
};  
    useEffect(()=>{
getrestoinfo()
    },[])

    return(
        <div>
            it is restomenu components
           
        </div>
    )
};
export default Restomenuinfo