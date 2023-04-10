export default function Swipecards({cloudinaryImageId, name, costForTwoString, slaString, area }) {

  return (
    <div className="foodcards">
     <div className="images">
       <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt="image" />
      </div>
      <div className="foodsinfo">
        <h4>{name}</h4>
        <p>{costForTwoString}<span>{"Delivary time: " + slaString}</span></p>
        <p>{area}</p>
        <input type="button" value="Order now"></input>
      </div>
    </div>
  )
};
