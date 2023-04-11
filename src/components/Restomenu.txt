import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

 const Restomenuinfo =()=>{
    const {paramsid} = useParams()

    const [restomenulist,setrestomenulist] = useState([])

async function getrestoinfo(){
const fetchurl = await fetch("https://www.eatsure.com/v1/api/get_all_products/brand_id/"+paramsid+"/store_id/10370/source_id/13")
const data = await fetchurl.json()
const restodata = data?.data?.collections

const collections = restodata.map((e , index)=>{
   return e.products[0]
});

setrestomenulist(restodata)
console.log(data.data)
console.log(restodata)
console.log(collections)
};  
    useEffect(()=>{
getrestoinfo()
    },[])

    return(
        <div>
            it is restomenu components
           <ul>
            { restomenulist.map((collection_data, index)=>{
                return <li className="menudata" key={collection_data.collection_id}>{collection_data.collection_name}
                <ul>
                    {collection_data.products.map((products_data,index)=>{
                        return <li className="menulist" key={products_data.product_id}> { products_data.product_name} </li>
                    })}
                </ul>
                </li>
            }) }
           </ul>
        </div>
    )
};
export default Restomenuinfo