import Restomenuinfo from "./restomenudata";
import { Restohead } from "./Menudestructure";
import { useRestoheader } from "../utils/useRestomenu";
import { useParams } from "react-router-dom";

const Restomenupage = () => {
    const { paramsid } = useParams()

    const restomenuheader = useRestoheader(paramsid);
    return (!restomenulist) ? (<Shimmermenuui />) :(
        <>
            <Restohead {...restomenuheader} key={paramsid} />
            <Restomenuinfo />
        </>
    )
}
export default Restomenupage