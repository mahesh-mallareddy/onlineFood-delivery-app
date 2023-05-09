import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItems , removeItem} from '../utils/CartSlice';


export const Restohead = ({ brand_banner_image_es, brand_rectangle_logo, brand_display_name }) => {
    return (
        <div className="restohead" style={{
            backgroundImage: `url(${brand_banner_image_es})`
        }}>
            <div className="backgrnd"></div>
            <div className="menu_maxwidth">
                <div className=" menuheader">
                    <div className="menu_img">
                        <img src={brand_banner_image_es} />
                    </div>
                    <div className="menuhead_content">
                        <img className="menulogo" src={brand_rectangle_logo} />
                        <h3>{brand_display_name}</h3>
                        <p>Hyderabad </p>
                        <div className="style_CouponCard">
                            <p>30% off - Use Code
                                <abbr>- FIRSTBITE</abbr>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export const Restomenudata = ({ item }) => {
    const { product_id, product_imageUrl, product_name, small_description, display_price } = item;

    const dispath = useDispatch();
    const [countItem, setcountItem] = useState(0)

    const handleAdditems = (item) => {
        dispath(addItems(item));
        setcountItem(countItem + 1);
        console.log("clicked")
    };
    handleRemoveitems = (product_id) => {
        dispath(removeItem(product_id));
        let updatecount = countItem > 0 ? (countItem - 1) : 0;
        setcountItem(updatecount);
    };

    return (
        <div className="menudatalist" key={product_id}>
            <div className="menulist">
                <div className="menulist_effect">
                    <div className="menulist_img">
                        <img src={product_imageUrl} alt="order" />
                    </div>
                    <div className="menulist_content">
                        <p className="menulist_tittle">{product_name}</p>
                        <p className="menulist_disc">{small_description}</p>
                        <div className="menuflex">
                            <p className="menuprice">&#8377;{display_price}</p>
                            <div style={{ display: 'flex' }}>
                                <button onClick={() => handleRemoveitems(product_id)}>-</button>
                                <h3>&nbsp;{countItem}&nbsp;</h3>
                                <button onClick={() => handleAdditems(item)}>+</button>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


