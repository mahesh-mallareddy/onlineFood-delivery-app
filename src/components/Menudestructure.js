export const Restohead = ({ brand_banner_image_es, brand_rectangle_logo, brand_display_name }) => {
    return (
        <div className="restohead" style={{
            backgroundImage:`url(${brand_banner_image_es})`}}>
            <div className="backgrnd"></div>
            <div className="menu_maxwidth">
                <div className=" menuheader">
                    <div className="menu_img">
                        <img src={brand_banner_image_es}  />
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

export const Restomenudata = ({itemlist}) => {
  const { product_imageUrl, product_name, small_description, display_price } = itemlist
    return (
        <div className="menudatalist" >
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
                            <button>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
