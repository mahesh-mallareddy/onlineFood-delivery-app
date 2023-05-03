// import { useUserAuth } from "../utils/context/userAuthcontext";

// export const Intro = () => {
//     const { stateuser } = useUserAuth();
//     let name;
//     if (stateuser) {
//         if (stateuser.displayName != null) {
//             name = stateuser.displayName;
//         } else {
//             name = stateuser.email;
//         }
//     }

//     return (
//         <div className="nav-intro">
//             <span style={{ color: 'green' }} >
//                 {" "}
//                 {stateuser ? `Hello ${name} ` : "Please Login"} !!!
//             </span>
//         </div>
//     );
// };

export default Banner = () => {
    return (

        <div className="banners">
            <div>
            <img src="https://product-assets.faasos.io/production/product/image_1676454173344_WB_freeD.jpg" />
            <img src="https://product-assets.faasos.io/production/product/image_1663134309558_8_1000x500.jpg" />
            </div>
        </div>

    )
}