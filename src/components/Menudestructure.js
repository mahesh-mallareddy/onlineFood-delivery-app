

const Restomenudata= ({product_imageUrl,product_name,small_description,display_price}) => {
    
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
export default Restomenudata