

export const Card = () => {
    return (
        <div className="card">
            <div className="card-shimmer"></div>
            <div className="card-content">

            </div>
        </div>
    );
};

export const Samplehead = () => {
    return (
        <>
            <div className="restohead">
                <div className="backgrnd"></div>
                <div className="menu_maxwidth">
                    <div className=" menuheader">
                        <div className="menu_img">
                            <img src="https://product-assets.faasos.io/production/product/banner_image_es_1658739138126_Chicken%20Tikka%20Biryani%20%281%29.jpg" />
                        </div>
                        <div className="menuhead_content">
                            <img className="menulogo" src="https://rebelplus.faasos.io/production/wildfire_cms/2JUXUZOAFH.jpeg" />
                            <h3>The Biryani Life</h3>
                            <p>Hyderabad </p>
                            <div class="style_CouponCard">
                                <p>30% off - Use Code
                                    <abbr>- FIRSTBITE</abbr>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="card">
                <div className="card-shimmer"></div>
                <div className="card-content">
                    <div className="shimmer_menu">
                        <head></head>
                        <heada></heada>
                        <heada></heada>
                        <heada></heada>
                    </div>
                    <div className="cards-grid shimmer-grid">
                        {Array(6)
                            .fill("")
                            .map((e, index) => (
                                <div className="cards_menu_shimmer" key={index}>
                                    <section className="shimmer_menu_box"></section>
                                    <box></box>
                                    <boxb></boxb>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
}


export const Samplemenu = () => {
    return (
        <div className="menudata">
            <div className="menu_head">
                <h5>Pocket Friendly Rolls (05) </h5>
            </div>
            <div className="menudatalist">
                <div className="menulist">
                    <div className="menulist_effect">
                        <div className="menulist_img">
                            <img src="https://rebelplus.faasos.io/production/wildfire_cms/KR18UUU3CC.jpeg?d=375&tr:w-0.5,h-0.5" />
                        </div>
                        <div className="menulist_content">
                            <p className="menulist_tittle">2 Veg Wraps (Classic) at 120 each</p>
                            <p className="menulist_disc">Save FLAT Rs 25. An extraordinary feast to take your tastebuds on a roll! 1 Double Egg Chatpata Wrap + 1 Smoked Butter Chicken Rice Bowl </p>
                            <div className="menuflex">
                                <p className="menuprice">&#8377;299</p>
                                <button>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
{/* <div className="menudatalist" key={products_data.product_id}>
    <div className="menulist">
        <div className="menulist_effect">
            <div className="menulist_img">
                <img src={products_data.product_imageUrl} alt="order" />
            </div>
            <div className="menulist_content">
                <p className="menulist_tittle">{products_data.product_name}</p>
                <p className="menulist_disc">{products_data.small_description}</p>
                <div className="menuflex">
                    <p className="menuprice">&#8377;{products_data.display_price}</p>
                    <button>Add</button>
                </div>
            </div>
        </div>
    </div>
</div> */}




