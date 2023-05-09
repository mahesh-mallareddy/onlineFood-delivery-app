import { useEffect, useState } from "react"

export const useRestomenu = (paramsid) => {

    const [restomenulist, setrestomenulist] = useState(null);
    // const [restomenuheader, setrestomenuheader] = useState(null);

    useEffect(() => {
        getrestoinfo()
    }, []);

    async function getrestoinfo() {
        const fetchurl = await fetch("https://foodapp-7fsj.onrender.com/get_all_products/brand_id/" + paramsid + "/store_id/10370/source_id/13");
        const data = await fetchurl.json()
        const restodata = data?.data?.collections
        const restoheaderdata = restodata[3].products[0]
        setrestomenulist(restodata)
        // setrestomenuheader(restoheaderdata)
    };

    return restomenulist;
};

export const useRestoheader = (paramsid) => {
    const [restomenuheader, setrestomenuheader] = useState(null);

    useEffect(() => {
        getrestoinfo()
    }, []);

    async function getrestoinfo() {
        const fetchurl = await fetch("https://foodapp-7fsj.onrender.com/get_all_products/brand_id/" + paramsid + "/store_id/10370/source_id/13");
        const data = await fetchurl.json()
        const restodata = data?.data?.collections
        const restoheaderdata = restodata[4].products[0]
        console.log(restoheaderdata)

        setrestomenuheader(restoheaderdata)
    };
    return restomenuheader;
};
