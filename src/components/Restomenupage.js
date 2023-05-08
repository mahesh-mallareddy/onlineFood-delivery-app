import Restomenuinfo from "./restomenudata";
import { Restohead } from "./Menudestructure";
import { useRestoheader, useRestomenu } from "../utils/useRestomenu";
import { useParams } from "react-router-dom";
import { Shimmermenuui } from "./Shimmer";

const Restomenupage = () => {
    const { paramsid } = useParams()
    const restomenulist = useRestomenu(paramsid);
    const restomenuheader = useRestoheader(paramsid);

    return (!restomenulist) ? (<Shimmermenuui />) : (
        <>
            <Restohead {...restomenuheader} key={paramsid} />
            <div>
                <div className="restomenudata">
                    {
                        restomenulist.map((menuiteminfo) => {
                            return <Restomenuinfo collection_data={menuiteminfo} />
                        })
                    };
                </div>
            </div>
        </>
    )
}
export default Restomenupage