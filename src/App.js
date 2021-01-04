import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
  name: "Steak",
  image : "https://www.google.com/search?q=steak.jpg&rlz=1C5CHFA_enKR919KR919&sxsrf=ALeKk022k6Q_BmQd4rgWFXIwUDunct7iww:1609784826102&tbm=isch&source=iu&ictx=1&fir=CqYdGQXM3EfPNM%252C8ruPAmqMDuQY0M%252C_&vet=1&usg=AI4_-kTmrKM4y0CY3vHsGoAGJ5MpIjJ5Vg&sa=X&ved=2ahUKEwjmwuXl84LuAhUpw4sBHdOzD1wQ9QF6BAgFEAE#imgrc=CqYdGQXM3EfPNM",

},
{
  id:2,
  name: "bread",
  image : "https://www.google.com/search?q=bread.jpg&rlz=1C5CHFA_enKR919KR919&sxsrf=ALeKk02lsFpOZQHjjK2ni-p6YFOILr5hfA:1609784841612&tbm=isch&source=iu&ictx=1&fir=HqFVaFy4rvO4gM%252CZmUKYpVXy-MzsM%252C_&vet=1&usg=AI4_-kRWEnwWNBXOWC_uH_MMXNJHSLZPoQ&sa=X&ved=2ahUKEwipm5jt84LuAhWRGqYKHVeBBYgQ9QF6BAgHEAE#imgrc=HqFVaFy4rvO4gM",
  rating: 4.5
}
]


function Food({name, picture, rating}) {
  return (
  <div>
    <h2>I love {name}</h2>
    <h4> {rating}/5.0</h4>
    <img src= {picture} alt={name}/>
  </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};


function App() {
  return (
    <div>
      {foodILike.map(item => (<Food key={item.id} name={item.name} picture={item.image} rating={item.rating} />))}
    </div>
  );
}

export default App;
