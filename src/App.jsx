 import { useState } from 'react'
 import React from 'react'
 import foods from './Foods.jsx'
 
 function App() {
  const [cartCount, setCartCount] =useState(0);

 function addtocart(){
  console.log("Added to cart");
    setCartCount(cartCount + 1);
  } 
   return (
     <div>
      <h1>Cart Count: {cartCount}</h1>
       {
       foods.map((Element) => (
         <div key={Element.id} style={{backgroundColor:"yellow",margin:"10px",padding:"20px"}}>
           <h1>{Element.name}</h1>
           <h3>{Element.category}</h3>
            <h3>Price: ₹{Element.price}</h3>
            <h3>Availability: {Element.available ? "Available" : "Not Available"}</h3> 
             <h3>Emoji: {Element.emoji}</h3>
              <img src={Element.image} alt={Element.name} style={{width:"200px",height:"200px"}} /><br/>
             <button disabled={!Element.available} onClick={addtocart}>Add to Cart</button>
         </div>
       ))
       }
     </div>
   )
 }
 
 export default App
 