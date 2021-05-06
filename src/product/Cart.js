import {useEffect,useState} from 'react'
export default function Cart({cart}){

    
   
    const [cartData,setCartData] = useState({...cart});
    useEffect(() => {
        console.log(cartData);
        console.log(Cart);
     },[cartData])
    const handleFormChange = (index) => {
       

          cartData[index].quantity += 1
          cartData[index].price = cartData[index].quantity  * cart[index].price
         console.log();
          setCartData({...cartData})
     }


     const handleDecrement = (index) => {
       
        if(cartData[index].quantity > 0){
            cartData[index].quantity -= 1
            cartData[index].price = cartData[index].quantity  * cart[index].price

            console.log(cartData);
             setCartData({...cartData})
         }
        
   }

      
    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    </tr>

                </thead>
                <tbody>
                    {cartData.map((product,index) => (
                        <tr key={product.id}>
                            <td>
                            {product.title}
                            </td>
                            <td>
                               
                            <button type="button" onClick={() => handleFormChange(index)}>+</button>
                            <span>{product.quantity} </span>

                            <button type="button"  onClick={() => handleDecrement(index)}>-</button>

                            </td>
                            <td>
                              <p>{product.price}</p>
                            </td>
                        </tr>
                
                    ))}
                   
                </tbody>
            </table>
           
        </div>
    )
}