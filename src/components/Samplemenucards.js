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

export default Samplemenu