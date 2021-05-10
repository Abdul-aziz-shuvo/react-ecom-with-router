import {useEffect,useState,useContext} from 'react'
import {ProductContext} from '../context/ProductContext'
export default function Cart(){

    const {cart,setCart} = useContext(ProductContext)
    const [totalPrice,setTotalPrice] = useState(0);

    useEffect(() => {
        localStorage.setItem('carts',JSON.stringify(cart))

        let item_total = 0
        cart.map((item) => (
            item_total += item.total_price
        ))
       
        setTotalPrice(item_total)
        
     },[cart])

    const handleIncrement = (index) => {
        cart[index].quantity += 1
        cart[index].total_price = cart[index].quantity  * cart[index].price
          setCart([...cart])
     }

     const handleDecrement = (index) => {
        if(cart[index].quantity > 1){
            cart[index].quantity -= 1
            cart[index].total_price = cart[index].quantity  * cart[index].price
            setCart([...cart])
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
                    {cart.map((product,index) => (
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