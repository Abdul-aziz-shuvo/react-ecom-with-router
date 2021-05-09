import {useEffect,useState} from 'react'
export default function Cart({cart}){

    const [cartData,setCartData] = useState(cart);
    const [totalPrice,setTotalPrice] = useState(0);

    useEffect(() => {
        localStorage.setItem('carts',JSON.stringify(cart))

        let item_total = 0
        cartData.map((item) => (
            item_total += item.total_price
        ))
       
        setTotalPrice(item_total)
     },[cartData,cart])

    const handleIncrement = (index) => {
          cartData[index].quantity += 1
          cartData[index].total_price = cartData[index].quantity  * cartData[index].price
          setCartData([...cartData])
     }

     const handleDecrement = (index) => {
        if(cartData[index].quantity > 1){
            cartData[index].quantity -= 1
            cartData[index].total_price = cartData[index].quantity  * cartData[index].price
            setCartData([...cartData])
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
                                <button type="button" onClick={() => handleIncrement(index)}>+</button>
                                <span className='mx-4'>{product.quantity} </span>
                                <button type="button"  onClick={() => handleDecrement(index)}>-</button>
                            </td>
                            <td>
                              <p>{product.total_price === product.price ? (product.quantity *  product.price).toFixed(2) :  product.total_price.toFixed(2) }</p>
                            </td>
                        </tr>
                    ))}   
                </tbody>
            </table>

            <div>
                Total Price : {totalPrice.toFixed(2)}
            </div>
        </div>
    )
}